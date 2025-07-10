import './globals.css';

export const metadata = {
  title: 'Test - Solusi Digital',
  description: 'Membangun masa depan digital.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}