import { Button } from "@/components/ui/Button"
import { Link, useLocation } from 'react-router-dom'

export function Navbar() {
  const location = useLocation()
  const isHome = location.pathname === "/"

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-violet-200 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <img src="/allotix-logo.svg" alt="Allotix" className="h-8 w-8" />
          <span className="text-lg font-semibold">Allotix</span>
        </Link>
        <nav className="flex items-center gap-3">
          <a
            href={isHome ? "#features" : "/#features"}
            className="text-sm text-muted-foreground hover:text-violet-700"
          >
            Features
          </a>
          <a
            href={isHome ? "#how" : "/#how"}
            className="text-sm text-muted-foreground hover:text-violet-700"
          >
            How it works
          </a>
          <a
            href={isHome ? "#testimonials" : "/#testimonials"}
            className="text-sm text-muted-foreground hover:text-violet-700"
          >
            Testimonials
          </a>
          <Link
            to="/contact"
            className="text-sm text-muted-foreground hover:text-violet-700"
          >
            Contact
          </Link>
          <Button variant="outline" className="h-8 px-3 border-violet-200 text-violet-700 hover:bg-violet-50">Sign in</Button>
        </nav>
      </div>
    </header>
  )
}


