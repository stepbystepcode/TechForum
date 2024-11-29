import { notFound } from 'next/navigation'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

// This would usually come from a database
const posts = [
  { id: 1, title: 'First Post', content: 'This is the first post', author: 'John Doe', date: '2023-06-01' },
  { id: 2, title: 'Second Post', content: 'This is the second post', author: 'Jane Smith', date: '2023-06-02' },
]

export default function Post({ params }: { params: { id: string } }) {
  const post = posts.find(p => p.id === parseInt(params.id))

  if (!post) {
    notFound()
  }

  return (
    <div className="bg-card p-6 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4 text-primary">{post.title}</h1>
      <div className="flex justify-between text-sm text-muted-foreground mb-4">
        <span>By {post.author}</span>
        <span>{post.date}</span>
      </div>
      <p className="mb-6">{post.content}</p>
      <Link href="/posts" passHref>
        <Button variant="outline">Back to Posts</Button>
      </Link>
    </div>
  )
}
