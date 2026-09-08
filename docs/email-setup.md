# Email setup (Resend)

The enquiry form posts to `src/app/api/booking/route.ts`, which sends through
[Resend](https://resend.com). Enquiries arrive from the site's own domain with
`Reply-To` set to the customer, so replying goes straight back to them.

## Current configuration

| Item | Value |
| --- | --- |
| Resend account | Beacon X Digital |
| Domain | `kingpinengineering.com.au` (id `8154e1fa-bc0f-4c5c-bfa8-eea82592d5be`, region `us-east-1`) |
| API key | `kingpin-engineering-website` - sending only, scoped to this domain |
| From | `Kingpin Engineering Website <contact@kingpinengineering.com.au>` |
| To | `contact@kingpinengineering.com.au` |

Environment variables live in `.env.local` for local dev (see `.env.example`)
and must be set again in the hosting platform for production.

## DNS records

Add these at the DNS host for `kingpinengineering.com.au` (nameservers are
`ns1/ns2/ns3.partnerconsole.net`). Sending stays broken until they resolve.

| Type | Name | Value | Priority |
| --- | --- | --- | --- |
| TXT | `resend._domainkey` | `p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC1jLL3iFuRQBGIvBy905W4IEFbkvXgfWvr1TQgzvShd5+eLvIhmETHVFCNXQqndw3CeGK4fOGa4BJnyl7soit88Dbkey/WYxgQJ5ex1kFIjBIYDRYwhBAsyhJavi1W7CTY3//5OPqrkaktZp4pMHQoAQ1JFEZgE/lxoyUQeb5cZwIDAQAB` | - |
| MX | `send` | `feedback-smtp.us-east-1.amazonses.com` | 10 |
| TXT | `send` | `v=spf1 include:amazonses.com ~all` | - |

If the DNS panel wants fully qualified names, use
`resend._domainkey.kingpinengineering.com.au` and
`send.kingpinengineering.com.au`.

None of this touches the existing Google Workspace MX record on the root
domain, so inbound mail is unaffected.

Optional hardening, unrelated to Resend: the root domain has no SPF or DMARC
record even though Workspace sends from it. Worth adding
`v=spf1 include:_spf.google.com include:amazonses.com ~all` at the root and a
`_dmarc` policy.

## Verify and test

```bash
# Check DNS has propagated
nslookup -type=TXT resend._domainkey.kingpinengineering.com.au 8.8.8.8

# Ask Resend to verify (needs a full-access account key, not the sending key)
curl -X POST "https://api.resend.com/domains/8154e1fa-bc0f-4c5c-bfa8-eea82592d5be/verify" \
  -H "Authorization: Bearer $RESEND_ACCOUNT_KEY"

# Status
curl "https://api.resend.com/domains/8154e1fa-bc0f-4c5c-bfa8-eea82592d5be" \
  -H "Authorization: Bearer $RESEND_ACCOUNT_KEY"
```

Once status is `verified`, run `npm run dev` and submit the contact form, or
send a one-off:

```bash
curl -X POST "https://api.resend.com/emails" \
  -H "Authorization: Bearer $RESEND_API_KEY" -H "Content-Type: application/json" \
  -d '{"from":"Kingpin Engineering Website <contact@kingpinengineering.com.au>","to":"contact@kingpinengineering.com.au","subject":"Test","text":"Test"}'
```

`npm run test:enquiry-api` exercises the route with a mocked provider and never
sends anything.
