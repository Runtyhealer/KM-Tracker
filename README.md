# KM Tracker

A browser-based kilometer registration tool for tracking business and private mileage. Built as a single HTML file — no installation or build step required.

## Features

- **Import trips** from CSV, XLSX, or XLS files (exported from IBS via Submit Expenses → KM & HW)
- **Dashboard** showing total km, business km, actual private km, and budget progress
- **Charts** — monthly private km bar chart and cumulative km vs budget line chart
- **Export** your data as CSV or JSON
- **EN/NL language toggle**
- All data stays in the browser (localStorage) — nothing is sent to a server

## Usage

Open `km-tracker.html` directly in a browser, or serve it locally:

```bash
python3 -m http.server 8080
# then open http://localhost:8080/km-tracker.html
```

### Importing trips

1. In IBS, go to **Submit Expenses → KM & HW**
2. Export your trips as a `.csv` file
3. Drag and drop the file onto the upload zone in the tool (or click to browse)

The tool will parse the file and add the trips to your overview automatically.

### Exporting data

Use the **CSV** or **JSON** buttons in the trips list to download your data.

## No dependencies to install

The only external dependency is [SheetJS](https://sheetjs.com/) for Excel file support, loaded via CDN. Everything else is vanilla HTML/CSS/JS.
