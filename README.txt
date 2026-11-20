FOOTBALL PREDICTOR — ANDROID STARTER PROTOTYPE

WHAT THIS IS
A small installable Progressive Web App (PWA). It includes a dashboard, market filters,
illustrative demo match cards, target odds labels, a local prediction tracker, and CSV export.

IMPORTANT LIMITATIONS
- Demo fixtures and percentages are fictional examples, not live predictions.
- No 80–90% accuracy or winning returns are guaranteed.
- Automatic live fixtures, team statistics, injuries, xG and odds are NOT connected yet.
- A live data provider/API and secure backend are needed. Never put a paid API key in
  browser JavaScript. Free tiers may have request limits and may not cover all leagues.
- HT/FT and correct-score predictions are especially uncertain.
- The app deliberately does not auto-generate fake betting slips to meet odds targets.

HOW TO INSTALL ON ANDROID
1. Host these files on an HTTPS static host (for example, a free static hosting service).
2. Open the hosted address in Chrome on Android.
3. Open Chrome menu (three dots) and choose "Install app" or "Add to Home screen".
4. Launch Football Predictor from your home screen.

LOCAL TEST
You can open index.html on a computer for a basic preview, but PWA installation and
offline service-worker features generally require HTTPS or localhost.

NEXT DEVELOPMENT STEP
Connect a legitimate football-data API through a small backend. Add fixture ingestion,
statistics validation, probability calibration, bookmaker odds comparison, and automated
settlement/result tracking before presenting live picks.
