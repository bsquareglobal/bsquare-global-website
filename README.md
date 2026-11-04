# BSquare Global Website

A responsive React + Vite website for BSquare Global. The public experience includes Home, Projects, Gallery and Contact pages, plus a private `/admin` content manager.

## Design and content

- The visual layout is recreated from the supplied Obry demo reference: editorial typography, spacious portfolio sections, split image/text layouts, numbered service rows, portfolio tiles, pricing cards, FAQ accordion, animated reveals and a compact mobile menu.
- All business identity, copy, logo and photography are sourced from BSquare Global's existing public website. Obry branding, text and photography are not used.
- BSquare Global's original WordPress media image URLs are used for photographs. This keeps the exact source images and avoids adding stock imagery. The browser loads them directly from the company's current website.
- The public BSquare Global site does not identify named client projects in its accessible homepage content. The Projects page therefore presents the published theatre gallery until genuine project records are added in Admin; it does not invent client names or case studies.

## Local setup

1. Install Node.js 20 or later.
2. Copy `.env.example` to `.env` and configure the public Supabase values and Cloudinary cloud name.
3. Run `npm install`.
4. Run `npm run dev`.
5. Verify the production build with `npm run build`.

## Routes

- `/` – Home
- `/projects` – Published projects, or official gallery images until project records are added
- `/gallery` – Image gallery with lightbox
- `/contact` – Contact details and enquiry form
- `/admin` – Private content manager; not shown in the public navigation

## Business details from the official website

- Email: projects@bsquareglobal.com
- India: SR Building, 708/D, Peyad, Trivandrum, Kerala
- UAE: C1-IF-SF 4389, P.O. Box 932, Ajman, UAE
- India phone: +91 97447 64007; +91 97447 14449
- UAE phone: +971 54 577 5599; +971 56 941 7964
- Social: Instagram `https://www.instagram.com/bsquareglobal/`; Facebook `https://www.facebook.com/profile.php?id=61577669343072`; YouTube `https://www.youtube.com/@BSquareGlobal`
- WhatsApp enquiry number: +91 97447 14449

## GitHub Pages

1. Upload the extracted project files to the repository root on branch `main`.
2. Keep `.github/workflows/deploy.yml` and remove any unused empty workflow file created during setup (for example `.github/workflows/main.yml`).
3. In repository Settings → Pages, select **GitHub Actions** as the source.
4. The included workflow installs dependencies, builds the Vite site and deploys `dist`.
5. The router automatically uses `/bsquare-global-website` on the GitHub Pages project URL and `/` when the custom domain is connected later.
6. Connect `bsquareglobal.com` only after the site has been reviewed and approved.

## Admin, Supabase and Cloudinary

The Admin page requires Supabase Auth and the Cloudinary signing Edge Function. Follow `supabase/schema.sql` and the setup notes below. Do not enable public signups. Use a dedicated administrator account and review row-level security policies before production use.

Required GitHub Actions secrets:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `VITE_CLOUDINARY_CLOUD_NAME`
- `VITE_WHATSAPP_NUMBER` (use `91947714449`)

Cloudinary signing Edge Function secrets:
- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`

The API secret must never be exposed in frontend code. The Edge Function should require JWT verification and only authorised administrators should be allowed to publish or delete content.
