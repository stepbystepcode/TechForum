import Link from 'next/link'
import { Button } from "@/components/ui/button"

export function Sidebar() {
  return (
    <div className="space-y-4">
      <div className="bg-card p-4 rounded-lg shadow">
        <h2 className="font-semibold text-lg mb-2">Quick Links</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/" className="text-primary hover:underline">Home</Link>
          </li>
          <li>
            <Link href="/posts" className="text-primary hover:underline">All Posts</Link>
          </li>
          <li>
            <Link href="/posts/new" className="text-primary hover:underline">Create Post</Link>
          </li>
        </ul>
      </div>
      <div className="bg-card p-4 rounded-lg shadow">
        <h2 className="font-semibold text-lg mb-2">About</h2>
        <p className="text-sm text-muted-foreground">Welcome to our community forum. Share your thoughts and connect with others!</p>
      </div>
    </div>
  )
}

