import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'
import Experience from './components/Experience'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#020C1B]">
      <Header />
      <main className="pt-16">
        <Hero />
        <About/>
        <Experience/>
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

