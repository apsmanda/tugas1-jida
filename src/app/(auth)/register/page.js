'use client';

import Link from 'next/link';
import { FiUser, FiMail, FiLock, FiBriefcase } from 'react-icons/fi';

export default function RegisterPage() {
  return (
    <div className="auth-card">
      <div className="header">
        <h1 className="auth-title">Buat Akun HRIS</h1>
        <p className="auth-subtitle">Isi data di bawah untuk memulai</p>
      </div>

      <form className="auth-form">
        <div className="form-group">
          <FiUser className="form-icon" />
          <input type="text" placeholder="Nama Lengkap" className="form-input" required />
        </div>
        <div className="form-group">
          <FiMail className="form-icon" />
          <input type="email" placeholder="Email Perusahaan" className="form-input" required />
        </div>
        <div className="form-group">
          <FiLock className="form-icon" />
          <input type="password" placeholder="Password" className="form-input" required />
        </div>
        <div className="form-group">
          <FiBriefcase className="form-icon" />
          <select className="form-input" required>
            <option value="Guest">Guest</option>
            <option value="Owner">Owner</option>
            <option value="HRManager">HR Manager</option>
            <option value="HRStaff">HR Staff</option>
            <option value="Admin">Admin (IT)</option>
          </select>
        </div>
        <button type="submit" className="btn btn-filled">Daftar</button>
      </form>

      <div className="auth-link-container">
        Sudah punya akun?{' '}
        <Link href="/login" className="auth-link">Login di sini</Link>
      </div>
    </div>
  );
}