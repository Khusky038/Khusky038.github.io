# Mathematics academic personal website

Modern Minimalist (Style B) static personal academic website for Mathematics PhD applications.

## Preview locally
Open `index.html` in a browser, or run `python -m http.server 8000` in this folder and visit http://localhost:8000.

## Replace placeholders before publishing
- `[Full Name]` in `index.html` (title, navigation, hero, footer).
- `[your academic status]` and `[your university]`.
- Teaching entries, outreach program, course, dates.
- Contact email: replace **both** `mailto:your.email@example.com` and `[your.email@example.com]`.
- Research project placeholder: only add verified details.
- For CV, save an actual file at `assets/cv.pdf`, and replace both `assets/cv-placeholder.html` occurrences in `index.html` with `assets/cv.pdf`.
- Customize/rewrite introductory claims to match your situation.
- Math illustration is decorative; adjust as you wish.

## GitHub Pages deployment
1. Create a GitHub repository named `<github-username>.github.io`.
2. Upload **the contents** of this folder to the repository's root (keeping `assets/`).
3. In repository Settings > Pages, select Deploy from a branch, `main` and `/ (root)`, then save.
4. Once published your address will be `https://<github-username>.github.io/`.

No build tooling required. Google Fonts need internet access; system font fallbacks are provided.
