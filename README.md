# Eddison Patrimonio — Portfolio

A personal portfolio site built with plain HTML, Tailwind CSS (via CDN), vanilla JS, and jQuery.
No build step, no framework — just static files, which is what makes it deploy cleanly on Vercel.

## File structure

```
portfolio/
├── index.html              Home page
├── about.html               About page
├── projects.html             All 3 projects, one page (anchors: #sys-01, #sys-02, #sys-03)
├── contact.html              Contact page
├── css/
│   └── style.css            Shared design tokens & component styles
└── js/
    └── main.js              Nav toggle, typing effect, scroll reveal
```

## Before you deploy — things to personalize

Search each file for these placeholders and swap in your real info:

- `your.email@example.com` → your real email
- `github.com/your-username` → your GitHub profile URL
- `linkedin.com/in/your-username` → your LinkedIn profile URL
- `projects.html` has a `<!-- TODO -->` comment under the SYS-01 section — add real feature details once you have them.

A quick way to find them all from the project folder:

```bash
grep -rn "your-username\|your.email@example.com" .
```

## A note on PHP

You mentioned PHP as a core language, but Vercel doesn't run PHP natively — it's built for
static sites and Node/JS frameworks. Since this portfolio doesn't need a real backend, it's
built entirely as static HTML/CSS/JS, which deploys on Vercel with zero configuration. Your
actual PHP projects (the inventory system, Recipe Masters, Restack) are just *described* here —
their PHP code lives in their own repos/server, not in this site.

If you later want a real PHP-backed contact form, you'd need either Vercel's community PHP
runtime (`vercel-community/php`, unofficial) or a small free PHP host. Happy to help set that up
when you're ready.

## Deploying to Vercel via GitHub

1. **Push to GitHub**
   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/your-username/your-repo-name.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com) and log in with GitHub.
   - Click **Add New → Project**.
   - Select your repository and click **Import**.
   - Framework Preset: choose **Other** (it's a plain static site — no build command needed).
   - Click **Deploy**.

3. **Done.** Vercel gives you a live URL immediately, and every future `git push` to `main`
   auto-deploys the changes.

## Previewing locally

Because pages link to each other with absolute paths like `/about.html`, double-clicking the
files won't always resolve correctly in the browser. Run a quick local server instead:

```bash
cd portfolio
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.
