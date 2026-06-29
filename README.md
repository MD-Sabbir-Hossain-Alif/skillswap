# SkillSwap

**SkillSwap** is a freelance micro-task marketplace where **Clients** post small, simple jobs — like designing a logo, writing an article, or fixing a CSS bug — and **Freelancers** browse, apply, and get hired to complete them. Think of it as a lightweight, focused version of Fiverr or Freelancer.com built for fast, one-time tasks.

🔗 **Live Site:** [https://skillswap-woad-psi.vercel.app](https://skillswap-woad-psi.vercel.app)
📦 **Server Repository:** [github.com/MD-Sabbir-Hossain-Alif/skillswap-server](https://github.com/MD-Sabbir-Hossain-Alif/skillswap-server)

---

## 🧪 Test Credentials

| Role       | Email                   | Password                |
| ---------- | ----------------------- | ----------------------- |
| Admin      | `admin@gmail.com`       | `admin@gmail.com`       |
| Freelancer | `freelancer1@gmail.com` | `freelancer1@gmail.com` |
| client     | `client1@gmail.com`     | `client1@gmail.com`     |

---

## ✨ Key Features

### General

- Three distinct roles — **Client**, **Freelancer**, and **Admin** — each with their own dashboard and permissions.
- Authentication via **Better Auth**, supporting both email/password and Google OAuth login.
- Fully responsive UI across mobile, tablet, and desktop.
- Real database-driven content on the homepage — no placeholder/fake data.

### Client

- Post tasks with title, category, description, budget, and deadline.
- Manage posted tasks (edit while open, delete only if no proposal is accepted).
- Review and accept/reject freelancer proposals.
- Pay securely through **Stripe Checkout** upon accepting a proposal.
- Dashboard overview with task and spending statistics.

### Freelancer

- Browse open tasks with **live search** and **category filtering**.
- Submit proposals with a bid, estimated completion time, and a cover note.
- Track all submitted proposals and their status (Pending / Accepted / Rejected).
- Manage active projects and submit deliverables (e.g. GitHub link, Docs link) to mark tasks complete.
- View earnings history and edit public profile (skills, bio, hourly rate, etc.).

### Admin

- Manage all platform users — block/unblock accounts.
- Manage all posted tasks — remove tasks that violate platform rules.
- View a complete transaction history of all Stripe payments processed on the platform.

### Engineering Highlights

- **JWT-based authentication** with secure HTTPOnly cookies and role-based middleware protecting all `/dashboard/*` routes.
- **Server-side pagination** on the Browse Tasks page (9 tasks per page), with pagination state kept consistent alongside active search and category filters.
- **Stripe Checkout** integration with a backend confirmation endpoint to verify transactions before saving to the database.
- Persistent login sessions — refreshing any page (including private dashboard routes) never logs the user out or throws an error.

---

## 🛠️ Tech Stack & Packages Used

**Framework & Core**

- [Next.js](https://nextjs.org/) `^16.2.9` — App Router, SSR/CSR, API routes
- [React](https://react.dev/) `19.2.4` / [React DOM](https://react.dev/) `19.2.4`

**Authentication**

- [better-auth](https://www.better-auth.com/) `^1.6.20` — Credential + Google OAuth authentication
- [@better-auth/mongo-adapter](https://www.better-auth.com/) `^1.6.20` — MongoDB adapter for Better Auth

**Database**

- [mongodb](https://www.mongodb.com/) `^7.3.0` — Official MongoDB Node.js driver

**Payments**

- [stripe](https://stripe.com/docs/api) `^22.3.0` — Server-side Stripe SDK
- [@stripe/stripe-js](https://stripe.com/docs/js) `^9.8.0` — Client-side Stripe SDK for Checkout

**UI & Styling**

- [tailwindcss](https://tailwindcss.com/) `^4` — Utility-first CSS framework
- [@tailwindcss/postcss](https://tailwindcss.com/) `^4` — Tailwind v4 PostCSS plugin
- [@heroui/react](https://www.heroui.com/) `^3.2.1` / [@heroui/styles](https://www.heroui.com/) `^3.2.1` — UI component library
- [lucide-react](https://lucide.dev/) `^1.21.0` — Icon set
- [react-icons](https://react-icons.github.io/react-icons/) `^5.6.0` — Additional icon set

**Dev Tools**

- [eslint](https://eslint.org/) `^9` / [eslint-config-next](https://nextjs.org/docs/app/building-your-application/configuring/eslint) `16.2.9`
- [babel-plugin-react-compiler](https://react.dev/learn/react-compiler) `1.0.0`

---

## 📂 Database Collections (MongoDB)

| Collection    | Fields                                                                                           |
| ------------- | ------------------------------------------------------------------------------------------------ |
| **users**     | name, email, image, role, skills, bio, isBlocked, createdAt                                      |
| **tasks**     | title, category, description, budget, deadline, client_email, status, deliverable_url, createdAt |
| **proposals** | task_id, freelancer_email, proposed_budget, estimated_days, cover_note, status, submitted_at     |
| **payments**  | client_email, freelancer_email, task_id, amount, transaction_id, payment_status, paid_at         |
| **reviews**   | task_id, reviewer_email, reviewee_email, rating, comment, created_at                             |

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/MD-Sabbir-Hossain-Alif/skillswap.git
cd skillswap
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory with the following:

```env
# MongoDB
MONGODB_URI=your_mongodb_connection_string

# Better Auth
BETTER_AUTH_SECRET=your_better_auth_secret
BETTER_AUTH_URL=http://localhost:3000

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Stripe
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

### 5. Build for production

```bash
npm run build
npm run start
```

---

## 📁 Project Structure (high level)

```
skillswap/
├── public/          # Static assets
├── src/             # Application source (pages, components, API routes, lib)
├── .env.local       # Environment variables (not committed)
├── next.config.mjs
├── package.json
└── README.md
```

---

## 📜 License

This project was built for educational purposes as part of an assignment submission. Not licensed for commercial redistribution.
