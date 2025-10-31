# Button HTML Examples - Core 3.0.0

This document provides the exact HTML markup for buttons as they appear in `demo/themes/index.html`. These examples show the proper CSS classes and structure for implementing buttons in your project.

> 💡 **Live Demo**: View the complete working examples at `demo/themes/index.html` or in Storybook.

## Table of Contents

- [Primary Buttons](#primary-buttons)
- [Secondary Buttons](#secondary-buttons)
- [Button Text Links](#button-text-links)
- [Back to Top Buttons](#back-to-top-buttons)
- [Layout Examples](#layout-examples)
  - [Horizontal Layouts](#horizontal-layouts)
  - [Stacked Layouts](#stacked-layouts)
  - [Responsive Layouts](#responsive-layouts)
- [BEM Naming Convention](#bem-naming-convention)
- [Gap Utilities](#gap-utilities)
- [Grid Utilities](#grid-utilities)
- [Accessibility Notes](#accessibility-notes)

---

## Primary Buttons

### Standard Primary Button
```html
<a class="btn btn--primary">Primary</a>
```

### Small Primary Button
```html
<a class="btn btn--small btn--primary">Primary</a>
```

### Primary Button Text Link with Icon
```html
<a class="btn btn--text-link btn--text-link--primary">Button Link<i class="bg-icon bg-icon--arrow-right"></i></a>
```

### Primary Text Link (No Icon)
```html
<a class="btn btn--text-link btn--text-link--primary">Text Link</a>
```

### Disabled Primary Button
```html

## BEM Naming Convention

- **Block**: `.btn` (base button component)
- **Modifiers**:
  - `.btn--primary` - Primary styling
  - `.btn--secondary` - Secondary styling
  - `.btn--small` - Small size
  - `.btn--text-link` - Text link base
  - `.btn--text-link--primary` - Primary text link
  - `.btn--text-link--secondary` - Secondary text link
  - `.btn--back-to-top` - Back to top button (legacy, no `.btn` prefix)

---

## Gap Utilities

Available spacing utilities used in layouts:
- `.gap-16` - 16px gap on all sides
- `.gap-x-16` - 16px horizontal gap
- `.gap-y-16` - 16px vertical gap

Other available tokens: `8`, `16`, `24`, `32`, `40`, `48`, `64`

---

## Grid Classes Used

From Bootstrap Grid system:
- `.container-fluid` - Full-width container
- `.container-lg` - Large breakpoint constraint
- `.row` - Grid row
- `.col-{n}` - Column width (1-12)
- `.col-sm-{n}`, `.col-md-{n}`, `.col-lg-{n}` - Responsive columns
- `.d-flex` - Display flex
- `.flex-column` - Flex direction column
- `.flex-row` - Flex direction row (default)
- `.flex-lg-row` - Flex row on large screens
- `.justify-content-{value}` - Justify content (start, center, end)
- `.align-items-{value}` - Align items (start, center, end)

---

## Reference

For the complete, live implementation see:
- **Demo**: `demo/themes/index.html`
- **Styles**: `src/stylesheets/components/_buttons-3.0.0.scss`
- **Storybook**: Interactive examples in the Button stories

```

### Disabled Small Primary Button
```html
<a class="btn btn--primary btn--small" aria-disabled="true">Disabled</a>
```

---

## Secondary Buttons

### Standard Secondary Button
```html
<a class="btn btn--secondary">Secondary</a>
```

### Small Secondary Button
```html
<a class="btn btn--small btn--secondary">Secondary</a>
```

### Secondary Button Text Link with Icon
```html
<a class="btn btn--text-link btn--text-link--secondary">Secondary<i class="bg-icon bg-icon--arrow-right"></i></a>
```

### Secondary Text Link (No Icon)
```html
<a class="btn btn--text-link btn--text-link--secondary">Text Link</a>
```

### Disabled Secondary Button
```html
<!-- For anchor tags -->
<a class="btn btn--secondary" aria-disabled="true">Disabled</a>

<!-- For button elements -->
<button class="btn btn--secondary" disabled>Disabled</button>
```

### Disabled Small Secondary Button
```html
<a class="btn btn--secondary btn--small" aria-disabled="true">Disabled</a>
```

---

## Back to Top Buttons

### Back to Top (Button Element - Recommended)
```html
<!-- Does not require a wrapper -->
<button class="btn--back-to-top">
  <i class="bg-icon bg-icon--chevron-up"></i>Back to top
</button>
```

### Back to Top (Anchor Element)
```html
<!-- Requires a wrapper for proper styling -->
<span class="back-to-top-wrapper d-flex">
  <a class="btn--back-to-top">
    <i class="bg-icon bg-icon--chevron-up"></i>Back to top
  </a>
</span>
```

---

## Button Layout Examples

### Horizontal Button Layouts

#### Left Aligned (Default)
```html
<div class="d-flex flex-column flex-lg-row gap-16 align-items-start justify-content-start">
  <a class="btn btn--primary">Button</a>
  <a class="btn btn--secondary">Button</a>
</div>
```

#### Center Aligned
```html
<div class="d-flex flex-column flex-lg-row align-items-center justify-content-center gap-16">
  <a class="btn btn--primary">Button</a>
  <a class="btn btn--secondary">Button</a>
</div>
```

#### Right Aligned
```html
<div class="d-flex flex-column flex-lg-row align-items-end justify-content-end gap-16">
  <a class="btn btn--primary">Button</a>
  <a class="btn btn--secondary">Button</a>
</div>
```

#### Multiple Buttons with Links (Small)
```html
<div class="d-flex gap-x-16 py-8">
  <a class="btn btn--primary btn--small">Button</a>
  <a class="btn btn--secondary btn--small">Button</a>
  <a class="btn btn--text-link btn--text-link--primary btn--small">Button</a>
</div>
```

#### Multiple Buttons with Links (Regular)
```html
<div class="d-flex gap-x-16 py-8">
  <a class="btn btn--primary">Button</a>
  <a class="btn btn--secondary">Button</a>
  <a class="btn btn--text-link btn--text-link--primary">Text Link</a>
</div>
```

---

### Stacked Button Layouts

#### Basic Stacked Layout
```html
<div class="d-flex flex-column gap-16">
  <a class="btn btn--primary d-flex justify-content-center">Primary</a>
  <a class="btn btn--secondary d-flex justify-content-center">Secondary</a>
</div>
```

---

### Responsive Button Layouts

#### Horizontal on Desktop, Stacked on Mobile
```html
<div class="d-flex flex-column flex-md-row gap-16">
  <a class="btn btn--primary d-flex justify-content-center">Primary</a>
  <a class="btn btn--secondary d-flex justify-content-center">Secondary</a>
</div>
```

---

## Container Context

The demo uses the following container structure for proper responsive behavior:

```html
<section class="band">
  <div class="container-fluid container-lg">
    <div class="row">
      <!-- Button examples here -->
    </div>
  </div>
</section>
```

### Dark Theme Section
```html
<section class="band band--dark" data-scheme="dark">
  <div class="container-fluid container-lg">
    <!-- Buttons automatically adapt to dark theme -->
  </div>
</section>
```

---

## Accessibility Notes

- **Anchor tags**: Use `aria-disabled="true"` for disabled state
- **Button elements**: Use native `disabled` attribute
- **Icons**: Use `<i class="bg-icon bg-icon--{icon-name}"></i>` format
- **Screen readers**: All buttons include proper text content

---

#### Small Disabled Secondary Button
```html
<button class="btn btn--small btn--secondary" disabled>Disabled</button>
```

## Button Text Links

Button text links are styled like buttons but behave more like links. They typically include arrow icons.

### Primary Button Text Link
```html
<button class="btn btn--text-link btn--text-link-primary">
  Button Link<i class="bg-icon bg-icon--arrow-right"></i>
</button>
```

### Secondary Button Text Link
```html
<a class="btn btn--text-link btn--text-link-secondary">
  Secondary<i class="bg-icon bg-icon--arrow-right"></i>
</a>
```

## Text Links

Pure text links without button styling.

### Primary Text Link
```html
<button class="text-link text-link-primary">Text Link</button>
```

### Secondary Text Link
```html
<a class="text-link text-link-secondary">Text Link</a>
```

## Special Buttons

### Back to Top Button
```html
<button class="btn--back-to-top">
  <i class="bg-icon bg-icon--chevron-up"></i>Back to top
</button>
```

## CSS Class Reference

### Base Classes
- `.btn` - Base button class for standard and button text links
- `.text-link` - Base class for pure text links

### Variant Classes
- `.btn--primary` - Primary button styling
- `.btn--secondary` - Secondary button styling
- `.btn--text-link` - Base class for button text links
- `.btn--text-link-primary` - Primary button text link styling
- `.btn--text-link-secondary` - Secondary button text link styling
- `.text-link-primary` - Primary text link styling
- `.text-link-secondary` - Secondary text link styling
- `.btn--back-to-top` - Special back-to-top button styling

### Size Modifiers
- `.btn--small` - Small button size (only applies to standard buttons)

### Icon Classes
- `.bg-icon` - Base background icon class
- `.bg-icon--arrow-right` - Right arrow icon
- `.bg-icon--chevron-up` - Up chevron icon

## Element Types

The examples show that buttons can be implemented using different HTML elements:

- `<button>` - For interactive buttons that trigger JavaScript actions
- `<a>` - For navigation links that behave like buttons
- Both are valid and will receive the same styling

## State Classes

### Disabled State
Add the `disabled` attribute to `<button>` elements:
```html
<button class="btn btn--primary" disabled>Disabled</button>
```

For `<a>` elements, you can add a `.disabled` class if needed (implementation may vary).

## Color Schemes

The Core 3.0.0 system supports both light and dark color schemes. The buttons automatically adapt based on the parent container's `data-scheme` attribute:

```html
<!-- Light scheme (default) -->
<section class="band">
  <button class="btn btn--primary">Primary</button>
</section>

<!-- Dark scheme -->
<section class="band band--dark" data-scheme="dark">
  <button class="btn btn--primary">Primary</button>
</section>
```

## Best Practices

1. **Use semantic HTML**: Choose `<button>` for actions and `<a>` for navigation
2. **Include icons appropriately**: Button text links typically include arrow icons to indicate navigation
3. **Apply size modifiers consistently**: Use `.btn--small` when you need compact buttons
4. **Consider accessibility**: Always include meaningful text content
5. **Test across color schemes**: Ensure buttons work in both light and dark themes

## CSS Custom Properties

The buttons use CSS custom properties (CSS variables) for theming:

- `--color-btn-primary-bg` - Primary button background
- `--color-btn-primary-text` - Primary button text
- `--color-btn-secondary-bg` - Secondary button background
- `--color-btn-link-primary` - Primary button text link color
- `--color-link-primary` - Primary text link color
- And many more for different states (hover, focus, active, disabled)

These variables are automatically set based on the current brand and color scheme.