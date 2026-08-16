import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { SocialBar } from './components/SocialBar'

export default function App() {
  return (
    <div className="page-shell min-h-svh px-3 py-3 sm:px-5 sm:py-5 lg:px-8 lg:py-8">
      <div className="content-box relative mx-auto max-w-6xl rounded-[1.75rem] bg-[#1a1722] text-zinc-400 sm:rounded-[2rem]">
        <Header />
        <main className="relative">
          <Hero />
          <Projects />
        </main>
        <footer id="sosyal" className="relative scroll-mt-24 overflow-visible border-t border-white/5 py-14">
          <SocialBar className="justify-center" />
        </footer>
      </div>
    </div>
  )
}
