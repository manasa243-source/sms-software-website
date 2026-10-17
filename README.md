# SMS Software and IT Services Pvt. Limited: Website

Static site (HTML, CSS, vanilla JS). Single page `index.html` plus privacy, terms and 404 pages.

## Run locally (macOS Terminal)
    cd ~/Documents/sms-software-website
    python3 -m http.server 8000
Open http://localhost:8000 (or just double-click index.html).

## Deploy with GitHub Pages
1. Create a public repo named `sms-software-website` on github.com (no README).
2. In Terminal, inside the project folder:

       git init
       git add .
       git commit -m "Initial website"
       git branch -M main
       git remote add origin https://github.com/YOUR-USERNAME/sms-software-website.git
       git push -u origin main
3. On GitHub: Settings → Pages → Source: "Deploy from a branch" → Branch `main`, folder `/ (root)` → Save.
4. After a minute, your URL appears there: https://YOUR-USERNAME.github.io/sms-software-website/
5. Update later: edit files, then `git add . && git commit -m "Update" && git push`.
6. Custom domain: Settings → Pages → Custom domain, then add DNS records as GitHub instructs.

## Replace placeholders (search for YOUR- and TODO)
- Email: `assets/js/main.js` (EMAIL) and `index.html` (contact section)
- Canonical/og:url in `index.html`, `robots.txt`, `sitemap.xml`
- Add phone/WhatsApp links only once you have real numbers
- Privacy Policy and Terms: write real text
- Optional: use Formspree instead of mailto by setting the form `action` to your endpoint.

Paths are relative, so the site works under a repo subpath.
