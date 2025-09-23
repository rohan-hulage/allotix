import { CalendarClock, Database, ListChecks, Settings, CheckCircle2 } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { MagicBento } from "@/components/ui/MagicBento"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"


const STEPS = [
  {
    icon: CalendarClock,
    title: "Create event",
    desc: "Admin sets subjects, capacities, timeline, and CGPA ranking policy.",
  },
  {
    icon: Database,
    title: "Seed student data",
    desc: "Import student list with CGPA and institute email identifiers.",
  },
  {
    icon: ListChecks,
    title: "Students submit preferences",
    desc: "Authenticated students rank subjects in order of priority.",
  },
  {
    icon: Settings,
    title: "Run allocation",
    desc: "System assigns seats by descending CGPA and preference order.",
  },
  {
    icon: CheckCircle2,
    title: "Review & publish",
    desc: "Admins verify results, export reports, and notify students.",
  },
]

export function HowItWorks() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="how" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl animate-fade-up">How it works</h2>
        <p className="mt-3 text-muted-foreground animate-fade-up" style={{animationDelay:'80ms'}}>From setup to results in a few clear steps.</p>
      </div>

      {/* Sequential reveal cards (no numbering) */}
      <div className="mt-10 grid gap-5 items-stretch sm:grid-cols-2 lg:grid-cols-5">
        {STEPS.map((s) => (
          <MagicBento 
            key={s.title} 
            glowColor="132, 0, 255"
            className="cursor-pointer"
          >
          <Card className={` h-60 border border-gray-200/50 bg-white/80 backdrop-blur-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-white/90 group-hover:border-transparent ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <CardHeader className="pb-6">
                <div className="flex items-center justify-center">
                <div className="p-2 rounded-lg bg-violet-100 group-hover:bg-violet-200 transition-colors duration-300">
                  <s.icon className="h-7 w-7 text-violet-700" />
                </div>
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-gray-800 transition-colors duration-300 mb-2">
                  {s.title}
                </CardTitle>
                <CardDescription className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed mb-4">
                  {s.desc}
                </CardDescription>
                <div className="h-1 w-0 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full transition-all duration-500 group-hover:w-full" />
              
          </CardHeader>
          </Card>
          </MagicBento>

        ))}
      </div>
    </section>
  )
}