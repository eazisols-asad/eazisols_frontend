'use client';

import { useEffect } from 'react';

export default function Providers({ children }) {
  useEffect(() => {
    // Load Bootstrap JavaScript
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return children;
} 