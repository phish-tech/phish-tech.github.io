# Boyuan Gu — bilingual academic homepage

Static academic website: https://phish-tech.github.io/.

## Pages
- `index.html` / `zh.html`: English / Chinese homepage.
- `cv.html` / `cv-zh.html`: English / Chinese public CV; supports Print / Save as PDF.
- `styles.css`: shared responsive and print styles.
- `language.js`: preserves the current section when switching languages. Direct links work without JavaScript.
- `assets/`: portrait extracted from the supplied CV and favicon.

## Local preview
Run `python -m http.server 8765 --bind 127.0.0.1` from this folder, then open http://127.0.0.1:8765.

## Publish
GitHub Pages deploys from branch `main`, folder `/ (root)`. No build dependencies.

## Update
Edit the corresponding English and Chinese pages together and push to main. Keep publication details synchronized across the homepage and CV. Paper titles and author names retain their original spelling in both editions. Both languages have stable URLs and reciprocal hreflang metadata. English is the default; language changes are explicit and do not require storage or tracking.

## Content provenance
Based on owner-provided CV and paper fronts, public GitHub and arXiv records, and owner-confirmed M.Phil. degree and Findings of EMNLP 2026 acceptance. The Neural-Wave 2036 title, authors, year, acceptance and artifact links are from https://github.com/phish-tech/Neural-Wave-2036. It is listed as design fiction accepted to ACM Interactions, without inventing an issue or DOI. Award dates and individual fiction titles are omitted until supplied. Original source PDFs and private contact details are not published. Citation and star counts are omitted to avoid stale metrics.

## Education, affiliations and logos
The homepages use full-width Education (04), Academic service (05), Industry & research experience (06), and Creative work (07) sections. Honors sit within the UESTC undergraduate entry. The owner supplied the 2024 Chengdu company, 2025–2026 X-Institute research role and 2026 HKUST (Guangzhou) academic collaboration. No project duties or outcomes are inferred. The owner supplied the official English company name, Chengdu Duopu Cetan Technology Co., Ltd., its logo, and http://duopucetan.com/. Both homepage editions and CVs link to that website. Logo sources are documented in `assets/institutions/SOURCES.md`. Shared CSS/JS URLs are versioned when changed to avoid stale cached assets.

## Research highlights and news
The introduction states the research theme; three selected studies use accessible HTML concept diagrams. These are explanatory schematics, not experimental results or reproduced paper figures. News dates and publication stages were supplied by the owner. Update both language editions together; keep titles and quantitative claims grounded in the existing publication records.
