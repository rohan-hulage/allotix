import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { ShieldCheck, Users, ListChecks, CalendarClock, Mail, BarChart3 } from "lucide-react"
import { MagicBento } from "@/components/ui/MagicBento"

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Fair allocation",
    desc: "CGPA-based ranking ensures transparent, merit-driven seat distribution.",
    tag: "Core"
  },
  {
    icon: Users,
    title: "Admin & student roles",
    desc: "Admins seed student data; students sign in and set preferences.",
    tag: "Access"
  },
  {
    icon: ListChecks,
    title: "Preference submission",
    desc: "Students submit ordered choices for subjects or electives.",
    tag: "Workflow"
  },
  {
    icon: CalendarClock,
    title: "Multiple events",
    desc: "Organize separate allocation rounds across departments or semesters.",
    tag: "Events"
  },
  {
    icon: Mail,
    title: "Institute email login",
    desc: "Restrict access to official domains for secure participation.",
    tag: "Auth"
  },
  {
    icon: BarChart3,
    title: "Reports & export",
    desc: "Download results and audit trails for compliance and review.",
    tag: "Data"
  }
]

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl animate-fade-up">
          Why Allotix
        </h2>
        <p 
          className="mt-3 text-muted-foreground animate-fade-up" 
          style={{ animationDelay: "80ms" }}
        >
          Essential tools to run equitable, repeatable subject allocation events.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature) => (
          <MagicBento 
            key={feature.title} 
            glowColor="132, 0, 255"
            className="cursor-pointer"
          >
            <Card className="h-full border border-gray-200/50 bg-white/80 backdrop-blur-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-white/90 group-hover:border-transparent">
              <CardHeader className="pb-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-violet-100 group-hover:bg-violet-200 transition-colors duration-300">
                    <feature.icon className="h-5 w-5 text-violet-600 group-hover:text-violet-700 transition-colors duration-300" />
                  </div>
                  <Badge 
                    className="bg-violet-50/80 text-violet-800 border-violet-200/50 group-hover:bg-violet-100/80 group-hover:border-violet-300/50 transition-all duration-300" 
                    variant="secondary"
                  >
                    {feature.tag}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-gray-800 transition-colors duration-300 mb-2">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed mb-4">
                  {feature.desc}
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