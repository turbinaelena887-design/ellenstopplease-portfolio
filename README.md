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

Use JPEG/WebP covers and browser-compatible H.264 MP4 videos. Keep hover clips short, muted, and compressed; they only load after mouse hover and do not autoplay on touch devices or with reduced motion. Full films load on user request, use native controls, and preserve their original ratio. Set `aspectRatio` to the original video dimensions (for example, `9 / 16` for portrait or `16 / 9` for landscape). Project films keep that ratio; portfolio covers and hover previews use the original horizontal editorial frames. Covers with different proportions crop to fill the frame. Project films autoplay muted on opening; use the player volume control to enable sound. Next Image optimizes raster cover and gallery images. Add descriptive gallery alt text. For optional galleries, width and height can be refined in the project template if media have very different dimensions.

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

## FLOWERY case study images

Edit `data/flowery-case-study.ts`, under `floweryCaseStudy.gallery`. All five slots start with `src: null` and render a labeled frame. Upload a still into `public/media/`, then change only its `src` to `/media/your-file.jpg`. Keep the filename and extension exact. Local image dimensions are read automatically. All five stills appear together in The Process, in compact 3:4 viewing frames; object-fit: contain preserves each original image without cropping. The reserved frames prevent shifts during loading. Missing/unreadable image files keep the intentional placeholder. Images load lazily below the film. `focalPoint` is an optional alignment setting, such as `50% 35%`; stills use `object-fit: contain` to keep the full image visible.

| Key | Location | Empty frame |
| --- | --- | --- |
| `floweryStill01` | The Process, image 01 | 3:4 |
| `floweryStill02` | The Process, image 02 | 3:4 |
| `floweryStill03` | The Process, image 03 | 3:4 |
| `floweryStill04` | The Process, image 04 | 3:4 |
| `floweryStill05` | The Process, image 05 | 3:4 |

The five stills appear in one row on wide desktops, three columns on smaller desktops, and two columns on mobile. Project pages place the video on the left and summary on the right on desktop; these stack on mobile. Players fit the available viewport height and retain native fullscreen controls. Copy and tool descriptions are in the same data file. The existing movie and portfolio cover remain in `data/projects.ts`; this case study reuses those assets. It presents FLOWERY as an independent spec commercial, not commissioned work. Other project pages retain their original template.

## LA DOLCE VITA

The second project replaces RIKKY HYPE at `/projects/la-dolce-vita`. Old `/projects/rikky-hype` links redirect to it. Original RIKKY HYPE media files remain untouched. The wine film and cover have not yet been supplied; the page reserves the same compact 9:16 player space as FLOWERY with an intentional neutral placeholder. Add the film, hover clip, and cover paths in `data/projects.ts` once their files are uploaded. Do not reuse the unrelated RIKKY HYPE demonstration film as wine footage.

All wine case copy and five gallery paths live in `data/italian-wine-case-study.ts`, under `italianWineCaseStudy.gallery`. Change `src: null` to a local `/media/your-frame.jpg` path and optionally update `alt` and `focalPoint`. The shared image component detects local dimensions and uses placeholders for missing files.

| Slot | Position |
| --- | --- |
| `italianWineStill01` | After The Concept — Italian estate |
| `italianWineStill02` | After My Role — human connection |
| `italianWineStill03` | Beside image 02 — wine ritual |
| `italianWineStill04` | After The Process — product details |
| `italianWineStill05` | Before The Result — cinematic atmosphere |
