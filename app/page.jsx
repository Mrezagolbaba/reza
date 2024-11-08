'use client'

import { useState, useEffect } from 'react'
import BottomNavigation from "../app/components/BottomNavigation";
import SocialLinks from "../app//components/SocialLinks";
import ExperienceSection from "../app/components/Experience";
import ActivitySection from "../app/components/Activity";
import EducationSection from "../app/components/Education";
import AboutSection from "../app/components/About";


export default function Home() {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    console.log('activeSection', activeSection)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <main className="container mx-auto px-4 pt-24 pb-12">
        <AboutSection id="about" />
        <ExperienceSection id="experience" />

       <EducationSection id="education" />

       <ActivitySection id="activity" />

        <SocialLinks id="contact" />
      </main>

      <footer className="bg-muted py-4">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Mohamadreza Golbaba. All rights reserved.
        </div>
      </footer>
      <BottomNavigation
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

    </div>
  )
}
