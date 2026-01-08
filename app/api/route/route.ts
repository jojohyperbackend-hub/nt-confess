import { NextRequest, NextResponse } from "next/server";

// Simpel memory storage sementara
const confesses: { [key: string]: any } = {};

// Fungsi generate kode unik
function generateCode(length = 6) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// --------------------
// POST → buat confess baru
// --------------------
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, message, emotion } = body;

    if (!name || !message || !emotion) {
      return NextResponse.json(
        { error: "Data tidak lengkap" },
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const code = generateCode();
    confesses[code] = {
      name,
      message,
      emotion,
      createdAt: new Date().toISOString(),
      read: false,
    };

    return NextResponse.json(
      { code },
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    return NextResponse.json(
      { error: "Terjadi kesalahan server" },
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

// --------------------
// GET → ambil confess berdasarkan code
// --------------------
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const code = searchParams.get("code");

    if (!code || !confesses[code]) {
      return NextResponse.json(
        { error: "Confess tidak ditemukan" },
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    return NextResponse.json(
      { confess: confesses[code] },
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    return NextResponse.json(
      { error: "Terjadi kesalahan server" },
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
