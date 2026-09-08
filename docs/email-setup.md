# Email setup (Resend)

The enquiry form posts to `src/app/api/booking/route.ts`, which sends through
[Resend](https://resend.com). Enquiries carry `Reply-To` set to the customer,
so replying goes straight back to them.

## Current configuration

| Item | Value |
| --- | --- |
| Resend account | Kingpin Engineering's own (owner `contact@kingpinengineering.com.au`) |
| API key | Sending-only |
| From | `Kingpin Engineering Website <onboarding@resend.dev>` |
| To | `contact@kingpinengineering.com.au` |

Resend's shared test sender normally refuses to deliver anywhere except the
account owner's address. That is exactly the destination here, so delivery
works today without a verified domain.

Environment variables live in `.env.local` for local dev (see `.env.example`)
and are set on the Vercel project for production. Changing them there needs a
redeploy to take effect.

## Remaining step: send from the real address

Mail currently leaves as `onboarding@resend.dev`, which is functional but reads
poorly in an inbox. To send as `contact@kingpinengineering.com.au`:

1. In the Resend dashboard for this account, add the domain
   `kingpinengineering.com.au`. It will issue its own DKIM record.
2. Add that record at the DNS host (nameservers are TPP Wholesale's
   "The Console", `ns1/ns2/ns3.partnerconsole.net`), along with the `send`
   subdomain MX and TXT records Resend lists.
3. Once the dashboard shows verified, set `RESEND_FROM_EMAIL` to
   `Kingpin Engineering Website <contact@kingpinengineering.com.au>` in
   `.env.local` and on Vercel, then redeploy.

None of this touches the Google Workspace MX record on the root domain, so
inbound mail is unaffected.

## Leftovers worth cleaning up

The domain was first added to the Beacon X Digital Resend account, and that
attempt left a DKIM record in DNS:

- `resend._domainkey` TXT, value starting `p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC1jLL3`

It is inert now and will be superseded by the record the new account issues.
The `send` MX and TXT records already in DNS stay valid for whichever account
verifies the domain.

Also note the root domain gained an SPF record during setup,
`v=spf1 include:_spf.google.com ~all`, which the Google Workspace mail was
missing entirely before. Worth keeping.

## Testing

```bash
# Real submission through the live form
curl -X POST "https://www.kingpinengineering.com.au/api/booking" \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","phone":"0870813155","email":"you@example.com","message":"Test"}'
```

`npm run test:enquiry-api` exercises the route with a mocked provider and never
sends anything.
