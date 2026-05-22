import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/ui/Footer'

export default function Home() {
  return (
    <>
      {/* Each section has its own id so the sidebar nav can scroll to it */}
      <HeroSection />
      <hr className="section-divider" />
      <AboutSection />
      <hr className="section-divider" />
      <ProjectsSection />
      <hr className="section-divider" />
      <ContactSection />
      <Footer />
    </>
  )
}