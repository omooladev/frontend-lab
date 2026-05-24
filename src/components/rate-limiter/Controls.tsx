'use client';
import { useState } from 'react';

export default function Controls() {
  const [rateLimitOn, setRateLimitOn] = useState(true);
  return (
    <div>
      <p>Rate limit is currently turned {rateLimitOn ? 'on' : 'off'}</p>
      <button type="button">Turn on Rate Limiting</button>
    </div>
  );
}
