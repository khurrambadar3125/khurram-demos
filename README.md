# khurram-demos

Consolidated multi-domain demo project. **One Vercel build serves N demos via hostname routing.**

## Why this exists

Previously: 12 separate Vercel projects → 12 build pipelines → ~$140/cycle in build minutes.
Now: one project hosts unlimited demos. One build = one set of billed minutes regardless of how many domains.

## Add a new demo

1. Create `pages/demos/<slug>.jsx` (copy `example.jsx` as a starting point)
2. Add to `middleware.js` `DOMAIN_MAP`:
   ```js
   'mydemo.com': 'mydemo',
   'www.mydemo.com': 'mydemo',
   ```
3. In Vercel dashboard → this project → Domains → add `mydemo.com`
4. Push. Vercel issues SSL automatically. Middleware routes traffic.

## Cost discipline

- `vercel.json` `ignoreCommand` skips build for docs-only commits
- `.vercel-ignore-build.sh` is the skip logic
- `.git/hooks/pre-push` warns before pushes that will trigger a build
- Memory rule: batch commits, ≤3 pushes per feature

## Local dev

```bash
npm install
npm run dev   # http://localhost:3001
```

## Note on existing demos

The 11 existing standalone demos (mizan-gmalc, shari-lme, etc.) keep their own repos for now. They have the same cost discipline installed so their build burn is minimal. New demos should go here instead of as standalone projects.
