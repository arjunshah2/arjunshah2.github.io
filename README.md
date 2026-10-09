# arjunshah2.github.io

Source for Arjun Shah's academic website: <https://arjunshah2.github.io>.

A single static page: `index.html` for content, `style.css` for looks. No build step.

## Preview locally

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Edit

Content still to fill in is in `index.html`, written in `[square brackets]` or marked with an `<!-- EDIT -->` comment. To list what is left:

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

## Publish

GitHub Pages serves the site from the root of `main`, so pushing is publishing:

```sh
git add .
git commit -m "Describe the change"
git push
```

The live site updates within a minute or two.
