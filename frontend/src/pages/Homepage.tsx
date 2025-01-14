import { AppContext } from '../App.js'
import { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import ToggleTheme from '../components/ToggleTheme'

import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import EducationAndExperience from '../components/EducationAndExperience'
import Skills from '../components/Skills'

function Homepage() {
  const { switchTheme } = useContext(AppContext)
  const location = useLocation()

  useEffect(() => {
    window.HSStaticMethods.autoInit()
  }, [location.pathname])

  return (
    <div className="bg-zinc-100 dark:bg-black">
      <div className="xl:w-[1200px] md:mx-auto h-full border-x border-zinc-100 dark:border-dark-blue bg-white dark:bg-dark-blue">
        <ToggleTheme switchTheme={switchTheme} />

        <Hero />
        <Projects />
        <EducationAndExperience />
        <Skills />
        <Contact />

        <hr className="mt-12 border border-zinc-300 dark:border-zinc-800" />
        <Footer />
      </div>
    </div>
  )
}

export default Homepage
