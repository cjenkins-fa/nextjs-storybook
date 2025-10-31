'use client';

import { useState } from 'react';

export default function ChartDemo() {
  const [data] = useState([
    { label: 'Jan', value: 65 },
    { label: 'Feb', value: 78 },
    { label: 'Mar', value: 90 },
    { label: 'Apr', value: 81 },
    { label: 'May', value: 95 },
    { label: 'Jun', value: 87 },
  ]);

  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
      <h3 style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>
        Sample Chart (Dynamically Loaded)
      </h3>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '1rem', height: '300px' }}>
        {data.map((item, index) => (
          <div
            key={index}
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <span style={{ fontSize: '0.875rem', fontWeight: '600', color: '#333' }}>
              {item.value}%
            </span>
            <div
              style={{
                width: '100%',
                background: index % 2 === 0 ? '#0075C3' : '#141D3A',
                height: `${(item.value / maxValue) * 100}%`,
                borderRadius: '4px 4px 0 0',
                transition: 'height 0.3s ease',
              }}
            />
            <span style={{ fontSize: '0.875rem', color: '#666' }}>
              {item.label}
            </span>
          </div>
        ))}
      </div>
      <p style={{ marginTop: '1.5rem', color: '#666', fontSize: '0.875rem' }}>
        💡 This chart component was code-split and only loaded when you clicked the button.
        In a real app, this could be a heavy charting library like Chart.js or D3.
      </p>
    </div>
  );
}
