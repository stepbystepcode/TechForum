import { Github, Twitter, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 glass-effect py-4 border-t border-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm text-muted-foreground">&copy; 2023 TechForum. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
            <Github size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
            <Twitter size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}
