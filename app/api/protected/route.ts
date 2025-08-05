import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  const token = authHeader?.split(" ")[1]; // "Bearer <token>"

  if (!token) {
    return NextResponse.json({ message: "Missing token" }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    return NextResponse.json({ message: "Welcome to your dashboard!", user: decoded });
  } catch (err) {
    return NextResponse.json({ message: "Invalid token" }, { status: 403 });
  }
}
