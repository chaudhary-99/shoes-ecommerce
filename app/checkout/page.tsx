
'use client';

import { Suspense } from 'react';
import CheckoutContent from './CheckoutContent';

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center">Loading...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}
