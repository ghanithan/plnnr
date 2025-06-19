# Plnnr

Offline-first personal planner built with React, Tailwind CSS, and Tauri.

This project provides a simple calendar interface that stores notes locally. It
uses Tauri for desktop deployment and React for the frontend.

## Development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

The Tauri development app can be started with:

```bash
npm run tauri dev
```

## Build

To create a release build of the frontend and package the Tauri application:

```bash
npm run build
npm run tauri build
```
