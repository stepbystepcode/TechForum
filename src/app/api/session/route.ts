// app/api/session/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { decrypt } from '@/lib/session'  // 假设有解密函数来验证 session

export async function GET(req: NextRequest) {
  const sessionCookie = req.cookies.get('session')

  if (!sessionCookie) {
    return NextResponse.json({ isLoggedIn: false })
  }

  const payload = await decrypt(sessionCookie.value)

  if (!payload) {
    return NextResponse.json({ isLoggedIn: false })
  }

  return NextResponse.json({ isLoggedIn: true, userId: payload.userId })
}
