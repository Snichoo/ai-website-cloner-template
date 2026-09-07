/** Tests the real route with a mocked mail provider. Never sends email. */
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import vm from "node:vm";
import ts from "typescript";

const require = createRequire(import.meta.url);
const source = await readFile(new URL("../src/app/api/booking/route.ts", import.meta.url), "utf8");
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;
const sent = [];
let outcome = "success";
const env = {
  RESEND_API_KEY: "test-key-never-used-on-network",
  RESEND_TO_EMAIL: "owner@example.invalid",
  RESEND_FROM_EMAIL: "website@example.invalid",
};
const routeModule = { exports: {} };
vm.runInNewContext(compiled, {
  module: routeModule,
  exports: routeModule.exports,
  process: { env },
  require(name) {
    if (name === "next/server") return require(name);
    if (name === "resend") {
      return { Resend: class {
        emails = { send: async (payload) => {
          sent.push(payload);
          if (outcome === "throw") throw new Error("Simulated unavailable provider");
          return { error: outcome === "error" ? { message: "Simulated rejection" } : null };
        } };
      } };
    }
    throw new Error(`Unexpected dependency: ${name}`);
  },
});
const post = (payload) => routeModule.exports.POST(new Request("http://localhost/api/booking", {
  method: "POST",
  headers: { "content-type": "application/json" },
  body: JSON.stringify(payload),
}));
const enquiry = {
  name: "Test enquiry",
  phone: "0800000000",
  email: "customer@example.invalid",
  company: "Workshop & Co",
  address: "Example address",
  message: "Please quote for repairs.\n<script>alert('test')</script>",
};

for (const invalid of [null, [], {}, { ...enquiry, phone: 123 }, { ...enquiry, email: "invalid" }, { ...enquiry, message: "x".repeat(10001) }]) {
  assert.equal((await post(invalid)).status, 400, "Malformed enquiry must be rejected");
}
assert.equal(sent.length, 0, "Invalid requests must not reach the mail provider");
const malformed = await routeModule.exports.POST(new Request("http://localhost/api/booking", { method: "POST", body: "{" }));
assert.equal(malformed.status, 400);

const response = await post(enquiry);
assert.equal(response.status, 200);
assert.deepEqual(await response.json(), { ok: true });
assert.equal(sent.length, 1);
assert.equal(sent[0].replyTo, enquiry.email);
assert.ok(sent[0].text.includes(enquiry.message), "Message must reach the plain-text email intact");
assert.ok(sent[0].text.includes(enquiry.address), "Address must reach the email");
assert.ok(sent[0].html.includes("&lt;script&gt;"), "User HTML must be escaped");
assert.ok(!sent[0].html.includes("<script>"));

for (const failure of ["error", "throw"]) {
  outcome = failure;
  const result = await post(enquiry);
  assert.equal(result.status, 502, "Provider failure must not report success");
  assert.equal((await result.json()).ok, undefined);
}
delete env.RESEND_API_KEY;
assert.equal((await post(enquiry)).status, 500, "Missing mail configuration must report failure");
assert.equal(sent.length, 3, "Missing configuration must not call the provider");
console.log("Enquiry API checks passed: validation, message/address delivery, HTML escaping, provider failures and missing configuration. No emails sent.");
