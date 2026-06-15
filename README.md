# Backend Developer / AI Data Engineer Portfolio

Production-ready single-page portfolio built with Next.js 15 App Router, TypeScript, TailwindCSS, Framer Motion, and Lucide Icons.

## Stack

- Next.js 15
- TypeScript
- TailwindCSS
- Framer Motion
- Lucide Icons
- Vercel-ready configuration

## Project Structure

```text
portfolio/
├─ app/
├─ components/
├─ constants/
├─ package.json
├─ tailwind.config.ts
├─ tsconfig.json
└─ vercel.json
```

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Personal Information

Update all editable profile content in:

`constants/profile.ts`

This includes:

- Name
- Title
- Intro copy
- Career history
- Projects
- Awards
- Contact links
- Site URL for SEO metadata

## Production Build

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Import the `portfolio` directory as a Vercel project.
2. Framework preset: `Next.js`.
3. Build command: `npm run build`.
4. Output directory: leave default.
5. Set the production domain, then update `siteUrl` in `constants/profile.ts`.

## Notes

- Dark mode is the default visual theme.
- SEO metadata, OpenGraph image, `robots.txt`, and `sitemap.xml` are included.
- The UI is content-driven from a single profile constants file.
