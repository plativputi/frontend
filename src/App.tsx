import { useEffect, useRef, useState } from 'react'
import './App.css'
import './components/Logo.css'
import './components/Header.css'
import './components/Hero.css'
import './components/Problem.css'
import './components/HowItWorks.css'
import './components/Features.css'
import './components/Roadmap.css'
import './components/About.css'
import './components/Faq.css'
import './components/Footer.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Problem } from './components/Problem'
import { HowItWorks } from './components/HowItWorks'
import { Features } from './components/Features'
import { Roadmap } from './components/Roadmap'
import { About } from './components/About'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const appRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={appRef} className="app">
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      <Header />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <Roadmap />
        <About />
        <Faq />
      </main>
      <Footer />
    </div>
  )
}
