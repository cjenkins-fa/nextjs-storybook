'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';

// This modal will only be loaded when the user clicks to open it
const ModalDemo = dynamic(() => import('./../../components/ModalDemo'), {
  loading: () => <div style={{ padding: '2rem' }}>Loading modal...</div>,
  ssr: false, // Client-side only since modals typically use browser APIs
});

// Heavy chart library - only loads when needed
const ChartDemo = dynamic(() => import('./../../components/ChartDemo'), {
  loading: () => <div style={{ height: '400px', background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading chart...</div>,
  ssr: false,
});

export default function LazyLoadDemo() {
  const [showModal, setShowModal] = useState(false);
  const [showChart, setShowChart] = useState(false);

  return (
    <div style={{ padding: '3rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '2rem', fontSize: '2rem', fontWeight: 'bold' }}>
        Lazy Loading Demo
      </h1>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Load on Interaction</h2>
        <p style={{ marginBottom: '1rem', color: '#666' }}>
          Components are only downloaded when the user interacts with them.
        </p>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
          <button
            onClick={() => setShowModal(true)}
            className="btn btn--primary"
            style={{ padding: '0.75rem 1.5rem', cursor: 'pointer' }}
          >
            Open Modal (Lazy Load)
          </button>

          <button
            onClick={() => setShowChart(!showChart)}
            className="btn btn--secondary"
            style={{ padding: '0.75rem 1.5rem', cursor: 'pointer' }}
          >
            {showChart ? 'Hide' : 'Show'} Chart (Lazy Load)
          </button>
        </div>

        {showModal && (
          <ModalDemo onClose={() => setShowModal(false)} />
        )}

        {showChart && (
          <div style={{ marginTop: '2rem' }}>
            <ChartDemo />
          </div>
        )}
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Performance Benefits</h2>
        <div style={{ background: '#f9f9f9', padding: '1.5rem', borderRadius: '8px' }}>
          <h3 style={{ marginBottom: '0.5rem', fontWeight: '600' }}>Initial Bundle</h3>
          <p style={{ color: '#666', marginBottom: '1rem' }}>
            Only includes the code for this page and the buttons you see.
          </p>

          <h3 style={{ marginBottom: '0.5rem', fontWeight: '600' }}>On Interaction</h3>
          <p style={{ color: '#666' }}>
            When you click a button, the component&apos;s code is downloaded and cached for future use.
          </p>
        </div>
      </section>

      <section>
        <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Check Network Tab</h2>
        <ol style={{ listStyle: 'decimal', paddingLeft: '2rem', color: '#666' }}>
          <li>Open your browser&apos;s Developer Tools (F12)</li>
          <li>Go to the Network tab</li>
          <li>Click the buttons above</li>
          <li>Watch the JavaScript chunks load on-demand!</li>
        </ol>
      </section>
    </div>
  );
}
