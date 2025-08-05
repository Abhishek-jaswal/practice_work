import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";

// Dummy user
const dummyUser = {
  id: "1",
  email: "admin@example.com",
  password: "admin123",
};

export async function POST(req) {
  const { email, password } = await req.json();

  if (email !== dummyUser.email || password !== dummyUser.password) {
    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
  }

  const token = jwt.sign(
    { userId: dummyUser.id, email: dummyUser.email },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  return NextResponse.json({ token });
}
