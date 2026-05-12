import gsap from 'gsap'
import { useGSAP } from "@gsap/react"
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

const Navbar = () => {
    const { contextSafe } = useGSAP()

    const handleNavClick = contextSafe((e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault() 
        
        const targetId = e.currentTarget.getAttribute("href")

        if (targetId) {
            gsap.to(window, { 
                duration: 1,
                scrollTo: { y: targetId }, 
                ease: "power3.inOut" 
            })
        }
    })

    return (
        <nav className="w-[60%] self-center relative">
            <ul className="flex justify-between text-xl font-semibold">
                <li className="mt-5">
                    <a onClick={handleNavClick} href="#tech-stack" className="relative group">
                        <span className='inline-block group-hover:scale-105 transition-transform duration-300 ease-out'>
                            TECH STACK
                        </span>
                        <span className="h-1 rounded-xl bg-primary w-full absolute -bottom-1.5 left-0 scale-x-0 
                        group-hover:scale-x-105 origin-center transition-transform duration-300 ease-out"></span>
                    </a>
                </li>
                <li className="mt-5">
                    <a onClick={handleNavClick} href="#features" className="relative group">
                        <span className='inline-block group-hover:scale-105 transition-transform duration-300 ease-out'>
                            FEATURES
                        </span>
                        <span className="h-1 rounded-xl bg-primary w-full absolute -bottom-1.5 left-0 scale-x-0 
                        group-hover:scale-x-105 origin-center transition-transform duration-300 ease-out"></span>
                    </a>
                </li>
                <li className="mt-5">
                    <a onClick={handleNavClick} href="#api-flows" className="relative group">
                        <span className='inline-block group-hover:scale-105 transition-transform duration-300 ease-out'>
                            API FLOWS
                        </span>
                        <span className="h-1 rounded-xl bg-primary w-full absolute -bottom-1.5 left-0 scale-x-0 
                        group-hover:scale-x-105 origin-center transition-transform duration-300 ease-out"></span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar