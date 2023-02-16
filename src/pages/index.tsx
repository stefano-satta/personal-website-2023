import FirstHero from '@/components/feature/section-home/FirstHero'
import SideProjects from '@/components/feature/section-home/SideProjects'
import About from "@/components/feature/section-home/About";
import Contact from "@/components/feature/section-home/Contact";
import SlidingWorking from "@/components/feature/section-home/SlidingWorking";

export default function Home() {
  return (
    <>
      <FirstHero/>
      <About/>
      <SideProjects/>
      <SlidingWorking/>
      <Contact/>
    </>
  )
}
