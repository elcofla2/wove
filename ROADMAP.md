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
4. **Growth Engine — SEO/AEO/GEO Planner (UI Complete ✅):** Connect `/dashboard/seo-plan` to the Python backend.
*Release 3.0: "Interactive MVP" - A user can click "Generate" on the site, wait 30 seconds, and see the article appear.*

## Phase 3.5: The Compass (Growth Engine Intelligence — SEO · AEO · GEO)
**Goal:** The system auto-generates a full content strategy optimized for **all three engines** and executes it without user intervention. This is Wovio's core differentiator — not an auditor, a **planner that executes itself**.
1. **Website Analysis Engine:** Crawl the client's URL → extract niche, existing pages, competitors, and content gaps.
2. **Content Pipeline Generator:** AI builds a 30-day publishing calendar with titles, target keywords (primary + secondary), word counts, and article outlines.
3. **Link Strategy Engine:** Auto-plan internal links (hub pages → new posts) and external citations (authority sources per niche).
4. **Authority Pillars:** Group planned content into topic clusters with authority scores that grow as posts publish.
5. **Next Post Preview:** Always show the upcoming auto-publish with full outline, keywords, and links so the client sees exactly what's coming.
6. **AEO Formatting Engine:** Auto-generate FAQ schema, answer-first content blocks, and structured data optimized for AI answer engines (ChatGPT, Perplexity, Google AI Overviews).
7. **GEO & Local Visibility Engine:** Local keyword optimization, NAP consistency checks, location-based content variations, and Google Business Profile signal planning.
8. **Competitor Intelligence Module:** Track competitor rankings, new publications, and keyword strategies. Automatically identify gaps to exploit.
9. **Auto-Execution Loop:** Integrate with the Autopilot cron (Phase 4) so the plan doesn't just display — it **executes itself** post by post on schedule.
10. **Progress Tracking:** Real-time status updates (Published → Scheduled → In Queue) visible in the Content Pipeline table.
*Release 3.5: "Growth Engine Brain" - A client enters their URL or describes their business, Wovio builds a 24-post plan optimized for SEO+AEO+GEO, and starts publishing automatically.*

## Phase 3.7: The Eyes (Operations Dashboard & Schedule)
**Goal:** The client can see exactly what Wovio is doing every day — without lifting a finger. Full transparency into the automated engine.
1. **Daily Schedule View (UI Complete ✅):** `/dashboard/schedule` shows 12 automated daily tasks with real-time status (Done, Running, Upcoming, Skipped).
2. **Task Result Reporting:** Each completed task shows expandable results — what was found, what was changed, what was queued.
3. **12-Task Automation Pipeline:**
   - `8:30 AM` Measurement & Learning Check (Daily)
   - `9:00 AM` 30-Day SEO/AEO/GEO Plan Runner (Daily)
   - `9:45 AM` Competitor Intelligence Scanner (Tue/Thu)
   - `10:00 AM` Content Inventory & Gap Check (Daily)
   - `11:30 AM` Cluster & Internal-Link Planner (Mon/Wed/Fri)
   - `12:15 PM` GEO & Local Visibility Optimizer (Mon/Wed/Fri)
   - `1:30 PM` Publishing Candidate Builder (Mon/Wed/Fri)
   - `2:30 PM` Existing Content Optimizer (Tue/Thu/Sat)
   - `3:45 PM` Schema & AEO Validator (Daily)
   - `4:45 PM` Authority & Citation Prep (Tue/Thu)
   - `5:30 PM` Quality Gate Sweep (Mon/Wed/Fri)
   - `6:00 PM` Technical Health Monitor (Daily)
4. **Pause/Resume Controls:** Client can pause the entire automation engine from the dashboard.
5. **Backend Cron Integration:** Connect schedule UI to actual Celery/Redis task queue with real-time WebSocket status updates.
6. **Daily Summary Email:** Auto-send a digest email at 7:00 PM summarizing what was accomplished today.
*Release 3.7: "Transparent Autopilot" - The client opens the Schedule page and sees exactly what Wovio did today, what it's doing now, and what's coming next. Zero mystery.*

## Phase 4: The Delivery (CMS Integration)
**Goal:** Push generated content directly to the client's website.
1. Build the WordPress/Shopify connector in Python.
2. Allow users to save their CMS credentials securely in `/dashboard/integrations`.
3. Set up the Autopilot Cron Job (Publishing on a schedule).
*Release 4.0: "Autopilot Live" - The system automatically writes and publishes to a test WordPress site.*

## Phase 5: The Garden (Monetization & Launch)
**Goal:** Get paid.
1. Integrate Stripe Checkout for the $149/mo Growth Plan and $299/mo Agency Plan.
2. Implement Stripe Webhooks in the Python backend to upgrade the user's Supabase role.
3. Activate the UI locks (Hard Gating) based on the user's subscription status.
*Release 5.0: "Commercial Launch" - We can accept real credit cards and users are limited by their tier.*
