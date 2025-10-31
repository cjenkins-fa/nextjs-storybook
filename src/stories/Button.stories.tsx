import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Core 3.0.0/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    docs: {
      description: {
        component: `
# Button Component - Core 3.0.0 (BEM Methodology)

A comprehensive button system built using BEM (Block Element Modifier) methodology. Includes standard buttons, button text links, and pure text links with proper semantic structure and maintainable CSS.

## 🎯 BEM Structure

- **Block**: \`.btn\` - The main button component
- **Elements**: \`.btn__text\`, \`.btn__icon\` - Parts of the button
- **Modifiers**: \`.btn--primary\`, \`.btn--small\` - Variations and states

## 📋 Quick Reference

➡️ **For detailed HTML documentation scroll to the "HTML Examples" section further down in this doc.**

➡️ **CSS References are located at the bottom of this doc.**

## Available Variants

### BEM Classes
- **Primary Button**: \`btn btn--primary\`
- **Secondary Button**: \`btn btn--secondary\`  
- **Text Link**: \`btn btn--text-link btn--primary\`
- **Back to Top**: \`btn btn--back-to-top\`

## Features

- 🏗️ **BEM Methodology**: Scalable and maintainable CSS architecture
- 📱 **Responsive**: Small size modifier with \`btn--small\`
- 🎨 **Smart Icons**: Icons change color on hover for better contrast
  - **Back-to-Top**: Light scheme hover → white icon, Dark scheme hover → dark icon
  - **Text Links**: Arrow icons with proper contrast
- 🎭 **Theming**: Automatic light/dark theme support with CSS custom properties
- ♿ **Accessibility**: Full keyboard navigation and screen reader support

## Interactive Features

- **Hover States**: All buttons have proper hover feedback
- **Icon Color Adaptation**: Icons automatically adjust for contrast
- **Focus States**: Keyboard navigation with visible focus indicators
- **Disabled States**: Proper visual feedback for disabled buttons

## Usage

Use the controls below to explore different button variants, or check out the individual stories for specific examples.
        `
      }
    }
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'text-link', 'back-to-top'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium'],
    },
    theme: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
      if: { arg: 'variant', eq: 'text-link' }, // Only show for text-link variant
    },
    showArrow: { 
      control: 'boolean',
      if: { arg: 'variant', eq: 'text-link' }, // Only show for text-link variant
    },
    backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: 'primary',
    theme: 'primary',
    label: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    theme: 'secondary',
    label: 'Secondary Button',
  },
};

export const PrimarySmall: Story = {
  args: {
    variant: 'primary',
    theme: 'primary',
    size: 'small',
    label: 'Small Primary',
  },
};

export const SecondarySmall: Story = {
  args: {
    variant: 'secondary',
    theme: 'secondary',
    size: 'small',
    label: 'Small Secondary',
  },
};

export const BackToTop: Story = {
  args: {
    variant: 'back-to-top',
    label: 'Back to top',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    theme: 'primary',
    label: 'Disabled Button',
    disabled: true,
  },
};

export const DisabledSecondary: Story = {
  args: {
    variant: 'secondary',
    theme: 'secondary',
    label: 'Disabled Secondary',
    disabled: true,
  },
};

// Button Text Links
export const ButtonTextLinkPrimary: Story = {
  args: {
    variant: 'text-link',
    theme: 'primary',
    label: 'Button Text Link',
    showArrow: true,
  },
};

export const ButtonTextLinkSecondary: Story = {
  args: {
    variant: 'text-link',
    theme: 'secondary',
    label: 'Secondary Button Link',
    showArrow: true,
  },
};

export const ButtonTextLinkNoArrow: Story = {
  args: {
    variant: 'text-link',
    theme: 'primary',
    label: 'Button Link No Arrow',
    showArrow: false,
  },
};

// Pure Text Links
export const TextLinkPrimary: Story = {
  args: {
    variant: 'text-link',
    theme: 'primary', 
    label: 'Text Link Primary',
  },
};

export const TextLinkSecondary: Story = {
  args: {
    variant: 'text-link',
    theme: 'secondary',
    label: 'Text Link Secondary',
  },
};

