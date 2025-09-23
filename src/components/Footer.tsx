export function Footer() {
    return (
      <footer className="bg-gray-50 border-t border-violet-200 mt-16">
        <div className="mx-auto max-w-6xl px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="flex flex-col gap-4 transform transition-transform duration-300 hover:-translate-y-2">
            <div className="flex items-center gap-2 font-semibold">
              <img src="/allotix-logo.svg" alt="Allotix" className="h-8 w-8" />
              <span className="text-lg font-semibold text-gray-900">Allotix</span>
            </div>
            <p className="text-muted-foreground">
              Smart subject allocation for colleges. Centralized, fair, CGPA-based.
            </p>
            <span className="text-violet-600 font-medium mt-2 cursor-pointer hover:underline">
              Speak to us →
            </span>
          </div>
  
          {/* About */}
          <div className="flex flex-col gap-2 transform transition-transform duration-300 hover:-translate-y-2">
            <h3 className="font-semibold text-sm text-muted-foreground uppercase">About</h3>
            <a href="#" className="text-sm text-gray-600 hover:text-violet-700">Work</a>
            <a href="#" className="text-sm text-gray-600 hover:text-violet-700">Careers</a>
            <a href="#" className="text-sm text-gray-600 hover:text-violet-700">Tech Stack</a>
            <a href="#" className="text-sm text-gray-600 hover:text-violet-700">Contact</a>
            <a href="#" className="text-sm text-gray-600 hover:text-violet-700">Blogs</a>
          </div>
  
          {/* Services */}
          <div className="flex flex-col gap-2 transform transition-transform duration-300 hover:-translate-y-2">
            <h3 className="font-semibold text-sm text-muted-foreground uppercase">Services</h3>
            <a href="#" className="text-sm text-gray-600 hover:text-violet-700">UI/UX Design</a>
            <a href="#" className="text-sm text-gray-600 hover:text-violet-700">Branding & Motion</a>
            <a href="#" className="text-sm text-gray-600 hover:text-violet-700">Web Development</a>
            <a href="#" className="text-sm text-gray-600 hover:text-violet-700">App Development</a>
          </div>
  
          {/* Social */}
          <div className="flex flex-col gap-2 transform transition-transform duration-300 hover:-translate-y-2">
            <h3 className="font-semibold text-sm text-muted-foreground uppercase">Social</h3>
            <div className="flex gap-4 mt-2">
              <a href="#" className="text-gray-500 hover:text-violet-600">Twitter</a>
              <a href="#" className="text-gray-500 hover:text-violet-600">Instagram</a>
              <a href="#" className="text-gray-500 hover:text-violet-600">LinkedIn</a>
            </div>
          </div>
        </div>
  
        {/* Bottom Note */}
        <div className="border-t border-violet-200 border-gray-200 mt-8 text-center py-4 text-xs text-gray-400">
          Made with <span className="text-red-500">❤</span> in India.
        </div>
      </footer>
    )
  }
  