# Sachin Keragala — Developer Portfolio

A professional full-stack developer portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Designed to target software developer, graduate developer, React developer, Next.js developer, and full-stack positions in Australia.

---

## Technology Stack

| Category | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3 |
| Animations | Framer Motion |
| Icons | Lucide React + React Icons |
| Deployment | Vercel (recommended) |

---

## Project Structure

```
portfolio-nextjs/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout, SEO metadata
│   │   ├── page.tsx          # Home page (single page app)
│   │   └── globals.css       # Global styles + Tailwind
│   ├── components/
│   │   ├── Navbar.tsx        # Sticky navigation + mobile menu
│   │   ├── Footer.tsx        # Footer with social links
│   │   └── sections/
│   │       ├── Hero.tsx      # Hero section
│   │       ├── About.tsx     # About section
│   │       ├── Skills.tsx    # Skills & technologies
│   │       ├── Projects.tsx  # Featured projects
│   │       ├── Experience.tsx # Education & certifications
│   │       └── Contact.tsx   # Contact form
│   └── lib/
│       └── utils.ts          # Utility functions
├── public/
│   └── Sachin_Keragala_Resume.pdf  # ← Add your resume PDF here
├── package.json
├── next.config.js
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── .env.example
└── .gitignore
```

---

## Local Development

### Prerequisites

