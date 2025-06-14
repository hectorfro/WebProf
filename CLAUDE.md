# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

WebProf is an educational web platform for university physics courses at Universidad Industrial de Santander (UIS). It's a static website built with vanilla HTML, CSS, and JavaScript that manages physics course content through a modular structure.

## Development Setup

This is a static website requiring no build tools or dependencies. Simply:
- Open `index.html` in a web browser to run locally
- No package installation or compilation needed
- All assets are self-contained within the repository

## Project Architecture

### Main Components

**Landing Page** (`index.html`)
- Main entry point with course selection interface
- Teacher panel for administrative functions
- Course navigation and resource access

**Course Structure** (`cursos/`)
- `curso-electro/` - Physics II (Electromagnetism) - fully populated with content
- `curso-ondas/` - Physics III (Waves and Optics) - structure only
- `curso-lab/` - Physics Laboratory II - structure only

**Global Assets** (`assets/`)
- `css/global-styles.css` - Main stylesheet with responsive design
- `icons/` and `images/` - Static resources

### Data Architecture

Course content is managed through JavaScript data structures in `cursos/js/main.js`:

- `courseData` object contains complete course hierarchy
- Each course has modules (4 per course)
- Each module has lessons (3 per module typically)
- Lesson status tracking: `'uploaded'`, `'pending'`, `'empty'`

### Course Navigation System

- Courses are accessed via modal overlays from the main page
- Each lesson can contain PDF presentations and resources
- Teacher panel allows content upload simulation
- Progress tracking via localStorage

## Key Files

- `index.html` - Main landing page and course selector
- `cursos/js/main.js` - Core application logic and data structures (981 lines)
- `assets/css/global-styles.css` - Main styling with gradient backgrounds and responsive design
- `cursos/curso-electro/` - Example of fully implemented course structure

## Course Content Structure

```
curso-[name]/
├── index.html (course overview)
├── css/ (course-specific styles)
└── modulos/
    └── modulo-[n]/
        ├── index.html (module overview)
        └── leccion-[n-m]/
            ├── index.html (lesson content)
            ├── [lesson].pdf (presentation)
            └── recursos/ (additional materials)
```

## Spanish Language Context

All content, UI text, and documentation is in Spanish for Colombian university students. The educational content follows Colombian academic standards for university physics courses.

## Technical Notes

- Pure vanilla JavaScript with ES6+ features
- CSS Grid and Flexbox for responsive layouts
- LocalStorage for progress tracking
- Modal-based navigation system
- Drag-and-drop file upload interface (UI only)
- No external dependencies or frameworks required