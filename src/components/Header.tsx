import { motion } from 'framer-motion'
import { useLocale } from '../i18n/LocaleContext'
import type { Locale } from '../i18n/types'

const options: { id: Locale; label: string }[] = [
  { id: 'tr', label: 'TR' },
  { id: 'en', label: 'EN' },
  { id: 'de', label: 'DE' },
]

export function Header() {
  const { locale, setLocale, t } = useLocale()

  return (
    <header className="sticky top-0 z-50 rounded-t-[1.75rem] border-b border-white/5 bg-[#1a1722]/85 backdrop-blur-md sm:rounded-t-[2rem]">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-3 px-6">
        <a
          href="#sosyal"
          onClick={() => {
            window.dispatchEvent(new Event('focus-socials'))
          }}
          className="rounded-full border border-accent/70 px-4 py-1.5 text-sm font-medium tracking-wide text-accent shadow-[0_0_12px_rgba(200,245,66,0.18)] transition-colors hover:border-accent hover:shadow-[0_0_20px_rgba(200,245,66,0.35)]"
        >
          {t.navSocials}
        </a>
        <nav aria-label={t.langLabel} className="flex shrink-0 items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
          {options.map((option) => {
            const active = option.id === locale
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => setLocale(option.id)}
                className="relative rounded-full px-3 py-1.5 text-xs font-semibold tracking-wider text-zinc-300 transition-colors hover:text-accent"
                aria-pressed={active}
              >
                {active && (
                  <motion.span
                    layoutId="lang-pill"
                    className="absolute inset-0 rounded-full bg-accent/20"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{option.label}</span>
              </button>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