- Node.js 18+ installed ([nodejs.org](https://nodejs.org))
- npm, yarn, or pnpm

### Step-by-step Setup

1. **Download or clone the project:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your values
   ```

4. **Add your resume PDF:**
   - Place your resume at `public/Sachin_Keragala_Resume.pdf`
   - The download button is pre-wired and will work automatically

5. **Start the development server:**
   ```bash
   npm run dev
   ```

6. **Open your browser:**
   ```
   http://localhost:3000
   ```

---

## Customization

### Update your personal details

Edit these files to personalize the portfolio:

- `src/app/layout.tsx` — SEO title, description, keywords, OG tags
- `src/components/sections/Hero.tsx` — Name, tagline, social links
- `src/components/sections/About.tsx` — Bio paragraph
- `src/components/sections/Skills.tsx` — Your actual skill set
- `src/components/sections/Projects.tsx` — Your real projects with GitHub links
- `src/components/sections/Experience.tsx` — Your education/work history
- `src/components/sections/Contact.tsx` — Your email address
- `src/components/Footer.tsx` — Social links, email

### Add your resume

Place your resume PDF at:
```
public/Sachin_Keragala_Resume.pdf
```

The download buttons are already configured to download this file.

---

## Production Build

Build the app for production:

```bash
npm run build
```

Start the production server locally:

```bash
npm start
```

---

## Deployment

### Option 1: Vercel (Recommended — Free)

Vercel is built by the creators of Next.js and offers the best experience.

#### Method A: Deploy from GitHub (easiest)

1. Push your code to GitHub (see instructions below)
2. Go to [vercel.com](https://vercel.com) and sign up with GitHub
3. Click **"Add New Project"**
4. Select your portfolio repository
5. Click **"Deploy"** — Vercel auto-detects Next.js settings
6. Your site is live at `https://your-project.vercel.app`

#### Method B: Deploy from CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow the prompts — deploy to production
vercel --prod
```

#### Set environment variables on Vercel

1. Go to your project on vercel.com
2. Settings → Environment Variables
3. Add `NEXT_PUBLIC_SITE_URL` = `https://your-vercel-url.vercel.app`

---

### Option 2: GitHub Pages (Free, Static Export)

Add to `next.config.js`:
```js
const nextConfig = {
  output: 'export',
  trailingSlash: true,
};
```

Then:
```bash
npm run build
# Deploy the /out folder to GitHub Pages
```

---

### Option 3: Netlify (Free)

1. Go to [netlify.com](https://netlify.com) and sign in with GitHub
2. Click **"Add new site"** → **"Import an existing project"**
3. Connect to your GitHub repo
4. Set build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
5. Click **"Deploy site"**

For Netlify, install the plugin:
```bash
npm install @netlify/plugin-nextjs
```

And add to `netlify.toml`:
```toml
[[plugins]]
  package = "@netlify/plugin-nextjs"
```

---

## GitHub — Step-by-Step Guide

### Step 1: Create a GitHub Account

1. Go to [github.com](https://github.com)
2. Click **"Sign up"** — it's free
3. Choose a username (this will appear in your URL: `github.com/username`)
4. Verify your email

### Step 2: Create a New Repository

1. Click the **"+"** button in the top right → **"New repository"**
2. Repository name: `portfolio` (or `sachin-keragala-portfolio`)
3. Set to **Public** (required for free hosting)
4. Do NOT initialize with README (you already have one)
5. Click **"Create repository"**

### Step 3: Upload Your Project to GitHub

Open your terminal in the project folder and run these commands:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create your first commit
git commit -m "Initial portfolio"

# Set branch to main
git branch -M main

# Connect to your GitHub repository
# Replace YOUR_USERNAME and YOUR_REPO with your actual values
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push to GitHub
git push -u origin main
```

---

## Vercel Deployment — Complete Beginner Guide

### Step 1: Create a Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"** — this links your accounts

### Step 2: Import Your GitHub Repository

1. On the Vercel dashboard, click **"Add New..."** → **"Project"**
2. You'll see a list of your GitHub repositories
3. Find `portfolio` and click **"Import"**

### Step 3: Configure the Deployment

Vercel automatically detects Next.js — no changes needed. You'll see:
- **Framework Preset:** Next.js
- **Build Command:** `npm run build`
- **Output Directory:** `.next`

Click **"Deploy"**.

### Step 4: Get Your Free Vercel URL

After 1-2 minutes, your site is live at:
```
https://portfolio-sachin.vercel.app
```
(Vercel generates a unique URL for you)

### Step 5: Every Update is Automatic

Once connected, every time you push to GitHub:
```bash
git add .
git commit -m "Update projects section"
git push
```
Vercel automatically redeploys. Your site is always up to date.

---

## Connecting a Custom Domain

### Purchase a Domain

Recommended registrars (pricing ~$15-20 AUD/year for a `.com`):
- **Namecheap** — [namecheap.com](https://namecheap.com) (cheap, reliable)
- **Cloudflare Registrar** — [cloudflare.com/products/registrar](https://cloudflare.com/products/registrar) (at-cost pricing)
- **Google Domains** → now **Squarespace Domains**

Suggested domain names:
- `sachinkeragala.com`
- `sachinkeragala.dev`
- `sachin.dev`

### Connect Domain to Vercel

1. In your Vercel project, go to **Settings → Domains**
2. Enter your domain: `sachinkeragala.com`
3. Click **"Add"**
4. Vercel shows you DNS records to add

### Update DNS at Your Registrar

At Namecheap (or your registrar), go to **Advanced DNS** and add:

| Type | Host | Value |
|---|---|---|
| A Record | @ | `76.76.21.21` |
| CNAME | www | `cname.vercel-dns.com` |

DNS changes take 5-48 hours to propagate.

### SSL Certificate

Vercel automatically provisions a free SSL certificate (HTTPS) for your domain — no action needed.

---

## SEO Configuration

The portfolio is optimized for these search terms in Australia:

- Full-Stack Developer Australia
- React Developer Melbourne
- Next.js Developer Australia
- Software Engineer Australia
- TypeScript Developer
- Graduate Developer Australia

SEO metadata is in `src/app/layout.tsx`. Update `NEXT_PUBLIC_SITE_URL` in `.env.local` to your actual domain once live.

---

## Contact Form Setup

The contact form is pre-built. To make it actually send emails, choose one option:

### Option A: Formspree (Easiest — Free tier available)

1. Go to [formspree.io](https://formspree.io) and create an account
2. Create a new form → get your form ID (e.g. `xabc1234`)
3. In `Contact.tsx`, replace the `handleSubmit` function:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus("sending");
  const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  setStatus(res.ok ? "sent" : "error");
};
```

### Option B: EmailJS (No backend needed)

1. Create a free account at [emailjs.com](https://emailjs.com)
2. Add your email service and template
3. Install: `npm install @emailjs/browser`
4. Follow the EmailJS docs to integrate

---

## License

MIT License — free to use, modify, and distribute.

---

*Built with Next.js 14 · TypeScript · Tailwind CSS · Framer Motion*
*Sachin Keragala — Melbourne, Australia*
