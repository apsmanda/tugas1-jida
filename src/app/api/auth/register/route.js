import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const data = await request.json();
    const { fullName, email, password, role } = data;

    // Validasi input
    if (!fullName || !email || !password || !role) {
      return NextResponse.json({ message: 'Semua kolom wajib diisi' }, { status: 400 });
    }

    // Cek apakah email sudah ada
    const existingUser = await prisma.user.findUnique({
      where: { email: email },
    });

    if (existingUser) {
      return NextResponse.json({ message: 'Email sudah terdaftar.' }, { status: 409 });
    }

    // Hash password sebelum disimpan
    const hashedPassword = await bcrypt.hash(password, 10);

    // Buat pengguna baru
    const newUser = await prisma.user.create({
      data: {
        fullName,
        email,
        password: hashedPassword,
        role,
      },
    });

    return NextResponse.json({ message: 'Pengguna berhasil terdaftar', user: newUser }, { status: 201 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Terjadi kesalahan pada server' }, { status: 500 });
  }
}