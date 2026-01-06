import { ShieldCheck, Users, ListChecks, CalendarClock, Mail, BarChart3, type LucideIcon } from "lucide-react"

export interface Feature {
    icon: LucideIcon
    title: string
    desc: string // Short description for cards
    longDescription: string // Detail description for Features page
    tag: string
    slug: string
    image: string
}

export const FEATURES: Feature[] = [
    {
        icon: ShieldCheck,
        title: "Fair allocation",
        desc: "CGPA-based ranking ensures transparent, merit-driven seat distribution.",
        longDescription: "Our core allocation engine uses a proven CGPA-ranking system to ensure that seats are distributed purely on merit. By automatically sorting students based on their academic performance, we eliminate bias and ensure every student gets the best possible seat available to them. Every step of the allocation process is auditable.",
        tag: "Core",
        slug: "fair-allocation",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1000"
    },
    {
        icon: Users,
        title: "Admin & student roles",
        desc: "Admins seed student data; students sign in and set preferences.",
        longDescription: "Admins have full control over the allocation event, from importing student data to monitoring participation. Students get a clean, mobile-friendly interface to view available subjects, set their preferences, and check their allocation status without requiring complex training.",
        tag: "Access",
        slug: "admin-student-roles",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
    },
    {
        icon: ListChecks,
        title: "Preference submission",
        desc: "Students submit ordered choices for subjects or electives.",
        longDescription: "Students can easily prioritize their choices using a simple drag-and-drop interface. The system validates submissions in real-time to ensure students select the required minimum number of choices and don't duplicate preferences.",
        tag: "Workflow",
        slug: "preference-submission",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000"
    },
    {
        icon: CalendarClock,
        title: "Multiple events",
        desc: "Organize separate allocation rounds across departments or semesters.",
        longDescription: "Run concurrent allocation events for different departments without any data overlap. Easily archive past events and start fresh for new semesters, keeping your workspace organized and focused on current requirements.",
        tag: "Events",
        slug: "multiple-events",
        image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=1000"
    },
    {
        icon: Mail,
        title: "Institute email login",
        desc: "Restrict access to official domains for secure participation.",
        longDescription: "Secure your allocation process by restricting access to only organization-issued email addresses. Works seamlessly with your existing Google Workspace or Microsoft 365 educational accounts.",
        tag: "Auth",
        slug: "institute-email-login",
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=1000"
    },
    {
        icon: BarChart3,
        title: "Reports & export",
        desc: "Download results and audit trails for compliance and review.",
        longDescription: "Export the final allocation list to CSV or Excel with a single click. Gain insights into student preferences and demand patterns with visual reports that help departments plan future capacity.",
        tag: "Data",
        slug: "reports-and-export",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
    }
]
