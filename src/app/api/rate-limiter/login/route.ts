import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const { username, password } = await request.json();
  console.log({ username, password });
  return Response.json({ success: true, message: 'login success' });
}
