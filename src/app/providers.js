'use client'; // Penting! Karena SessionProvider menggunakan React Context (hook)

import { SessionProvider } from 'next-auth/react';

export default function Providers({ children }) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}