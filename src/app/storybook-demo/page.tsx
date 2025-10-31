'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import the Button component - it will be code-split
const Button = dynamic(() => import('../../stories/Button').then(mod => mod.Button), {
  loading: () => (
    <span className="btn btn--primary" style={{ opacity: 0.5, pointerEvents: 'none' }}>
      Loading...
    </span>
  ),
  ssr: true,
});

export default function StorybookDemo() {
  return (
    <div style={{ padding: '3rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '2rem', fontSize: '2rem', fontWeight: 'bold' }}>
        Design System Demo - Code Split Components
      </h1>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Dynamically Loaded Buttons</h2>
        <p style={{ marginBottom: '1rem', color: '#666' }}>
          These buttons are loaded on-demand using dynamic imports for optimal performance.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Suspense fallback={<span>Loading Primary...</span>}>
            <Button variant="primary" label="Primary Button" />
          </Suspense>

          <Suspense fallback={<span>Loading Secondary...</span>}>
            <Button variant="secondary" label="Secondary Button" />
          </Suspense>

          <Suspense fallback={<span>Loading Small...</span>}>
            <Button variant="primary" size="small" label="Small Button" />
          </Suspense>

          <Suspense fallback={<span>Loading Text Link...</span>}>
            <Button variant="text-link" theme="primary" label="Text Link" showArrow />
          </Suspense>
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Why Code Splitting?</h2>
        <ul style={{ listStyle: 'disc', paddingLeft: '2rem', color: '#666' }}>
          <li>Reduces initial bundle size</li>
          <li>Faster page loads</li>
          <li>Components load only when needed</li>
          <li>Better performance for users</li>
        </ul>
      </section>
    </div>
  );
}
