import { Button } from "@/components/ui/Button"
import { useNavigate } from 'react-router-dom'

export function Hero() {
  const navigate = useNavigate()
  return (
    <section className="relative w-full overflow-hidden">
      <div
        className="absolute left-0 right-0 top-0 bottom-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px),
            radial-gradient(circle 640px at 0% 200px, rgba(167,139,250,0.45), transparent 60%),
            radial-gradient(circle 640px at 100% 200px, rgba(167,139,250,0.35), transparent 60%),
            radial-gradient(circle 720px at 50% -80px, rgba(124,58,237,0.35), transparent 60%),
            radial-gradient(circle 720px at 50% 100%, rgba(124,58,237,0.30), transparent 60%),
            linear-gradient(to bottom, transparent 0%, transparent 80%, rgba(255,255,255,0.3) 95%, rgba(255,255,255,0.6) 100%)
          `,
          backgroundSize: `
            96px 64px,
            96px 64px,
            100% 100%,
            100% 100%,
            100% 100%,
            100% 100%,
            100% 100%
          `,
          filter: 'saturate(1.05)'
        }}
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:py-20 md:py-28 min-h-[calc(100vh-56px)] flex items-center">
        <div className="mx-auto max-w-3xl text-center">
          {/* SVG with built-in SMIL animations (float, tilt, pulse) */}
          <svg
            aria-hidden="true"
            className="mx-auto mb-6 h-16 w-16 text-violet-600/70 animate-fade-up"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >

            <path d="M2 9l10-4 10 4-10 4L2 9Z" fill="currentColor" opacity="0.3" />
            <path
              d="M6 11v5c3 2 6 3 6 3s3-1 6-3v-5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>

          <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl animate-fade-up">
            Allotix — Smart Subject Allocation for Colleges
          </h1>
          <div
            className="mt-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground animate-fade-up"
            style={{ animationDelay: "80ms" }}
          >
            Centralized, fair, CGPA-based subject allocation
          </div>
          <p
            className="mt-4 text-pretty text-muted-foreground text-base md:text-lg animate-fade-up"
            style={{ animationDelay: "140ms" }}
          >
            Create allocation events, collect student preferences, and finalize
            seats using transparent CGPA ranking. Admins seed data, students
            sign in with institute email.
          </p>
          <div
            className="mt-8 flex flex-col items-center justify-center gap-3 xs:flex-row sm:flex-row animate-fade-up"
            style={{ animationDelay: "220ms" }}
          >
            <Button
              className="w-full sm:w-auto bg-violet-600 text-white hover:bg-violet-700"
              onClick={() => navigate("/contact")}
            >
              Book a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
