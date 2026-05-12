import ApiFlows from "./components/ApiFlows"
import Features from "./components/Features"
import Hero from "./components/Hero"
import TechStack from "./components/TechStack"
import SmallScreen from "./components/SmallScreen"

function App() {
  return (
    <div className="bg-background text-foreground">
      <div className="block lg:hidden">
        <SmallScreen />
      </div>
      <div className="hidden lg:block">
        <Hero />
        <TechStack />
        <Features />
        <ApiFlows />
      </div>
    </div>
  )
}

export default App
