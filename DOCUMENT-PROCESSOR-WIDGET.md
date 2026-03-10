# Document Processor Widget Integration Guide

This document explains how to integrate the `DocumentProcessorWidget` module in a React + TypeScript app.

## Purpose
`DocumentProcessorWidget` renders a two-panel document extraction UI:

- Left panel: embedded source document viewer (`iframe`).
- Right panel: AI-extracted fields grouped into sections for review/validation.

## Main Entry File

`src/document-process-widget/DocumentProcessorWidget.tsx`

## Recommended Use (Minimal Integration)

```tsx
import {DocumentProcessorWidget} from "./document-process-widget/DocumentProcessorWidget";

function AppHeader() {
  return <DocumentProcessorWidget />;
}
```

## Where To Inject
Place the widget entry point in the app header or the sidebar so it is always discoverable. Use it as a persistent access point rather than a standalone page.

Common placements:
1. Header: add a "Document Processor" navigation entry or dropdown that mounts the widget in the main content area.
2. Sidebar: add a primary nav item that routes to or reveals the widget view.

