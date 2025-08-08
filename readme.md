# 🔢 Vite Calculator E2E Test Suite

This project is an end-to-end (E2E) test automation framework built with [Playwright](https://playwright.dev/) for a **Vite-based Calculator App**. It thoroughly tests arithmetic operations (Addition, Subtraction, Multiplication, Division) including edge cases and decimal/negative inputs.

---

## 📌 Project Description

This test suite automates and verifies all core calculator functionalities on a Vite app served at:

```
VITE_APP_BASE_URL=http://localhost:5173
```

The tests use Playwright with TypeScript and include a clean, modular structure using Page Object Model (POM), fixtures, and data-driven configuration files for scalability and maintainability.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-org/vite-calculator-e2e.git
cd vite-calculator-e2e
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Initialize Playwright

```bash
npm init playwright@latest
```

Follow the prompts to configure browsers, TypeScript, and test folder structure.

### 4. Install Additional Packages

```bash
npm install --save-dev typescript tsconfig-paths
npm install dotenv
```

---

## 🏗️ Project Structure

```
.
├── configs/                      # Operation-specific test datasets
│   ├── addition.config.ts
│   ├── subtraction.config.ts
│   ├── multiplication.config.ts
│   └── division.config.ts
│
├── fixtures/                     # Custom Playwright fixtures
│   └── fixtures.ts
│
├── globalConfig/                 # Constants and test IDs
│   └── constants.ts
│
├── tests/                        # Test specifications
│   ├── addition.spec.ts
│   ├── subtraction.spec.ts
│   ├── multiplication.spec.ts
│   └── division.spec.ts
│
├── utils/                        # Locator and helper utilities
│   └── locatorUtils.ts
│
├── .env                          # Environment variables
├── playwright.config.ts         # Playwright configuration
├── package.json
└── tsconfig.json
```

---

Run all tests:

```bash
npm test
```

Run a single test file:

```bash
npx playwright test tests/division.spec.ts(example)
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root:

```
VITE_APP_BASE_URL=http://localhost:5173
```

---

## 🧪 Features Covered

- [x] Addition (integers, decimals, negatives)
- [x] Subtraction (integers, decimals, negatives)
- [x] Multiplication (integers, decimals, negatives)
- [x] Division (integers, decimals, negatives)
- [x] Edge case: max digit sequences
- [x] Config-driven test data
- [x] Reusable fixtures and locators

---

## 👩‍💻 Author

**Nimmy Abraham Chandredath**  
Experienced QA Automation Engineer | FinTech & Web App Testing Expert

---
