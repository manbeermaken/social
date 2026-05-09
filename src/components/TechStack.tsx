import { backendIcons, frontendIcons } from "./Icons"
import { useState } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const TechStack = () => {
  const [isBackend, setIsBackend] = useState(true)
  const gridRef = useRef<HTMLDivElement>(null)

  const displayedIcons = isBackend ? backendIcons : frontendIcons

  useGSAP(() => {
    // gsap.from('svg', { opacity: 0, scale: 0.8, stagger: 0.1, duration: 0.5, ease: "power2.out" })
    // react will swap out the icons in the dom first, 
    // and then this animation will run on the newly rendered svgs 
    gsap.from('svg', {
      scrollTrigger: {
        trigger: gridRef.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none play reset",
        fastScrollEnd: true
      },
      opacity: 0,
      scale: 0.5,
      duration: 0.5,
      ease: "back.out(1.7)", // Adds a nice little bounce
      stagger: {
        grid: [3, 3],
        from: "center", // Animates from the middle outward
        amount: 0.3     // Total time the whole stagger takes
      }
    })
  }, { scope: gridRef, dependencies: [isBackend] })

  return (
    <div id="tech-stack" className="max-w-7xl mx-auto min-h-screen flex justify-center items-center">
      <div className="flex flex-col w-[90%]">
        <div className="-translate-y-10">
          <h1 className="text-5xl font-bold">Tech Stack</h1>
        </div>
        <div className="flex border-8 rounded-3xl border-[hsl(0,0%,19%)] p-8 flex-1">
          <div className="flex flex-col justify-center items-center gap-10 flex-1 md:min-h-[60vh]">
            <button onClick={() => setIsBackend(true)} disabled={isBackend}
              className={`text-5xl font-semibold rounded-xl px-10 py-2 cursor-pointer transition-transform duration-300 ease-out 
            disabled:bg-gray-800 disabled:cursor-auto ${!isBackend ? 'hover:scale-105' : ''}`}>Backend</button>
            <button onClick={() => setIsBackend(false)} disabled={!isBackend}
              className={`text-5xl font-semibold rounded-xl px-10 py-2 cursor-pointer transition-transform duration-300 ease-out
            disabled:bg-gray-800 disabled:cursor-auto ${isBackend ? 'hover:scale-105' : ''}`}>Frontend</button>
          </div>
          <div ref={gridRef} className="grid grid-cols-3 grid-rows-3 justify-items-center 
          items-center flex-1 border-8 rounded-3xl border-[hsl(0,0%,19%)] md:min-h-[60vh]">
            {
              displayedIcons.map((icon) => {
                const Icon = icon.Component
                return (
                  <div key={icon.id} className="relative group cursor-pointer h-16 w-16">
                    <Icon size="64" />
                    {/* <Icon size="64" className="transition-all duration-300 group-hover:drop-shadow-xl"/> */}
                    {/* <Icon
                      size={64}
                      className="text-gray-400 transition-all duration-300 group-hover:text-emerald-400 group-hover:drop-shadow-[0_0_12px_rgba(52,211,153,0.8)]"
                    /> */}
                    {/* whitespace-nowrap */}
                    <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2  
                    px-2 py-1 rounded-xl pointer-events-none bg-gray-500 opacity-0 group-hover:opacity-100">
                      {icon.name}
                    </span>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechStack