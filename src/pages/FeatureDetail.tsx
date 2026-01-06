import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { FEATURES } from "@/lib/constants"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
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
        <div className="min-h-screen bg-slate-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                {/* Header */}
                <div className="mb-16">
                    <Button
                        onClick={() => navigate("/")}
                        variant="ghost"
                        className="mb-8 pl-0 hover:bg-transparent hover:text-primary"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                    </Button>
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                            Platform Features
                        </h1>
                        <p className="text-xl text-gray-600">
                            Explore the capabilities that make Allotix the most transparent and efficient allocation system.
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
