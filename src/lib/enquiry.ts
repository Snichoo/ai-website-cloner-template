type Enquiry = {
  name: string;
  phone: string;
  email: string;
  message: string;
  address: string;
};

function fieldValue(data: FormData, name: string) {
  const value = data.get(name);
  return typeof value === "string" ? value.trim() : "";
}

export function enquiryFromFormData(data: FormData): Enquiry {
  return {
    name: fieldValue(data, "name") || [fieldValue(data, "firstName"), fieldValue(data, "lastName")].filter(Boolean).join(" "),
    phone: fieldValue(data, "phone"),
    email: fieldValue(data, "email"),
    message: fieldValue(data, "message"),
    address: fieldValue(data, "address"),
  };
}

export async function sendEnquiry(enquiry: Enquiry) {
  const response = await fetch("/api/booking", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(enquiry),
  });
  const result: unknown = await response.json().catch(() => null);
  if (!response.ok || !result || typeof result !== "object" || !("ok" in result) || result.ok !== true) {
    throw new Error("Enquiry was not accepted.");
  }
}
