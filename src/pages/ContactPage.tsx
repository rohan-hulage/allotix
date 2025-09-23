import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Footer } from "@/components/Footer"  // Import your footer component

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <section className="relative w-full bg-white py-28 flex-grow">
        <div className="mx-auto max-w-6xl px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-semibold text-gray-900 animate-fade-up">
              Get in Touch
            </h1>
            <p className="mt-3 text-muted-foreground animate-fade-up" style={{ animationDelay: "80ms" }}>
              Fill out the form and we’ll respond as soon as possible.
            </p>
          </div>

          {/* Form Container */}
          <div
            className="bg-white border border-gray-200 rounded-2xl shadow-xl p-12 mx-auto max-w-4xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl animate-fade-up"
            style={{ animationDelay: "140ms", minHeight: "600px" }}
          >
            <form className="grid grid-cols-1 gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">Name</label>
                  <Input
                    placeholder="Your full name"
                    className="w-full border-gray-300 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">Email</label>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full border-gray-300 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">Service</label>
                <Select>
                  <SelectTrigger className="w-full border-gray-300 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="demo">Book a Demo</SelectItem>
                    <SelectItem value="support">Support</SelectItem>
                    <SelectItem value="partnership">Partnership</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">Message</label>
                <Textarea
                  placeholder="Describe your request..."
                  className="w-full h-64 border-gray-300 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition"
                />
              </div>

              <div className="flex justify-center mt-6">
                <Button className="bg-violet-600 text-white hover:bg-violet-700 w-full sm:w-auto px-10 py-3 rounded-lg shadow-md transition duration-300">
                  Connect with Us
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
