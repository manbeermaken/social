import { Cog8ToothIcon } from "@heroicons/react/24/solid"

const ApiFlows = () => {
  return (
    <div className="max-w-7xl mx-auto min-h-screen flex justify-center items-center" id="api-flows">
      <div className="w-full relative border-8 rounded-3xl border-[hsl(0,0%,19%)]">
        <div className="absolute bottom-full mb-5 text-5xl font-bold">
          API Flows
        </div>
        <div className="h-[80vh] flex justify-center items-center">
          <div className="relative">
            <Cog8ToothIcon className="h-16 animate-spin" />
            <Cog8ToothIcon className="absolute top-[98%] h-8 animate-spin" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApiFlows