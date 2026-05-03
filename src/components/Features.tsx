import { CpuChipIcon, DevicePhoneMobileIcon, LockClosedIcon, ServerStackIcon, SparklesIcon } from "@heroicons/react/24/solid"
import EventDrivenSync from "./EventDrivenSync"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from 'react'
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger)

const Features = () => {
  const gridRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    let eventDrivenSync = gsap.timeline({ defaults: { ease: "power2.inOut" }, repeat: -1 });

    eventDrivenSync
      .from("#blob", {
        duration: 1,
        scale: 0,
        transformOrigin: "center",
        filter: "drop-shadow(0px 0px 8px #D82C20)",
        ease: "sine.inOut",
      })
      .to("#spring", { filter: "drop-shadow(0px 0px 5px rgba(0, 255, 255, 0.9))", duration: 1, ease: "sine.inOut", repeat: 1, yoyo: true })
      .from("#spring-to-postgres-arrow-stem", { duration: 0.5, drawSVG: 0 })
      .from(".spring-to-postgres-arrow-wings", { duration: 0.5, drawSVG: 0 })
      .to("#postgresql", { filter: "drop-shadow(0px 0px 5px rgba(0, 255, 255, 0.9))", duration: 1, ease: "sine.inOut", repeat: 1, yoyo: true })
      .from("#spring-to-redis circle", { duration: 1, drawSVG: 0, stagger: 0.5 })
      .to("#redis", { filter: "drop-shadow(0px 0px 5px rgba(0, 255, 255, 0.9))", duration: 1, ease: "sine.inOut", repeat: 1, yoyo: true })
      .to("#python", { filter: "drop-shadow(0px 0px 5px rgba(0, 255, 255, 0.9))", duration: 1, ease: "sine.inOut", repeat: 1, yoyo: true })
      .from("#redis-to-python circle", { duration: 1, drawSVG: 0, stagger: 0.5 })
      .from("#python-to-mongodb-arrow-stem", { duration: 0.5, drawSVG: 0 })
      .from(".python-to-mongodb-arrow-wings", { duration: 0.5, drawSVG: 0 })
      .to("#mongodb", { filter: "drop-shadow(0px 0px 5px rgba(0, 255, 255, 0.9))", duration: 1, ease: "sine.inOut", repeat: 1, yoyo: true })
  }, { scope: gridRef })

  return (
    <div className="max-w-7xl mx-auto min-h-screen flex justify-center items-center" id="features">
      <div ref={gridRef} className="w-full relative border-8 rounded-3xl border-[hsl(0,0%,19%)]">
        <div className="absolute bottom-full mb-5 text-5xl font-bold">
          Features
        </div>
        <div className="grid grid-cols-3 grid-rows-2 h-[80vh] p-4 gap-2">
          <div className="border-8 rounded-3xl border-[hsl(0,0%,19%)] flex flex-col items-center p-1">
            <div className="flex flex-col items-center justify-center flex-1">
              <LockClosedIcon className="h-16 drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]" />
            </div>
            <div className="w-3/4 flex-1 gap-2 flex flex-col">
              <h1 className="text-2xl font-bold self-center">
                Robust Authentication
              </h1>
              <p>JWT auth from scratch with
                Redis stored refresh tokens.</p>
            </div>
          </div>
          <div className="row-span-2 border-8 rounded-3xl border-[hsl(0,0%,19%)] flex flex-col">
            <div className="flex justify-center items-center flex-1">
              <EventDrivenSync />
            </div>
            <div className="flex-1 flex flex-col items-center p-1">
              <div className="flex flex-col items-center justify-center flex-1">
                <SparklesIcon className="h-16 drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]" />
              </div>
              <div className="w-3/4 flex-1 gap-2 flex flex-col">
                <h1 className="text-2xl font-bold self-center">
                  Event Driven Sync
                </h1>
                <p>Synchronized data across
                  PostgreSQL and MongoDB
                  using Redis Streams.</p>
              </div>
            </div>
          </div>
          <div className="border-8 rounded-3xl border-[hsl(0,0%,19%)] flex flex-col items-center p-1">
            <div className="flex flex-col items-center justify-center flex-1">
              <CpuChipIcon className="h-16" />
            </div>
            <div className="w-3/4 flex-1 gap-2 flex flex-col">
              <h1 className="text-2xl font-bold self-center">
                AI Content Moderation
              </h1>
              <p>Python FastAPI microservice
                using structured LLM prompts
                for post review.</p>
            </div>
          </div>
          <div className="border-8 rounded-3xl border-[hsl(0,0%,19%)] flex flex-col items-center p-1">
            <div className="flex flex-col items-center justify-center flex-1">
              <DevicePhoneMobileIcon className="h-16" />
            </div>
            <div className="w-3/4 flex-1 gap-2 flex flex-col">
              <h1 className="text-2xl font-bold self-center">
                Modern UI/UX
              </h1>
              <p>Non-blocking server actions
                with infinite feed scroll.</p>
            </div>
          </div>
          <div className="border-8 rounded-3xl border-[hsl(0,0%,19%)] flex flex-col items-center p-1">
            <div className="flex flex-col items-center justify-center flex-1">
              <ServerStackIcon className="h-16" />
            </div>
            <div className="w-3/4 flex-1 gap-2 flex flex-col">
              <h1 className="text-2xl font-bold self-center">
                Scalable Infrastructure
              </h1>
              <p>High availability: Next.js on
                Vercel, backend services
                on AWS EC2.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features