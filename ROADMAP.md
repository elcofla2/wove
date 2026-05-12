# Wovio SaaS - Development Roadmap

## Deployment Strategy (Environments)
We will maintain two environments. This is **not** too much for an MVP; it is a necessity to prevent breaking live client data.
- **Staging (Preview):** Deployed automatically via Vercel on any pull request. Connects to a `wovio-staging` Supabase database. Used for our internal testing.
- **Production (Main):** Deployed on the `main` branch. Connects to the `wovio-prod` database. Real users only.

---

## Phase 1: The Door (Authentication & Infrastructure)
**Goal:** A user can sign up, log in, and access a secure environment online.
1. Create Supabase projects (Staging & Prod).
2. Connect Next.js Frontend to Supabase Auth.
3. Implement Next.js Middleware to protect `/dashboard` routes.
4. Deploy the Next.js app to Vercel (Production URL live).
*Release 1.0: "Secure Shell" - We can log in from our phones and see the dashboard.*

## Phase 2: The Brain (Python Core Engine)
**Goal:** The AI can generate a perfect article via API. (No Frontend involved yet).
1. Set up FastAPI Python project.
2. Build the OpenAI service wrapper (Prompts, AEO formatting).
3. Build the Web Scraper endpoint (Extracting tone from a URL).
4. Deploy Python Backend to Render/Railway.
*Release 2.0: "The Engine" - We can hit our backend with Postman and get a fully formatted SEO article back.*

## Phase 3: The Muscle (Connecting Front to Back)
**Goal:** The user can configure their brand and generate content from the UI.
1. Connect `/dashboard/brand-identity` to the Python backend (Save settings to Supabase).
2. Implement Celery/Redis for background AI generation.
3. Connect `/dashboard/content-hub` to display the database records of generated posts.
*Release 3.0: "Interactive MVP" - A user can click "Generate" on the site, wait 30 seconds, and see the article appear.*

## Phase 4: The Delivery (CMS Integration)
**Goal:** Push generated content directly to the client's website.
1. Build the WordPress/Shopify connector in Python.
2. Allow users to save their CMS credentials securely in `/dashboard/integrations`.
3. Set up the Autopilot Cron Job (Publishing on a schedule).
*Release 4.0: "Autopilot Live" - The system automatically writes and publishes to a test WordPress site.*

## Phase 5: The Garden (Monetization & Launch)
**Goal:** Get paid.
1. Integrate Stripe Checkout for the $99/mo Pro Plan.
2. Implement Stripe Webhooks in the Python backend to upgrade the user's Supabase role.
3. Activate the UI locks (Hard Gating) based on the user's subscription status.
*Release 5.0: "Commercial Launch" - We can accept real credit cards and users are limited by their tier.*