// Horizontal Button Layouts
export const HorizontalButtonLayouts: Story = {
  args: {
    label: 'Button',
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: `Horizontal button layout patterns demonstrating left, center, and right alignment, plus multiple button groupings from the demo. 

Copy the HTML code below to implement these layouts in your project. View the complete working examples in \`demo/themes/index.html\`.`,
      },
      source: {
        code: `<!-- Left Aligned (Default) -->
<div class="d-flex flex-column flex-lg-row gap-16 align-items-start justify-content-start">
  <a class="btn btn--primary">Button</a>
  <a class="btn btn--secondary">Button</a>
</div>

<!-- Center Aligned -->
<div class="d-flex flex-column flex-lg-row align-items-center justify-content-center gap-16">
  <a class="btn btn--primary">Button</a>
  <a class="btn btn--secondary">Button</a>
</div>

<!-- Right Aligned -->
<div class="d-flex flex-column flex-lg-row align-items-end justify-content-end gap-16">
  <a class="btn btn--primary">Button</a>
  <a class="btn btn--secondary">Button</a>
</div>

<!-- Multiple Buttons with Links (Small) -->
<div class="d-flex gap-x-16 py-8">
  <a class="btn btn--primary btn--small">Save</a>
  <a class="btn btn--secondary btn--small">Cancel</a>
  <a class="btn btn--text-link btn--text-link--primary btn--small">Help</a>
</div>

<!-- Multiple Buttons with Links (Regular) -->
<div class="d-flex gap-x-16 py-8">
  <a class="btn btn--primary">Button</a>
  <a class="btn btn--secondary">Button</a>
  <a class="btn btn--text-link btn--text-link--primary">Text Link</a>
</div>`,
      },
    },
  },
  render: () => (
    <div style={{ padding: '2rem', maxWidth: '100%' }}>
      <style>{`
        .layout-demo { margin-bottom: 3rem; }
        .layout-demo h4 { margin-bottom: 1rem; font-size: 1rem; font-weight: 600; }
        .layout-demo-box { border: 1px dashed #999; padding: 1rem; background: #f9f9f9; }
      `}</style>
      
      <div className="layout-demo">
        <h4>Left Aligned (Default)</h4>
        <div className="layout-demo-box">
          <div className="d-flex flex-column flex-lg-row gap-16 align-items-start justify-content-start">
            <a className="btn btn--primary">Button</a>
            <a className="btn btn--secondary">Button</a>
          </div>
        </div>
      </div>
      
      <div className="layout-demo">
        <h4>Center Aligned</h4>
        <div className="layout-demo-box">
          <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center gap-16">
            <a className="btn btn--primary">Button</a>
            <a className="btn btn--secondary">Button</a>
          </div>
        </div>
      </div>
      
      <div className="layout-demo">
        <h4>Right Aligned</h4>
        <div className="layout-demo-box">
          <div className="d-flex flex-column flex-lg-row align-items-end justify-content-end gap-16">
            <a className="btn btn--primary">Button</a>
            <a className="btn btn--secondary">Button</a>
          </div>
        </div>
      </div>
      
      <div className="layout-demo">
        <h4>Multiple Buttons with Links (Small)</h4>
        <div className="layout-demo-box">
          <div className="d-flex gap-x-16 py-8">
            <a className="btn btn--primary btn--small">Save</a>
            <a className="btn btn--secondary btn--small">Cancel</a>
            <a className="btn btn--text-link btn--text-link--primary btn--small">Help</a>
          </div>
        </div>
      </div>
      
      <div className="layout-demo">
        <h4>Multiple Buttons with Links (Regular)</h4>
        <div className="layout-demo-box">
          <div className="d-flex gap-x-16 py-8">
            <a className="btn btn--primary">Button</a>
            <a className="btn btn--secondary">Button</a>
            <a className="btn btn--text-link btn--text-link--primary">Text Link</a>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Stacked Button Layouts
export const StackedButtonLayouts: Story = {
  args: {
    label: 'Button',
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: `Stacked button layout patterns demonstrating vertical button arrangements and responsive layouts.
        
**Layout Patterns:**
- **Basic Stacked** - Buttons stacked vertically with 16px gap
- **Responsive Layout** - Horizontal on desktop, stacked on mobile

Copy the HTML code below to implement these layouts in your project. View the complete working examples in \`src/demo/themes/index.html\`.`,
      },
      source: {
        code: `<!-- Basic Stacked Layout -->
<div class="d-flex flex-column gap-16">
  <a class="btn btn--primary d-flex justify-content-center">Primary</a>
  <a class="btn btn--secondary d-flex justify-content-center">Secondary</a>
</div>

<!-- Responsive Layout (Horizontal on Desktop, Stacked on Mobile) -->
<div class="d-flex flex-column flex-md-row gap-16">
  <a class="btn btn--primary d-flex justify-content-center">Primary</a>
  <a class="btn btn--secondary d-flex justify-content-center">Secondary</a>
</div>`,
      },
    },
  },
  render: () => (
    <div style={{ padding: '2rem', maxWidth: '100%' }}>
      <style>{`
        .layout-demo {
          margin-bottom: 2rem;
        }
        .layout-demo h4 {
          margin-bottom: 1rem;
          font-size: 1rem;
          font-weight: 600;
          color: #333;
        }
        .layout-demo-box {
          border: 1px solid #ddd;
          padding: 1.5rem;
          border-radius: 4px;
          background: #f9f9f9;
        }
      `}</style>
      
      <div className="layout-demo">
        <h4>Basic Stacked</h4>
        <div className="layout-demo-box" style={{ maxWidth: '300px' }}>
          <div className="d-flex flex-column gap-16">
            <a className="btn btn--primary d-flex justify-content-center">Primary</a>
            <a className="btn btn--secondary d-flex justify-content-center">Secondary</a>
          </div>
        </div>
      </div>
      
      <div className="layout-demo">
        <h4>Responsive Layout (Horizontal on Desktop, Stacked on Mobile)</h4>
        <div className="layout-demo-box" style={{ maxWidth: '500px' }}>
          <div className="d-flex flex-column flex-md-row gap-16">
            <a className="btn btn--primary d-flex justify-content-center">Primary</a>
            <a className="btn btn--secondary d-flex justify-content-center">Secondary</a>
          </div>
        </div>
        <p style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#666' }}>
          💡 Resize your browser window to see the responsive behavior
        </p>
      </div>
    </div>
  ),
};

