# Personal academic website

A single static page: `index.html` for content, `style.css` for looks. No build step.

## Preview locally

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Fill in your details

Everything to replace is in `index.html`, written in `[square brackets]` or marked with an `<!-- EDIT -->` comment. To list what is left:

```sh
grep -n '\[[A-Za-z]' index.html
grep -n 'YOUR_\|university.edu\|href="#"' index.html
```

Files to add to `assets/`:

| File | Used for |
| --- | --- |
| `cv.pdf` | CV links in the nav and intro |
| `photo.jpg` | Headshot (square, about 600x600); update the `src` in `index.html` |
| `jmp.pdf`, `jmp-slides.pdf` | Job market paper and slides |
| `teaching-statement.pdf`, `evaluations.pdf` | Teaching links |

Delete any link or section you do not need. To change the accent colour, edit `--accent` at the top of `style.css` (there is a second value for dark mode).

## Publish on GitHub Pages

1. Create a public repository named `YOUR_USERNAME.github.io` on GitHub (empty, no README).
2. Push this folder to it:

   ```sh
   git add .
   git commit -m "Initial site"
   git remote add origin git@github.com:YOUR_USERNAME/YOUR_USERNAME.github.io.git
   git push -u origin main
   ```

3. In the repository, go to Settings → Pages and set the source to "Deploy from a branch", branch `main`, folder `/ (root)`.

The site appears at `https://YOUR_USERNAME.github.io` within a minute or two. Every later push updates it.
