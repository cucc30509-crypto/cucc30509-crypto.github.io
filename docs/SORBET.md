# Sorbet portfolio

This personal site uses the released al-folio gems. It runs at
`https://cucc30509-crypto.github.io` with an empty `baseurl`.
No gem-owned layouts, includes, or Sass files are overridden.

## Content

- `_pages/about.md`: Home, using the gem's default layout.
- `_pages/projects.md`: Work index, listing the three published studies.
- `_pages/services.md`: $20 USD introductory offer and scope.
- `_pages/contact.md`: Discord contact, exact username copying, and a secondary GitHub profile link.
- `_projects/pecan-street-plumbing.md`, `waterloo-dental.md`, `sempl-crm.md`: studies.
- `assets/css/sorbet.css`: site-specific presentation, linked by each page.
- `assets/img/sorbet-social.png`: original typographic social preview.

Template examples remain in source but are excluded from publication in
`_config.yml`. Academic collections do not output pages. External post ingestion
is disabled. Only Home, Work, Services, and Contact appear in navigation.

## Evidence and editorial review

The three source websites could not be retrieved under the preparation
environment's network policy. Baselines are explicitly attributed to the supplied
project brief. Original title/meta values are labeled as not captured, rather than
invented. Review the current public pages before treating the hypotheses as
verified findings. Proposed service coverage, availability, contact workflows, and
product capabilities need business confirmation before implementation.

All studies disclose that they are independent speculative projects. They contain
no claimed client relationship, measured results, or proprietary keyword data.

## Validate locally

Use Ruby 3.3.5 and Bundler 4.0.6 as in CI/the lockfile, Node, and Python nbconvert.
Run from the repository root:

```bash
BUNDLE_FROZEN=true bundle install --full-index
npm ci
npm run lint:prettier
npm run lint:style-contract
bundle exec al-folio upgrade audit --no-fail
JEKYLL_ENV=production bundle exec jekyll build
bash test/integration_css_minify.sh
python3 -m http.server 4000 --bind 127.0.0.1 --directory _site
```

In a second terminal:

```bash
npx playwright install chromium
node test/sorbet_smoke.cjs
```

If Chromium is already installed by the system, set `CHROMIUM_PATH` to its
executable. The smoke test checks eight routes at desktop and mobile widths,
canonical/OG metadata, navigation, internal targets, study disclosures, mobile
menu behavior, overflow, and demo exclusion. The upstream visual suite targets
the uncustomized `/al-folio` demo and is not the portfolio acceptance suite.

## GitHub Pages

The existing `Deploy site` workflow builds on pushes to `main` and publishes the
output to `gh-pages`. In repository **Settings → Pages**, choose **Deploy from a
branch**, select **gh-pages**, and use **/(root)** once that branch exists. Ensure
GitHub Actions is enabled and the deployment job can write repository contents.
The public URL needs no `/al-folio` prefix. Do not change the source to `/docs`.
