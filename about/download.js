import { chromium } from "playwright";
import path from "node:path";

(async () => {
  // Launch the browser
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    acceptDownloads: true, // Enable downloads in the context
  });

  // Create a new page
  const page = await context.newPage();

  // Go to the page with the PDF link
  await page.goto("http://localhost:4321/gnarus-g", {
    timeout: 2000,
  });

  // Define the path to save the PDF
  const pdfPath = path.join(__dirname, "..", "Ghislain-Resume.pdf");

  // Generate the PDF
  await page.pdf({
    path: pdfPath,
    format: "Letter", // You can set the format to A4, Letter, etc.
    scale: 0.659,
    margin: {
      top: 23,
      right: 23,
      bottom: 10,
      left: 23,
    },
    printBackground: true, // Include background graphics
  });

  console.log(`PDF saved to: ${pdfPath}`);

  // Close the browser
  await browser.close();
})();
