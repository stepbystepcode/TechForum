import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// This would usually come from a database
const posts = [
  { id: 1, title: 'The Future of AI in Web Development', content: 'Artificial Intelligence is revolutionizing the way we build and interact with websites...', author: 'John Doe', avatar: '/avatars/john.jpg', date: '2023-06-01', tags: ['Technology', 'AI'], comments: 15, likes: 42 },
  { id: 2, title: 'Best Practices for React Performance Optimization', content: 'Optimizing React applications is crucial for providing a smooth user experience...', author: 'Jane Smith', avatar: '/avatars/jane.jpg', date: '2023-06-02', tags: ['React', 'Performance'], comments: 8, likes: 37 },
  { id: 3, title: 'Introduction to GraphQL: A New API Paradigm', content: 'GraphQL is changing the way we think about API design and data fetching...', author: 'Alice Johnson', avatar: '/avatars/alice.jpg', date: '2023-06-03', tags: ['GraphQL', 'API'], comments: 12, likes: 28 },
]

export default function Home() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-primary">Latest Posts</h1>
        <Link href="/posts/new" passHref>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Create New Post</Button>
        </Link>
      </div>
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <div className="post-card-header">
              <h2 className="text-xl font-semibold mb-2">
                <Link href={`/posts/${post.id}`} className="text-primary hover:underline">
                  {post.title}
                </Link>
              </h2>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Avatar className="w-6 h-6">
                  <AvatarImage src={post.avatar} alt={post.author} />
                  <AvatarFallback>{post.author[0]}</AvatarFallback>
                </Avatar>
                <span>{post.author}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
            </div>
            <div className="post-card-body">
              <p className="text-muted-foreground mb-2">{post.content.substring(0, 150)}...</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="post-card-footer">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-muted-foreground">{post.comments} comments</span>
                <span className="text-sm text-muted-foreground">{post.likes} likes</span>
              </div>
              <Link href={`/posts/${post.id}`} passHref>
                <Button variant="link" className="text-primary">Read more</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
