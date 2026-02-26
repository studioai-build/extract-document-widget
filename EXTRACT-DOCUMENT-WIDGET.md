# Extract Document Widget Integration Guide

This document explains how to integrate and customize the `ExtractDocumentWidget` module in a React + TypeScript codebase.

## Purpose

`ExtractDocumentWidget` renders a two-panel document extraction UI:

- Left panel: embedded source document viewer (`iframe`).
- Right panel: AI-extracted fields grouped into sections for review/validation.

## Main Entry File

`src/extract-document-widget/ExtractDocumentWidget.tsx`

## Use

import { ExtractDocumentWidget } from '@/extract-document-widget/ExtractDocumentWidget';

