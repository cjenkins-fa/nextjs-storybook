# Button Component Updates - Core 3.0.0

## Latest Changes Summary

### 1. Text-Link Button Classes ✅
**Updated**: Text-link buttons now use BOTH modifier classes together

**Before**:
```html
<a class="btn btn--text-link btn--primary">Link</a>
```

**After**:
```html
<a class="btn btn--text-link btn--text-link--primary">Link</a>
```

**Reason**: Proper BEM naming where theme is a sub-modifier of the text-link variant.

---

### 2. Icon Classes ✅
**Updated**: Icon elements use `bg-icon` instead of `btn__icon`

**Before**:
```html
<i class="btn__icon btn__icon--arrow-right"></i>
```

**After**:
```html
<i class="bg-icon bg-icon--arrow-right"></i>
```

**Reason**: Backward compatibility via `@extend` directive maps legacy classes to BEM elements.

---

### 3. Small Button Padding ✅
**Updated**: Small button styles now use `!important` to ensure proper override

**CSS**:
```scss
.btn--small {
  padding: var(--space-200) var(--space-400) !important;  // 8px 16px
  font-size: $font-label-small !important;                // 14px
}
```

**Reason**: Base `.btn` padding has same specificity, so `!important` ensures small buttons get correct padding regardless of variant order.

---

### 4. Spacing Variables ✅
**Source**: Spacing values come from `brand.core.scss` theme system

**Variables**:
```scss
spacing: (
  0: 0,
  050: 2px,
  100: 4px,    // --space-100
  150: 6px,
  200: 8px,    // --space-200
  300: 12px,   // --space-300
  400: 16px,   // --space-400
  500: 24px,
  800: 32px,   // --space-800
  1200: 48px,
  1600: 64px,
  2400: 96px
)
```

**Usage in Buttons**:
- Base button: `padding: var(--space-400) var(--space-800)` → 16px 32px
- Small button: `padding: var(--space-200) var(--space-400)` → 8px 16px
- Gap between elements: `gap: var(--space-200)` → 8px

---

### 5. React Component Implementation ✅

**Button.tsx now correctly generates**:
```typescript
// Text-link example
if (variant === 'text-link') {
  classes.push(`${baseClass}--${variant}`);           // btn--text-link
  classes.push(`${baseClass}--${variant}--${theme}`); // btn--text-link--primary
}

// Result: "btn btn--text-link btn--text-link--primary"
```

**Icon rendering**:
```tsx
{showArrow && <i className="bg-icon bg-icon--arrow-right"></i>}
```

---

## Testing Checklist

- [x] Primary buttons render with correct padding (16px 32px)
- [x] Secondary buttons render with correct padding (16px 32px)
- [x] Small buttons render with correct padding (8px 16px)
- [x] Small font size (14px) applies properly
- [x] Text-link buttons use both modifier classes
- [x] Icons use `bg-icon` classes
- [x] Arrow icon animates 8px right on hover
- [x] Spacing variables load from brand.core.scss
- [x] HTML examples match React component output
- [x] Storybook renders all variants correctly

---

## Files Updated

1. **Button.tsx** - Component logic for class generation
2. **_buttons-3.0.0.scss** - Small button !important, icon animation
3. **_brand.core.scss** - Spacing scale definition
4. **Button.stories.tsx** - Already up-to-date with correct examples
5. **Button.docs.md** - Already documents correct HTML structure

---

## Migration Notes

If you have existing buttons in your codebase:

### Update Text Links
```diff
- <a class="btn btn--text-link btn--primary">
+ <a class="btn btn--text-link btn--text-link--primary">
```

### Update Icons
```diff
- <i class="btn__icon btn__icon--arrow-right"></i>
+ <i class="bg-icon bg-icon--arrow-right"></i>
```

**Note**: Legacy icon classes still work via SCSS `@extend` for backward compatibility!

---

## Design System Integration

### Next.js (globals.scss)
```scss
@use "../stylesheets/core-3.0.0.scss";
```

### Component Usage
```tsx
import { Button } from '@/stories/Button';

<Button variant="primary" size="small" label="Click me" />
<Button variant="text-link" theme="primary" label="Learn more" showArrow />
```

### HTML Usage
```html
<link rel="stylesheet" href="/stylesheets/core-3.0.0.css">

<button class="btn btn--primary btn--small">
  <span class="btn__text">Click me</span>
</button>

<a class="btn btn--text-link btn--text-link--primary">
  Learn more<i class="bg-icon bg-icon--arrow-right"></i>
</a>
```

---

## Performance Notes

- **Code Splitting**: Button component can be dynamically imported in Next.js
- **CSS Variables**: Runtime theming support via brand.core.scss
- **Optimized Selectors**: BEM methodology prevents specificity wars
- **Backward Compatibility**: Legacy classes map to new BEM structure via @extend

---

Last Updated: October 31, 2025
