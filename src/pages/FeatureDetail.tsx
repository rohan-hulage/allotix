import { useParams, useNavigate } from "react-router-dom"
import { FEATURES } from "@/lib/constants"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { ArrowLeft } from "lucide-react"

export default function FeatureDetail() {
    const { slug } = useParams()
    const navigate = useNavigate()

    const feature = FEATURES.find(f => f.slug === slug)

    if (!feature) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12">
                <h1 className="text-2xl font-bold mb-4">Feature not found</h1>
                <Button onClick={() => navigate("/")} variant="outline">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                </Button>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-slate-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                {/* Header */}
                <div className="mb-8">
                    <Button
                        onClick={() => navigate("/")}
                        variant="ghost"
                        className="mb-4 pl-0 hover:bg-transparent hover:text-primary"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                    </Button>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 rounded-xl bg-violet-100">
                            <feature.icon className="h-8 w-8 text-violet-600" />
                        </div>
                        <Badge variant="secondary" className="bg-violet-100 text-violet-800 hover:bg-violet-100">
                            {feature.tag}
                        </Badge>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
                        {feature.title}
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl">
                        {feature.desc}
                    </p>
                </div>

                {/* Diagonal Section Divider */}
                <div className="w-full h-px bg-slate-200 my-12" />

                {/* Feature Details - Zigzag Layout */}
                <div className="space-y-24">
                    {feature.details.map((detail, index) => (
                        <div
                            key={index}
                            className={`flex flex-col gap-8 md:gap-16 items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                        >
                            {/* Text Content */}
                            <div className="flex-1 space-y-4">
                                <h2 className="text-3xl font-bold text-gray-900">
                                    {detail.title}
                                </h2>
                                <div className="h-1 w-20 bg-violet-600 rounded-full" />
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    {detail.description}
                                </p>
                            </div>

                            {/* Image Content */}
                            <div className="flex-1 w-full">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white">
                                    <div className="absolute inset-0 bg-violet-600/5 hover:bg-transparent transition-colors duration-300" />
                                    <img
                                        src={detail.image}
                                        alt={detail.title}
                                        className="w-full aspect-video object-cover"
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
