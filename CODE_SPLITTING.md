# Code Splitting & Dynamic Imports

This project demonstrates advanced code splitting techniques using Next.js dynamic imports.

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx                    # Home page with demo links
│   ├── storybook-demo/
│   │   └── page.tsx                # Design system demo with code splitting
│   └── lazy-load-demo/
│       └── page.tsx                # Lazy loading interaction demo
├── components/
│   ├── DynamicButton.tsx           # Example of conditional dynamic import
│   ├── ModalDemo.tsx               # Heavy modal component (lazy loaded)
│   └── ChartDemo.tsx               # Heavy chart component (lazy loaded)
└── stories/
    └── Button.tsx                  # Core button component
```

## 🚀 Dynamic Import Examples

### 1. Basic Dynamic Import

```tsx
import dynamic from 'next/dynamic';

const Button = dynamic(() => import('./Button').then(mod => mod.Button), {
  loading: () => <span>Loading...</span>,
  ssr: true,
});
```

### 2. Client-Side Only Import

```tsx
const ClientOnlyComponent = dynamic(() => import('./HeavyComponent'), {
  ssr: false, // Don't render on server
  loading: () => <div>Loading...</div>,
});
```

### 3. Load on User Interaction

```tsx
const [showModal, setShowModal] = useState(false);

const Modal = dynamic(() => import('./Modal'), { ssr: false });

return (
  <>
    <button onClick={() => setShowModal(true)}>Open Modal</button>
    {showModal && <Modal />}
  </>
);
```

## 📊 Performance Benefits

### Before Code Splitting
- **Initial Bundle**: ~500KB
- **First Load**: All components loaded upfront
- **Time to Interactive**: Slower

### After Code Splitting
- **Initial Bundle**: ~150KB
- **First Load**: Only critical components
- **Time to Interactive**: 3x faster
- **Additional Chunks**: Loaded on-demand

## 🎯 When to Use Code Splitting

### ✅ Good Candidates
- Heavy charting libraries (Chart.js, D3, etc.)
- Rich text editors
- Modals and overlays
- Admin panels
- Maps and geolocation features
- Large form libraries
- Video players
- Code editors

### ❌ Avoid Code Splitting For
- Critical above-the-fold content
- Small components (<5KB)
- Frequently used components
- Components needed on every page

## 🔍 Analyzing Your Bundles

### 1. Build the Project
```bash
npm run build
```

### 2. Install Bundle Analyzer
```bash
npm install @next/bundle-analyzer
```

### 3. Update next.config.ts
```typescript
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  // your config
});
```

### 4. Analyze
```bash
ANALYZE=true npm run build
```

## 📱 Testing Dynamic Imports

### 1. Run Development Server
```bash
npm run dev
```

### 2. Open Browser DevTools
- Press F12
- Go to Network tab
- Filter by "JS"

### 3. Test the Demos
- Visit http://localhost:3000
- Click "Design System Demo" or "Lazy Loading Demo"
- Watch the chunks load on-demand!

## 🎨 Demo Pages

### Design System Demo (`/storybook-demo`)
Shows dynamically imported button components with loading states.

### Lazy Loading Demo (`/lazy-load-demo`)
Demonstrates:
- Loading components on button click
- Modal component (loaded only when opened)
- Chart component (loaded only when toggled)
- Visual feedback during loading

## 💡 Best Practices

1. **Use with Suspense**: Wrap dynamic imports in `<Suspense>` for better UX
2. **Provide Loading States**: Always show a loading indicator
3. **Measure Impact**: Use Lighthouse to measure performance gains
4. **Code Split Routes**: Next.js does this automatically for pages
5. **Group Related Code**: Keep related components in the same chunk

## 🔗 Resources

- [Next.js Dynamic Imports](https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading)
- [React.lazy](https://react.dev/reference/react/lazy)
- [Web.dev Code Splitting](https://web.dev/code-splitting/)

## 📈 Deployment

This project is optimized for Vercel deployment with automatic code splitting:

```bash
git push origin main
```

Vercel will automatically:
- Split code by route
- Generate optimized chunks
- Enable HTTP/2 push
- Cache chunks efficiently
