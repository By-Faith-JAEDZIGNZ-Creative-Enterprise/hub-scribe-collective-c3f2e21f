# Roadmap

- [x] Publish William Carey and Montague Sculpture Park stories; verify photos render on live site
- [x] Send story alert email blast (Montague) to all active subscribers
- [x] Catch up William Carey alert (skipped by marker; sent via force_slug, marker untouched)
- [x] Add zapier_social_webhook hook to send-story-alert (fires story payload once alert fully sent; stored in newsletter_config)
- [ ] Zapier social posting: waiting on user to create the Zap (Webhooks by Zapier catch hook -> Facebook Pages post) and share the hook URL, then store it in newsletter_config
- [ ] Facebook direct posting (page ID + page token) remains an alternative if the user provides credentials
