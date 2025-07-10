'use client';

import Link from 'next/link';
import { FiMail, FiLock } from 'react-icons/fi';

export default function LoginPage() {
  return (
    <div className="auth-card">
      <div className="header">
        <h1 className="auth-title">Selamat Datang!</h1>
        <p className="auth-subtitle">Login untuk masuk ke dasbor HRIS</p>
      </div>

      <form className="auth-form">
        <div className="form-group">
          <FiMail className="form-icon" />
          <input type="email" placeholder="Email" className="form-input" required />
        </div>
        <div className="form-group">
          <FiLock className="form-icon" />
          <input type="password" placeholder="Password" className="form-input" required />
        </div>
        <button type="submit" className="btn btn-filled">Login</button>
      </form>

      <div className="auth-link-container">
        Belum punya akun?{' '}
        <Link href="/register" className="auth-link">Daftar di sini</Link>
      </div>
    </div>
  );
}