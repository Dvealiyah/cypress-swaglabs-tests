# 🧪 Cypress Swag Labs Test Automation

Automated end-to-end testing project using Cypress for the Swag Labs demo application.

⸻

🚀 Project Overview

This project includes automated UI tests for the Swag Labs website using:
 • Cypress
 • Page Object Model (POM)
 • GitHub Actions (CI/CD)
 • Allure Reports
 • Video recording on test failure 🎥

⸻

🧰 Tech Stack
 • Cypress
 • JavaScript
 • Allure Reporter
 • GitHub Actions

⸻

📂 Project Structure

cypress/
  ├── e2e/
  │   └── swaglabs.cy.js
  ├── pages/
  │   ├── loginPage.js
  │   ├── productsPage.js
  │   └── checkoutPage.js
  ├── support/
  │   └── e2e.js
▶️ How to Run Tests
 1. Install dependencies:

npm install

2. Run Cypress (UI mode):
npx cypress open

 3. Run Cypress (headless):
npx cypress run

📊 Allure Report

Generate and open Allure report:
npx allure generate allure-results --clean
npx allure open


🎥 Test Evidence
 • Videos are automatically recorded when tests fail
 • Videos are attached inside Allure reports

⸻

⚙️ CI/CD

Tests run automatically using GitHub Actions on every push.

⸻

✅ Test Scenarios
 • Login with valid credentials
 • Login with invalid credentials
 • Add product to cart
 • Remove product from cart
 • Verify products are displayed
 • Complete checkout process

⸻

💡 Author

QA Automation Engineer 🚀
