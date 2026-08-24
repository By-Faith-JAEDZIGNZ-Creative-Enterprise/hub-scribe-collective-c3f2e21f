# In-House Weekly Newsletter via Resend

Migrate the weekly newsletter off MailChimp and run it in-house: subscribers stored in your backend, a branded weekly digest email built from your latest stories, sent through Resend on a weekly schedule — plus a one-time announcement email to your contacts about new stories and the Facebook page.

## What gets built

### 1. Connect Resend
- Link the existing "Jaeden's Resend" connection to this project so the backend can send email.
- **Your action needed:** verify `hattiesburghub.com` in your Resend dashboard by adding the DNS records it shows you at Cloudflare (where your DNS lives). Emails can only be sent to your own address until the domain is verified — this is the one external step I can't do for you.

### 2. Import the audience
- Import your MailChimp export (4 contacts) into the subscriber database, de-duplicated.
- Add the 6 new contacts (Acoff Building Services, Polaris BHM, ASL Creative, The Reach, Setcom, JAEDZIGNZ) since they've opted in.
- Two flags from the export: `test-zapier@hattiesburghub.com` looks like a test entry (recommend skipping), and `jeffrey.pitts@waggonereng.coom` has a likely typo in the domain (`.coom`) — will import as-is unless you confirm the correct address.

### 3. Weekly digest email (automated)
- A backend job that runs weekly (proposed: Mondays, 8:00 AM CT) and:
  - Pulls your latest stories from the site's RSS feed (auto-generated at build time, so it's always current)
  - Builds a branded "Hub City Digest" email matching the site's look — top stories with images, plus a follow-us-on-Facebook block linking to facebook.com/hattiesburghub
  - Sends it to every active subscriber, personalized with first name where known
- Every email includes a working unsubscribe link (required for marketing email and good for deliverability).

### 4. Unsubscribe page
- A branded `/unsubscribe` page on the site: clicking the link in any email confirms the unsubscribe and marks the subscriber inactive. They stop receiving emails immediately; their record stays in the database.

### 5. One-time announcement email
- A launch announcement to the full list: what's new on the Hub (latest original stories) + an invitation to follow the Facebook page.
- Sent once after setup is complete and the domain is verified; doubles as a live test of the whole pipeline.

### 6. Cut over from MailChimp
- Remove the Zapier webhook from the signup form (it currently syncs new signups to MailChimp) — the database becomes the single source of truth.
- Optionally: new subscribers get an instant branded welcome email via Resend.
- Your side: pause/delete the MailChimp RSS-to-email campaign so subscribers don't get duplicates, and you can cancel MailChimp whenever ready.

## Technical details (for reference)
- New Edge Functions: `send-weekly-digest` (builds + sends the digest; also handles the one-time announcement mode) and `newsletter-unsubscribe` (marks `is_active = false`).
- Sends go through the Resend connector gateway (`POST /emails`) using `LOVABLE_API_KEY` + `RESEND_API_KEY`, from an address like `digest@hattiesburghub.com` once the domain is verified in Resend.
- Weekly scheduling via `pg_cron` in the database calling the digest function; the function validates a cron token stored in a config table so it can't be triggered publicly.
- Subscribers stay in the existing `newsletter_subscribers` table; the digest function reads it with the service role and only emails `is_active = true` rows.
- Digest content source: `https://www.hattiesburghub.com/rss.xml` (top ~6 items), so no story data is duplicated.

## Notes
- Lovable's built-in email is for one-to-one transactional email only, so Resend is the right choice for a subscriber newsletter — good call.
- Sending to a list requires an unsubscribe link and honest subject lines (both included); since all contacts opted in, you're compliant.
