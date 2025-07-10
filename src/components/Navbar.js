import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container container">
        <div className="nav-brand">TestProduct</div>
        <div className="nav-links">
          <Link href="#">Beranda</Link>
          <Link href="#">Layanan</Link>
          <Link href="#">Tentang</Link>
          <Link href="#">Kontak</Link>
        </div>
        <Link href="/login" className="nav-button">Mulai Sekarang</Link>
      </div>
    </header>
  );
}