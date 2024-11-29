import Link from 'next/link'
import { Button } from "@/components/ui/button"

export function LeftSidebar() {
  const tags = ['Technology', 'Science', 'Politics', 'Sports', 'Entertainment', 'Health']

  return (
    <div className="space-y-6">
      <div className="bg-card p-4 rounded-lg shadow">
        <h2 className="font-semibold text-lg mb-3 text-primary">Popular Tags</h2>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link key={tag} href={`/posts?tag=${tag.toLowerCase()}`} passHref>
              <Button variant="outline" size="sm" className="text-xs">
                {tag}
              </Button>
            </Link>
          ))}
        </div>
      </div>
      <div className="bg-card p-4 rounded-lg shadow">
        <h2 className="font-semibold text-lg mb-3 text-primary">Quick Links</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/posts" className="text-primary hover:underline">All Posts</Link>
          </li>
          <li>
            <Link href="/posts/new" className="text-primary hover:underline">Create Post</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

