import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { useGSAP } from "@gsap/react"
import { useRef } from 'react'
import Navbar from './Navbar'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

gsap.registerPlugin(useGSAP, SplitText, ScrollToPlugin)

const Hero = () => {
    const heroRef = useRef<HTMLDivElement>(null)
    const { contextSafe } = useGSAP()

    useGSAP(() => {
        let splitH = SplitText.create('#hero-heading', { type: "chars" })
        let splitP = SplitText.create('#hero-para', { type: "words" })
        let heroTl = gsap.timeline()
        heroTl.from(splitH.chars, { opacity: 0, stagger: 0.1, onComplete: () => splitH.revert() })
            .from(splitP.words, { y: 100, opacity: 0, stagger: 0.05, onComplete: () => splitP.revert() })
            .from('.hero-button-wrapper', { y: 100, opacity: 0, stagger: 0.1 })
            .fromTo('.scroll-arrow',
                { opacity: 0, y: -5 },
                {
                    opacity: 1,
                    y: 5,
                    duration: 0.8,
                    stagger: 0.2,
                    repeat: -1,
                    repeatDelay: 0.5,
                    yoyo: true,
                    ease: "power2.inOut"
                },
                "+=0.5"
            )
    }, { scope: heroRef })

    const handleArrowClick = contextSafe((e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()

        gsap.to(window, {
            duration: 1.5,
            scrollTo: { y: "#tech-stack" },
            ease: "power3.inOut"
        })
    })

    return (
        <div ref={heroRef} id='#hero' className='max-w-7xl mx-auto min-h-screen flex flex-col'>
            <Navbar />
            <div className='flex flex-col justify-center items-center flex-1'>
                <div className='flex flex-col gap-8'>
                    <h1 id='hero-heading' className='text-7xl font-bold'>Social</h1>
                    <p id='hero-para' className='text-xl'>A scalable, high-performance social feed featuring<br /> real-time AI content moderation, custom JWT,<br /> authentication, and seamless infinite scrolling.</p>
                    <div className='flex gap-4 text-2xl mx-2'>
                        <div className='hero-button-wrapper flex-1'>
                            <a className='block py-4 font-bold rounded-2xl text-center 
                            bg-[hsl(210,17%,98%)] text-black hover:bg-[hsl(210,17%,80%)] active:scale-95 transition-all duration-150 ease-out' 
                                href="https://social.manbeermaken.xyz" target='_blank'>Live Demo</a>
                        </div>
                        <div className='hero-button-wrapper flex-1'>
                            <a className='block py-4 font-bold rounded-2xl text-center 
                             bg-[hsl(210,17%,98%)] text-black hover:bg-[hsl(210,17%,80%)] active:scale-95 transition-all duration-150 ease-out' 
                                href="https://github.com/manbeermaken/social-spring" target='_blank'>Github</a>

                        </div>
                    </div>
                </div>
            </div>
            <div onClick={handleArrowClick} className='cursor-pointer w-fit mx-auto flex flex-col items-center -space-y-3'>
                <ChevronDownIcon className='scroll-arrow text-white h-6 opacity-0' />
                <ChevronDownIcon className='scroll-arrow text-white h-6 opacity-0' />
                {/* <ChevronDownIcon className='scroll-arrow text-white h-5 opacity-0' /> */}
            </div>
        </div>
    )
}

export default Hero