import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { FEATURES } from "@/lib/constants"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { Navbar } from "@/components/Navbar"
import { ArrowLeft } from "lucide-react"

export default function FeaturesPage() {
    const { hash } = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (hash) {
            const id = hash.replace("#", "")
            const element = document.getElementById(id)
            if (element) {
                // Add a small delay to ensure rendering is complete
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth", block: "center" })
                }, 100)
            }
        } else {
            window.scrollTo(0, 0)
        }
    }, [hash])

    return (
        <div className="min-h-screen relative flex flex-col bg-white overflow-hidden">
            {/* Background for consistency */}
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    background: `
                    linear-gradient(to right, #fbfbfb 1px, transparent 1px),
                    linear-gradient(to bottom, #fbfbfb 1px, transparent 1px),
                    radial-gradient(circle 800px at 100% 0%, rgba(139, 92, 246, 0.1), transparent),
                    radial-gradient(circle 800px at 0% 100%, rgba(139, 92, 246, 0.1), transparent)
                `,
                    backgroundSize: '48px 48px, 48px 48px, 100% 100%, 100% 100%'
                }}
            />

            <Navbar />

            <div className="relative flex-grow mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
                {/* Header */}
                <div className="mb-24 text-center relative">
                    <Button
                        onClick={() => navigate("/")}
                        variant="ghost"
                        className="absolute left-0 top-0 -mt-16 md:-mt-0 hidden lg:flex hover:bg-transparent hover:text-violet-700 pl-0"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                    </Button>
                    <div className="lg:hidden mb-8 flex justify-start">
                        <Button
                            onClick={() => navigate("/")}
                            variant="ghost"
                            className="hover:bg-transparent hover:text-violet-700 pl-0"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                        </Button>
                    </div>

                    <Badge variant="secondary" className="mb-4 bg-violet-100 text-violet-700 hover:bg-violet-100 border-violet-200 px-4 py-1 text-sm">
                        Core Capabilities
                    </Badge>
                    <div className="max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 animate-fade-up">
                            Powerful tools for <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
                                fair allocation.
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 animate-fade-up" style={{ animationDelay: "100ms" }}>
                            Explore the comprehensive suite of features that makes Allotix the trusted choice for academic scheduling.
                        </p>
                    </div>
                </div>

                {/* Features List - Zigzag Layout */}
                <div className="space-y-32">
                    {FEATURES.map((feature, index) => (
                        <div
                            key={feature.slug}
                            id={feature.slug}
                            className={`flex flex-col gap-10 md:gap-20 items-center scroll-mt-24 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                        >
                            {/* Text Content */}
                            <div className="flex-1 space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 rounded-xl bg-violet-100">
                                        <feature.icon className="h-6 w-6 text-violet-600" />
                                    </div>
                                    <Badge variant="secondary" className="bg-violet-100 text-violet-800 hover:bg-violet-100">
                                        {feature.tag}
                                    </Badge>
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900">
                                    {feature.title}
                                </h2>
                                <div className="h-1.5 w-24 bg-violet-600 rounded-full" />
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    {feature.longDescription}
                                </p>
                            </div>

                            {/* Image Content */}
                            <div className="flex-1 w-full">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white group">
                                    <div className="absolute inset-0 bg-violet-600/0 group-hover:bg-violet-600/5 transition-colors duration-500" />
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-full aspect-[4/3] object-cover transform transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
