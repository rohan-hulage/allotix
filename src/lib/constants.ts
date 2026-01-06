import { ShieldCheck, Users, ListChecks, CalendarClock, Mail, BarChart3, type LucideIcon } from "lucide-react"

export interface FeatureDetail {
    title: string
    description: string
    image: string
}

export interface Feature {
    icon: LucideIcon
    title: string
    desc: string
    tag: string
    slug: string
    details: FeatureDetail[]
}

export const FEATURES: Feature[] = [
    {
        icon: ShieldCheck,
        title: "Fair allocation",
        desc: "CGPA-based ranking ensures transparent, merit-driven seat distribution.",
        tag: "Core",
        slug: "fair-allocation",
        details: [
            {
                title: "Merit-Based Algorithm",
                description: "Our core allocation engine uses a proven CGPA-ranking system to ensure that seats are distributed purely on merit. By automatically sorting students based on their academic performance, we eliminate bias and ensure every student gets the best possible seat available to them.",
                image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1000",
            },
            {
                title: "Transparent Process",
                description: "Every step of the allocation process is auditable. Students can see their rank, the availability of seats, and the final allocation logic. This transparency builds trust in the system and reduces administrative complaints.",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000",
            }
        ]
    },
    {
        icon: Users,
        title: "Admin & student roles",
        desc: "Admins seed student data; students sign in and set preferences.",
        tag: "Access",
        slug: "admin-student-roles",
        details: [
            {
                title: "Dedicated Admin Dashboard",
                description: "Admins have full control over the allocation event. From importing student data via CSV to defining seat matrices and monitoring participation, the admin dashboard is the command center for the entire process.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
            },
            {
                title: "Student Portal",
                description: "Students get a clean, mobile-friendly interface to view available subjects, set their preferences, and check their allocation status. The intuitive design ensures that no training is required for students to participate.",
                image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000",
            }
        ]
    },
    {
        icon: ListChecks,
        title: "Preference submission",
        desc: "Students submit ordered choices for subjects or electives.",
        tag: "Workflow",
        slug: "preference-submission",
        details: [
            {
                title: "Drag-and-Drop Ordering",
                description: "Students can easily prioritize their choices using a simple drag-and-drop interface. This ensures that their preferences are captured accurately, reflecting their true desire for specific subjects or electives.",
                image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000",
            },
            {
                title: "Real-time Validation",
                description: "The system validates submissions in real-time, ensuring that students select the required minimum number of choices and don't duplicate preferences. This prevents errors and ensures valid data for the allocation algorithm.",
                image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1000",
            }
        ]
    },
    {
        icon: CalendarClock,
        title: "Multiple events",
        desc: "Organize separate allocation rounds across departments or semesters.",
        tag: "Events",
        slug: "multiple-events",
        details: [
            {
                title: "Department Isolation",
                description: "Run concurrent allocation events for different departments without any data overlap. Whether it's Computer Science electives or Mechanical Engineering labs, Allotix keeps everything organized and separate.",
                image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=1000",
            },
            {
                title: "Semester Lifecycles",
                description: "Easily archive past events and start fresh for new semesters. Historical data is preserved for records, but doesn't clutter the active dashboard, keeping your workspace clean and focused.",
                image: "https://images.unsplash.com/photo-1435527173128-983b87201f4d?auto=format&fit=crop&q=80&w=1000",
            }
        ]
    },
    {
        icon: Mail,
        title: "Institute email login",
        desc: "Restrict access to official domains for secure participation.",
        tag: "Auth",
        slug: "institute-email-login",
        details: [
            {
                title: "Domain Whitelisting",
                description: "Secure your allocation process by restricting access to only organization-issued email addresses (e.g., @university.edu). This effectively prevents unauthorized external users from accessing the system.",
                image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=1000",
            },
            {
                title: "Seamless Integration",
                description: "Works with your existing Google Workspace or Microsoft 365 educational accounts. No new passwords for students to remember – just sign in with their standard institute credentials.",
                image: "https://images.unsplash.com/photo-1614064641938-3e858a9b1d9e?auto=format&fit=crop&q=80&w=1000",
            }
        ]
    },
    {
        icon: BarChart3,
        title: "Reports & export",
        desc: "Download results and audit trails for compliance and review.",
        tag: "Data",
        slug: "reports-and-export",
        details: [
            {
                title: "One-Click Export",
                description: "Export the final allocation list to CSV or Excel with a single click. The format is compatible with major learning management systems and ERPs for easy data import.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
            },
            {
                title: "Statistical Insights",
                description: "Gain insights into student preferences and demand patterns. Visual reports show which subjects are most popular, helping departments plan future capacity and staffing needs.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
            }
        ]
    }
]
