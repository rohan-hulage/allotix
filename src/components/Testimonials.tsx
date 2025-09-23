const TESTIMONIALS = [
  {
    quote: "Allotix reduced our allocation time from days to minutes, and the CGPA-first logic made results easy to justify.",
    name: "Dr. Sarah Chen",
    role: "Dean of Academics",
    institution: "Tech University"
  },
  {
    quote: "Submitting preferences was simple, and the published results matched our expectations.",
    name: "Alex Kumar",
    role: "Final-year Student",
    institution: "Engineering College"
  },
  {
    quote: "A transparent, repeatable process. Faculty could audit decisions and export reports instantly.",
    name: "Prof. Michael Rodriguez",
    role: "Allocation Committee Head",
    institution: "State University"
  }
]

export function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl animate-fade-up">Trusted by campuses</h2>
        <p className="mt-3 text-muted-foreground animate-fade-up" style={{animationDelay:'80ms'}}>What administrators and students say about Allotix.</p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <blockquote key={t.name} className="border-violet-200 relative rounded-xl border bg-white/80 p-6 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-2 hover:shadow-md animate-fade-up" style={{animationDelay:`${i*120}ms`}}>
            <svg aria-hidden="true" className="absolute -top-2 -left-2 h-8 w-8 text-violet-600/60" viewBox="0 0 24 24" fill="none">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" fill="currentColor"/>
            </svg>
            <p className="text-balance text-sm leading-relaxed">{t.quote}</p>
            <footer className="mt-4 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-violet-100 flex items-center justify-center">
                <span className="text-sm font-medium text-violet-700">{t.name.split(' ').map(n => n[0]).join('')}</span>
              </div>
              <div>
                <div className="text-sm font-medium">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
                <div className="text-xs text-violet-600">{t.institution}</div>
              </div>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}