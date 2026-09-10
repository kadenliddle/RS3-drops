# RS3 Drop Calculator

Zero-build web app: average boss kills until a rare drop (1 / rate).

## Open locally

Open index.html in a browser, or run: npx --yes serve .

For GitHub Pages, enable Pages on the folder containing index.html.

## How rates work

Pick boss + item. Average kills = 1/p. Also shows fraction, percent, and chance after N kills: 1-(1-p)^N.
Read UI notes for enrage, streak, solo/duo, and per-pile conditions.

## Adding a boss

Edit data.js and append an object to window.RS3_DROPS with id, name, notes, and items (rateNumerator/rateDenominator or probability). Prefer verified wiki rates only.

## Credits

Rates from runescape.wiki and official Jagex posts. Rates can change. RuneScape is copyright Jagex. Unofficial fan tool.

## Files

index.html, styles.css, app.js, data.js, README.md, .gitignore
