import Link from 'next/link'
import { Button } from "@/components/ui/button"
// import { useSession, signOut } from "next-auth/react"

export function Header() {
  // const { data: session } = useSession()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect py-4 border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          TechForum
        </Link>
        <nav>
          {/* {session ? (
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">Welcome, {session.user?.name}</span>
              <Button variant="outline" onClick={() => signOut()}>Sign out</Button>
            </div>
          ) : ( */}
            <div className="space-x-2">
              <Link href="/login" passHref>
                <Button variant="outline">Log in</Button>
              </Link>
              <Link href="/register" passHref>
                <Button variant="outline">Sign up</Button>
              </Link>
            </div>
          {/* )} */}
        </nav>
      </div>
    </header>
  )
}

