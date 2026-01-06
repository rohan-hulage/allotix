import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Footer } from "@/components/Footer"
import { Navbar } from "@/components/Navbar"
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen relative flex flex-col bg-white overflow-hidden">
      {/* Background Gradient */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(to right, #fbfbfb 1px, transparent 1px),
            linear-gradient(to bottom, #fbfbfb 1px, transparent 1px),
            radial-gradient(circle 800px at 0% 0%, rgba(139, 92, 246, 0.15), transparent),
            radial-gradient(circle 800px at 100% 100%, rgba(139, 92, 246, 0.15), transparent)
          `,
          backgroundSize: '48px 48px, 48px 48px, 100% 100%, 100% 100%'
        }}
      />

      <Navbar />

      <main className="relative flex-grow pt-24 pb-16 px-4">
        <div className="mx-auto max-w-7xl w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

            {/* Left Column: Context */}
            <div className="space-y-12 animate-fade-up">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm font-medium text-violet-800">
                  <span className="flex h-2 w-2 rounded-full bg-violet-600 mr-2"></span>
                  Contact Support
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                  We’re here to <br className="hidden lg:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
                    help you scale.
                  </span>
                </h1>
                <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                  Have questions about our allocation algorithms or need a custom enterprise plan? Our team is ready to assist you.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-violet-100 text-violet-600">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email us</h3>
                    <p className="text-gray-600 text-sm mt-1">support@allotix.edu</p>
                    <p className="text-gray-600 text-sm">sales@allotix.edu</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-violet-100 text-violet-600">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Call us</h3>
                    <p className="text-gray-600 text-sm mt-1">+1 (555) 000-0000</p>
                    <p className="text-xs text-muted-foreground mt-1">Mon-Fri from 8am to 5pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-violet-100 text-violet-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Visit us</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      123 Innovation Drive<br />
                      Tech Park, CA 94000
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="animate-fade-up" style={{ animationDelay: "150ms" }}>
              <div className="relative bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-8 md:p-10 ring-1 ring-gray-900/5">
                <div className="absolute top-0 right-0 -mr-4 -mt-4 h-24 w-24 rounded-full bg-violet-600/10 blur-2xl"></div>

                <form className="space-y-6 relative">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">First Name</label>
                      <Input placeholder="John" className="h-11 bg-white/50 border-gray-200 focus:ring-violet-500 focus:border-violet-500 rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Last Name</label>
                      <Input placeholder="Doe" className="h-11 bg-white/50 border-gray-200 focus:ring-violet-500 focus:border-violet-500 rounded-xl" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email Address</label>
                    <Input type="email" placeholder="john@university.edu" className="h-11 bg-white/50 border-gray-200 focus:ring-violet-500 focus:border-violet-500 rounded-xl" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Topic</label>
                    <Select>
                      <SelectTrigger className="h-11 bg-white/50 border-gray-200 focus:ring-violet-500 focus:border-violet-500 rounded-xl">
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="demo">Request a Demo</SelectItem>
                        <SelectItem value="pricing">Pricing Inquiry</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Message</label>
                    <Textarea
                      placeholder="Tell us about your requirements..."
                      className="min-h-[160px] resize-none bg-white/50 border-gray-200 focus:ring-violet-500 focus:border-violet-500 rounded-xl p-4"
                    />
                  </div>

                  <Button className="w-full h-12 bg-violet-600 hover:bg-violet-700 text-white rounded-xl shadow-lg shadow-violet-600/20 text-base font-medium transition-all duration-300 hover:scale-[1.02]">
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
