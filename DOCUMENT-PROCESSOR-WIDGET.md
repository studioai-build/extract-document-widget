# Extract Document Widget Integration Guide

This document explains how to integrate and customize the `DocumentProcessorWidget` module in a React + TypeScript codebase.

## Purpose

`DocumentProcessorWidget` renders a two-panel document extraction UI:

- Left panel: embedded source document viewer (`iframe`).
- Right panel: AI-extracted fields grouped into sections for review/validation.

## Main Entry File

`src/document-processor-widget/DocumentProcessorWidget.tsx`

## Use

import { DocumentProcessorWidget } from '@/document-processor-widget/DocumentProcessorWidget';

