import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RightSidebar() {
  const topContributors = [
    { name: 'Alice Johnson', posts: 120, avatar: '/avatars/alice.jpg' },
    { name: 'Bob Smith', posts: 98, avatar: '/avatars/bob.jpg' },
    { name: 'Charlie Brown', posts: 87, avatar: '/avatars/charlie.jpg' },
  ]

  return (
    <div className="space-y-6">
      <div className="bg-card p-4 rounded-lg shadow">
        <h2 className="font-semibold text-lg mb-3 text-primary">Top Contributors</h2>
        <ul className="space-y-3">
          {topContributors.map((contributor) => (
            <li key={contributor.name} className="flex items-center space-x-3">
              <Avatar>
                <AvatarImage src={contributor.avatar} alt={contributor.name} />
                <AvatarFallback>{contributor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{contributor.name}</p>
                <p className="text-sm text-muted-foreground">{contributor.posts} posts</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-card p-4 rounded-lg shadow">
        <h2 className="font-semibold text-lg mb-3 text-primary">Forum Stats</h2>
        <ul className="space-y-2">
          <li>Total Posts: 1,234</li>
          <li>Total Members: 5,678</li>
          <li>Online Now: 42</li>
        </ul>
      </div>
    </div>
  )
}

