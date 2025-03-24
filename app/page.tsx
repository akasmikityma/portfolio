import Navbar from "./comps/navbar"
import Hero from "./comps/hero"
import About from "./comps/about"
import Projects from "./comps/projects"
import Contact from "./comps/contact"
import Footer from "./comps/footer"
import Skills from "./comps/Skills"
import BackgroundGrid from "./comps/background-grid"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <BackgroundGrid />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills/>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

