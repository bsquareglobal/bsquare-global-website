# BSquare Global website

A four-page React/Vite website (Home, Projects, Gallery, Contact) with a protected `/admin` route. Designed for GitHub Pages hosting, Supabase data/authentication and Cloudinary image delivery.

## Important before going live

This is a deployable starter implementation. Connect your own Supabase and Cloudinary accounts, run the SQL, configure Edge Function secrets, create the administrator account, and verify policies before publishing. The included sample project/gallery images are illustrative stock imagery and must be replaced with approved BSquare Global project media.

## Local setup

1. Install Node.js 20 or later.
2. Copy `.env.example` to `.env` and fill in the public Supabase URL/anon key and Cloudinary cloud name.
3. Run `npm install`.
4. Run `npm run dev`.
5. Build with `npm run build`.

## Supabase setup

1. Create a Supabase project.
2. Run `supabase/schema.sql` in SQL Editor.
3. In Authentication, disable public sign-ups after creating your admin user.
4. Create an administrator account in Supabase Auth.
5. Deploy the `cloudinary-sign` Edge Function.
6. Set Edge Function secrets:
   - `CLOUDINARY_CLOUD_NAME`
   - `CLOUDINARY_API_KEY`
   - `CLOUDINARY_API_SECRET`
7. Configure the function to require JWT verification.
8. Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` to local `.env` and GitHub Actions secrets.

**Security review required:** The starter SQL uses authenticated-role policies as a convenient single-admin baseline. For production with multiple authenticated users, replace these with a dedicated admin allow-list (for example an `admin_users` table keyed by `auth.uid()`) and enforce that check in every write policy and Edge Function. Do not create ordinary public accounts.

## Cloudinary

Create a Cloudinary account and set the three Cloudinary secrets in Supabase Edge Function secrets. The browser asks the authenticated Edge Function for a short-lived upload signature; the API secret is never sent to the browser. The current admin UI uploads a main project image or one gallery image per submission. Extend the UI to multiple image uploads and project image ordering if required.

## GitHub Pages

1. Push this project to a GitHub repository on branch `main`.
2. In repository Settings → Pages, choose **GitHub Actions** as the source.
3. Add repository Actions secrets:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
   - `VITE_CLOUDINARY_CLOUD_NAME`
   - `VITE_WHATSAPP_NUMBER` (value: `91947714449`)
4. Push to `main`; the workflow builds and deploys the `dist` folder.
5. Configure your custom domain in GitHub Pages and add the required DNS records at your domain provider.

## Current content

Business information was taken from the current BSquare Global website:
- Email: projects@bsquareglobal.com
- India: SR Building, 708/D, Peyad, Trivandrum, Kerala
- UAE: C1-IF-SF 4389, P.O. Box 932, Ajman, UAE
- Published phone numbers: +971 54 577 5599 / +91 97447 64007
- Smart Theatre, Home Theatre, 12D Theatre, Smart Home, Smart Office and Smart Events

The WhatsApp CTA uses the number supplied in the project brief: +91 97447 14449.

Social:
- https://www.instagram.com/bsquareglobal/
- https://www.facebook.com/profile.php?id=61577669343072
- https://www.youtube.com/@BSquareGlobal

## Routes

- `/`
- `/projects`
- `/gallery`
- `/contact`
- `/admin` (private login; not shown in main navigation)

Note: GitHub Pages does not provide server-side route rewrites by default. If direct navigation to nested routes returns 404, configure a 404.html SPA fallback or use HashRouter. Test all deep links on the final custom domain.