// HTML Examples Documentation
export const HTMLExamples: Story = {
  args: {
    variant: 'primary',
    label: 'Button',
  },
  parameters: {
    docs: {
      description: {
        story: `
<div id="html-implementation-examples"></div>

# 📋 HTML Implementation Examples

> **Complete Reference**: This section contains all the HTML code examples and implementation details from the Core 3.0.0 demo.

## How to Use This Reference

Copy the HTML examples below and paste them into your project. All examples use the exact markup from \`demo/themes/index.html\`.

---

## Standard Buttons

### Primary Buttons
\`\`\`html
<!-- BEM Methodology (Recommended) -->
<button class="btn btn--primary">
  <span class="btn__text">Primary</span>
</button>

<!-- Small Primary Button -->
<button class="btn btn--primary btn--small">
  <span class="btn__text">Small Primary</span>
</button>

<!-- Disabled Primary Button -->
<button class="btn btn--primary" disabled>
  <span class="btn__text">Disabled</span>
</button>
\`\`\`

### Secondary Buttons
\`\`\`html
<!-- BEM Methodology (Recommended) -->
<button class="btn btn--secondary">
  <span class="btn__text">Secondary</span>
</button>

<!-- Small Secondary Button -->
<button class="btn btn--secondary btn--small">
  <span class="btn__text">Small Secondary</span>
</button>

<!-- Disabled Secondary Button -->
<button class="btn btn--secondary" disabled>
  <span class="btn__text">Disabled</span>
</button>
\`\`\`

---

## Button Text Links

Button text links combine button styling with link behavior and typically include arrow icons.

### Primary Button Text Link
\`\`\`html
<!-- BEM Methodology (Recommended) -->
<button class="btn btn--text-link btn--primary">
  <span class="btn__text">Button Link</span>
  <i class="button__icon button__icon--arrow-right"></i>
</button>
\`\`\`

### Secondary Button Text Link
\`\`\`html
<!-- BEM Methodology (Recommended) -->
<a class="btn btn--text-link btn--secondary">
  <span class="btn__text">Secondary</span>
  <i class="button__icon button__icon--arrow-right"></i>
</a>
\`\`\`

---

## Text Links

Pure text links without button styling.

### Primary Text Link
\`\`\`html
<!-- BEM Methodology (Recommended) -->
<button class="btn btn--text-link btn--primary">
  <span class="btn__text">Text Link</span>
</button>
\`\`\`

### Secondary Text Link
\`\`\`html
<!-- BEM Methodology (Recommended) -->
<a class="btn btn--text-link btn--secondary">
  <span class="btn__text">Text Link</span>
</a>
\`\`\`

---

## Special Buttons

### Back to Top Button
\`\`\`html
<!-- Current Implementation (Legacy Classes) -->
<button class="btn btn--back-to-top">
  <i class="bg-icon bg-icon--chevron-up"></i>Back to top
</button>

<!-- BEM Methodology (Future) -->
<button class="button btn--back-to-top">
  <i class="button__icon button__icon--chevron-up"></i>
  <span class="btn__text">Back to top</span>
</button>
\`\`\`

**🎨 Smart Icon Behavior:**
- **Light Scheme**: Normal = dark icon, Hover = white icon
- **Dark Scheme**: Normal = white icon, Hover = dark icon
- Icons automatically adapt for optimal contrast

---

## CSS Classes Reference

### BEM Classes (Recommended)

#### Block
- \`.btn\` - Base button component

#### Elements  
- \`.btn__text\` - Button text content
- \`.btn__icon\` - Button icon element
- \`.btn__icon--arrow-right\` - Right arrow icon
- \`.btn__icon--chevron-up\` - Up chevron icon

#### Modifiers
- \`.btn--primary\` - Primary variant
- \`.btn--secondary\` - Secondary variant  
- \`.btn--text-link\` - Text link variant
- \`.btn--back-to-top\` - Back to top variant
- \`.btn--small\` - Small size modifier

### Button Variants
- \`.btn--primary\` - Primary button styling (high emphasis)
- \`.btn--secondary\` - Secondary button styling (medium emphasis)
- \`.btn--text-link\` - Button text link base
- \`.btn--text-link-primary\` - Primary button text link
- \`.btn--text-link-secondary\` - Secondary button text link
- \`.text-link-primary\` - Primary text link (low emphasis)
- \`.text-link-secondary\` - Secondary text link (low emphasis)
- \`.btn--back-to-top\` - Special back-to-top button

### Size Modifiers
- \`.btn--small\` - Small button size (applies to \`.btn\` only)

### State Attributes
- \`disabled\` - Disabled state for \`<button>\` elements
-\`aria-disabled="true"\` - Disabled state for \`<a>\` elements

### Icon Classes
- \`.bg-icon\` - Base background icon class
- \`.bg-icon--arrow-right\` - Right arrow icon (for text links)
- \`.bg-icon--chevron-up\` - Up chevron icon (for back-to-top)

---

## Implementation Notes

### Current State
- **Component**: Uses legacy classes (\`btn\`, \`bg-icon\`) for proven stability
- **CSS**: BEM architecture with backward compatibility via \`@extend\`
- **Migration**: BEM classes available but component uses legacy for reliability

### Element Types
- **\`<button>\`** - Use for interactive actions (JavaScript handlers)
- **\`<a>\`** - Use for navigation links

### Icon Behavior
- **Smart Contrast**: Icons automatically change color on hover
- **Theme Aware**: Different icon colors for light/dark schemes
- **Back-to-Top Icons**:
  - Light scheme: dark → white on hover
  - Dark scheme: white → dark on hover

### Icon Positioning
- Icons are placed **after** the text content for text links
- Icons are placed **before** the text content for back-to-top buttons
- Use \`<i class="bg-icon bg-icon--[icon-name]"></i>\` format

### Color Schemes
Buttons automatically adapt to light/dark themes:
\`\`\`html
<!-- Light scheme (default) -->
<section class="band">
  <button class="btn btn--primary">Primary</button>
</section>

<!-- Dark scheme -->
<section class="band band--dark" data-scheme="dark">
  <button class="btn btn--primary">Primary</button>
</section>
\`\`\`

### Accessibility
- Always include meaningful text content
- Use semantic HTML elements appropriately
- Disabled buttons automatically receive proper ARIA attributes

---

📄 **For additional documentation and best practices, see [Button.docs.md](./Button.docs.md) in the stories folder.** `
      }
    }
  },
};
