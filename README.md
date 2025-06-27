# 🧱 Form Page Navigation Builder

A production-ready, open-source form page navigation builder — inspired by [Fillout](https://www.fillout.com) — featuring drag-and-drop editing, inline page management, and persistent state. Built with **Next.js 14**, **React 18**, and **Tailwind CSS**.

<p align="center">
  <img src="/public/preview.png" alt="App Preview" width="300" />
</p>

---

## 🔍 Features

- ✅ Multi-page form editor with Info, Details, and more
- ✅ Reorder pages via drag-and-drop with visual overlays
- ✅ Add new pages between existing ones via "+" button
- ✅ Context menu per page (rename, duplicate, delete)
- ✅ Inline renaming of page titles with validation
- ✅ Active page highlighting and selection
- ✅ Fallback rendering for unknown component types
- ✅ Full mobile responsiveness with warnings for small screens
- ✅ State management with optional `localStorage` persistence
- ✅ Subtle UI animations and transitions for polish
- ✅ Design fidelity to Figma specification

---

## ✅ Functional Coverage

| Functionality            | Status | Notes                                 |
|--------------------------|--------|---------------------------------------|
| Page rendering defaults  | ✅     | 4 pages shown on first load           |
| Page renaming            | ✅     | Live update; empty string reverts     |
| Active page switching    | ✅     | Visual highlight + content switch     |
| Invalid page type        | ✅     | Displays fallback message             |
| Drag ordering            | ✅     | Smooth transitions with `@dnd-kit`    |
| Insert new pages         | ✅     | "+" appears between existing items    |
| Context menu             | ✅     | Built with `@headlessui/react`        |
| Page limit enforced      | ✅     | Max of 6 pages                        |
| Mobile error handling    | ✅     | Responsive warning displayed          |
| Persistent state         | ✅     | Local memory and optional storage     |

---

## 📊 Status Overview

| Category                  | Status   |
|---------------------------|----------|
| 🧱 Feature Implementation | ✅ Complete |
| 💾 LocalStorage Support   | ✅ Stable   |
| 🧩 Component Behavior     | ✅ Tested   |
| 🔁 Drag & Drop Flow       | ✅ Verified |
| ✍️ Inline Rename          | ✅ Working  |
| 📦 Deployment Config      | ✅ Ready (Vercel + Docker) |
| 🧪 Unit + Integration Tests | ✅ Passing |
| 🧪 Test Environment Setup   | ✅ Finalized |

---

## 🛠 Tech Stack

- **Next.js 14 App Router**
- **React 18**
- **Tailwind CSS**
- **@dnd-kit** for drag-and-drop
- **@headlessui/react** for context menus
- **Heroicons** for UI icons
- **UUID** for page ID generation

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
http://localhost:3000
```

### 🐳 Docker Support

```bash
# Build Docker image
docker build -t form-page-builder .

# Run Docker container
docker run -p 3000:3000 form-page-builder
```

Access the app at: [http://localhost:3000](http://localhost:3000)

### 🌐 Live Demo

Visit: [Live Demo URL](https://page-flow-builder.vercel.app/)


### 📁 Project Structure

```
app/
  page.tsx                  # Root entry page
  page-builder/
    components/             # UI Components (PageItem, AddButton, etc.)
    pages/                  # Renderable page components (Info.tsx, etc.)
    page.model.ts           # Page model/type definitions
public/
  screenshot.png            # UI screenshot
```

---