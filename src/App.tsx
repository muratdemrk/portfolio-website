import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { SocialBar } from './components/SocialBar'

export default function App() {
  return (
    <div className="relative min-h-svh bg-[#1a1722] text-zinc-400">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-24 -top-32 h-[34rem] w-[34rem] rounded-full bg-[#4a3a68]/45 blur-[90px]" />
        <div className="absolute right-[-8rem] top-24 h-[28rem] w-[28rem] rounded-full bg-[#2a3148]/50 blur-[80px]" />
        <div className="absolute bottom-[-6rem] left-1/4 h-[26rem] w-[26rem] rounded-full bg-[#5c3d6e]/30 blur-[100px]" />
        <div className="absolute bottom-24 right-1/4 h-[18rem] w-[18rem] rounded-full bg-[#3d3a4a]/40 blur-[70px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_rgba(16,14,22,0.72)_80%)]" />
        <div
          className="absolute inset-0 opacity-[0.07] mix-blend-overlay"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E")',
          }}
        />
      </div>
      <Header />
      <main className="relative">
        <Hero />
        <Projects />
      </main>
      <footer id="sosyal" className="relative scroll-mt-24 border-t border-white/5 py-8">
        <SocialBar className="justify-center" />
      </footer>
    </div>
  )
}
