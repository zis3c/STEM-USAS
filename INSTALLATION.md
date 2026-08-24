# Installation & Setup 🛠️

Follow these instructions to run the STEM USAS landing page on your local machine for development or testing.

## Prerequisites
- **Node.js** (v18.0.0 or higher recommended)
- **npm** or **yarn** or **pnpm**
- **Git**

## 1. Clone the repository
```bash
git clone https://github.com/zis3c/STEM-USAS.git
cd STEM-USAS
```

## 2. Install dependencies
Using npm:
```bash
npm install
```

## 3. Start the development server
```bash
npm run dev
```
The application will be available at `http://localhost:5173`. The development server supports Hot Module Replacement (HMR).

## 4. Build for production
To compile the TypeScript code and build the production-ready static files:
```bash
npm run build
```
The output will be placed in the `dist/` directory.

## 5. Preview production build
To test the built files locally before deploying:
```bash
npm run preview
```
