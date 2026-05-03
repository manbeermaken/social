import ApiFlows from "./components/ApiFlows"
import Features from "./components/Features"
import Hero from "./components/Hero"
import TechStack from "./components/TechStack"

function App() {
  return (
    <div className="bg-[hsl(0,0%,9%)] text-white">
      <Hero />
      <TechStack />
      <Features />
      <ApiFlows />
    </div>
  )
}

export default App
