import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export function ScrollToHash() {
    const { hash, pathname } = useLocation()

    useEffect(() => {
        if (hash) {
            const id = hash.replace("#", "")
            const element = document.getElementById(id)

            if (element) {
                setTimeout(() => {
                    const navHeight = 56 // Navbar height (h-14)
                    const elementPosition = element.getBoundingClientRect().top
                    const offsetPosition = elementPosition + window.pageYOffset - navHeight

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    })
                }, 100)
            }
        } else if (pathname !== "/features") { // Don't scroll top on Features page (handled internally)
            window.scrollTo(0, 0)
        }
    }, [hash, pathname])

    return null
}
