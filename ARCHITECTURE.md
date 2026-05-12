# Wovio SaaS - Architecture & Tech Stack

## 1. System Overview
Wovio is a decoupled B2B SaaS application. It uses a modern JavaScript framework for the client-side user interface, a robust Python backend to handle heavy AI logic, and Supabase for Postgres database and Authentication.

## 2. Frontend (Client Layer)
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Lucide React (Icons)
- **Role:** Handles user authentication UI, billing interfaces, onboarding flow, and the complex Dashboard interactions (Content Hub, Brand Identity config, Developer API keys).

## 3. Backend (API & AI Engine Layer)
- **Framework:** FastAPI (Python)
- **Language:** Python 3.11+
- **Role:** Exposes RESTful APIs for the Next.js frontend to consume. 
- **Key Python Responsibilities:**
  - **Web Scraping (Brand Identity):** Using `BeautifulSoup4` or `Scrapy` to parse client URLs and extract brand tone.
  - **AI Orchestration:** Using `LangChain` or native `openai` Python SDK to format AEO/SEO articles and execute complex prompts.
  - **Automated Publishing (Autopilot):** Using `Celery` + `Redis` to manage cron jobs. It wakes up on the user's scheduled days, generates the post, and pushes it to the client's CMS (WordPress/Shopify).

## 4. Database & Auth (Supabase)
- **Database:** PostgreSQL (Hosted by Supabase)
- **Authentication:** Supabase Auth (JWT tokens)
- **Security:** Row Level Security (RLS) to ensure tenant data isolation.

## 5. Deployment Strategy
- **Frontend (Next.js):** Deployed on **Vercel**. Vercel is the creator of Next.js and provides the best edge-network delivery, CI/CD, and automatic SSL for the client interface.
- **Backend (Python):** Deployed on **Railway**, **Render**, or **DigitalOcean**. *Note: We do not deploy the Python backend on Vercel because Vercel Serverless functions have tight timeouts (10-60 seconds), which will fail during long web scraping or AI text generation tasks. Railway/Render provide long-running containers perfect for FastAPI and Celery.*

## 6. Security Architecture
To ensure enterprise-grade security and prevent API key leakage:
- **No Client-Side Secrets:** Absolutely no sensitive keys (OpenAI, Stripe Secret, User CMS Keys) will be exposed in the frontend. No variable will ever use the `NEXT_PUBLIC_` prefix unless it is completely safe for public view.
- **Backend Proxying:** The Next.js frontend will only communicate with our Python Backend using secure JWT tokens provided by Supabase.
- **Encryption at Rest:** When users save their Developer API Keys or CMS Integrations (WordPress passwords, Shopify tokens), the Python backend will encrypt these strings before storing them in Supabase.
- **Payment Processing:** Stripe handles all credit card data directly via Stripe Elements in the frontend. Credit card numbers never touch the Wovio servers. Webhooks sent by Stripe to the Python backend will be cryptographically verified.
