import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Positioning from './components/Positioning'
import Experience from './components/Experience'
import Work from './components/Work'
import Skills from './components/Skills'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal')
    if (!nodes.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])
}

export default function App() {
  useReveal()

  return (
    <div className="page">
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Positioning />
        <Experience />
        <Work />
        <Skills />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
