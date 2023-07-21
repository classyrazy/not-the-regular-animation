import { useEffect } from "react"
import Hero from "./components/Hero"
import MakeImpactSection from "./components/MakeImpactSection"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
  })
  return (
    <div className="relative">
      <div className="hero-container">
        <Hero />
        <MakeImpactSection />
      </div>
    </div>
  )
}

export default App
