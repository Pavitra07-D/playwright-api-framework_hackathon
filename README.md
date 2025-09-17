
# Playwright API Framework

This project is a **Playwright + TypeScript** based API automation framework created for hackathon/demo purposes.

#Features
- API testing using Playwright’s `request` context
- TypeScript support
- Easy integration with CI/CD
- Supports HTML test reports

#Project Structure


playwright-api-framework_hackathon/
├─ tests/ → Test cases
├─ playwright.config.ts → Playwright configuration
├─ package.json → Dependencies
├─ README.md → Documentation


#Setup
Install dependencies:
```bash
npm install

▶️ Running Tests

Run all tests:

npx playwright test


Run a specific test:

npx playwright test tests/apiClients.test.ts


Run with UI for debugging:

npx playwright test --headed

📊 Reports

After tests run, open the HTML report:

npx playwright show-report
