'use client'
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Link from 'next/link'

export function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    // 请求后端 API 检查用户登录状态
    async function checkSession() {
      const res = await fetch('/api/session')
      const data = await res.json()
      setIsLoggedIn(data.isLoggedIn)
    }

    checkSession()
  }, [])

  const handleLogout = () => {
    // 清除 cookie 或者调用后端登出接口
    document.cookie = "session=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;"
    setIsLoggedIn(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect py-4 border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          TechForum
        </Link>
        <nav>
          <div className="space-x-2">
            {isLoggedIn ? (
              <Button variant="outline" onClick={handleLogout}>Logout</Button>
            ) : (
              <>
                <Link href="/login" passHref>
                  <Button variant="outline">Log in</Button>
                </Link>
                <Link href="/register" passHref>
                  <Button variant="outline">Sign up</Button>
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}
