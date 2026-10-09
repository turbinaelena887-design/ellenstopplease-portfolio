# ellenstopplease — cinematic creative portfolio

Next.js App Router, TypeScript, Tailwind CSS 4, and Motion for React. Four editable concept projects, responsive editorial layouts, lazy hover previews, full project pages, reduced-motion support, and local placeholder artwork. All artwork and silent four-second motion clips are demonstration media, not client campaigns.

## Run and preview

Use Node.js 22 or 24 and npm. From this directory:

```sh
npm ci
npm run dev
```

Open http://localhost:3000 on your own machine. In a cloud editor, use its port forwarding for port 3000 if available. This onboarding interface does not provide a browser preview. Production rehearsal: `npm run build`, then `npm start`.

## Replace content and media

Edit `data/projects.ts`. Each entry has `slug`, `title`, `category`, `year`, `description`, `cover`, optional `previewVideo`, optional `fullVideo`, and `gallery` (an array of `{ src, alt }`). Put files in `public/media/` and reference them as `/media/your-file.jpg` or `/media/your-film.mp4`. Do not prefix paths with `public`.

Use JPEG/WebP covers and browser-compatible H.264 MP4 videos. Keep hover clips short, muted, and compressed; they only load after mouse hover and do not autoplay on touch devices or with reduced motion. Full films load on user request, use native controls, and preserve their original ratio. Grid previews deliberately crop to fill their cinematic frames. Next Image optimizes raster cover and gallery images. Add descriptive gallery alt text. For optional galleries, width and height can be refined in the project template if media have very different dimensions.

Add a project by copying an entry with a unique slug. The homepage and static project routes use the same list. Replace the placeholder email `hello@example.com` in `app/page.tsx`, and edit the identity, biography, and metadata in `components/navigation.tsx`, `app/page.tsx`, and `app/layout.tsx` before public deployment. Replace the demonstration-concept labels when publishing real work. No form backend, account, or secret is required.

## Validation

```sh
npm run lint
npm run typecheck
npm run build
```

## Deploy publicly

Push the project to your GitHub repository, import it into Vercel, choose Next.js, and deploy. Use this directory as the project root. No environment variables are required for running the app. For correct social sharing URLs on a custom domain, set `NEXT_PUBLIC_SITE_URL` to your public HTTPS origin before building (Vercel’s production hostname is detected automatically). Add your custom domain in the hosting settings. Alternatively, any host supporting Node.js and Next.js can run `npm ci`, `npm run build`, and `npm start`. Configure its assigned PORT and reverse proxy according to the host. Large production films should live on your media CDN; remote gallery/cover images require a matching `images.remotePatterns` setting in Next configuration. Current media use only local files.

## Cloud environment

Use the existing checkout at `/workspace/ellenstopplease-portfolio`; no additional worktree is needed. Dependency installation is reproducible with the committed package lock. Servers must be started again after environment restoration; running processes are not part of the saved snapshot.
