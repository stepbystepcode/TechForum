import Link from 'next/link'
import { Button } from "@/components/ui/button"

// This would usually come from a database
const posts = [
  { id: 1, title: 'First Post', content: 'This is the first post', author: 'John Doe', date: '2023-06-01' },
  { id: 2, title: 'Second Post', content: 'This is the second post', author: 'Jane Smith', date: '2023-06-02' },
]

export default function Posts() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-primary">Posts</h1>
        <Link href="/posts/new" passHref>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Create New Post</Button>
        </Link>
      </div>
      <div className="space-y-6">
        {posts.map((post) => (
          <Link href={`/posts/${post.id}`} key={post.id} className="block">
            <div className="border rounded-lg p-6 floating-card bg-card">
              <h2 className="text-xl font-semibold mb-2 text-primary">{post.title}</h2>
              <p className="text-muted-foreground mb-2">{post.content.substring(0, 100)}...</p>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>By {post.author}</span>
                <span>{post.date}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
