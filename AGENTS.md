<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- All clinic details, services, FAQs, articles, insurers and hospitals live in `src/content/*.ts`; pages render from these files so content updates never require redesign.
- Unverified credentials/contacts stay `null` or `verified: false` and render as "Pending" placeholders — never hard-code unverified facts in components.
- No database/auth: the appointment form validates client-side and hands off via WhatsApp only when a number is configured, per owner's request to keep integrations inactive until verified.
- Canonical tags, sitemap and robots use `site.url`; SEO meta is built with `seo()` in `src/lib/seo.ts`.
