import { motion, useReducedMotion } from 'framer-motion'
import { useLocale } from '../i18n/LocaleContext'
import { asset } from '../lib/asset'

export function Hero() {
  const { locale, t } = useLocale()
  const reduce = useReducedMotion()
  const words = t.greeting.split(' ')

  return (
    <section className="flex min-h-[calc(100svh-2.5rem)] flex-col justify-center px-6 pb-16 pt-10 sm:min-h-[calc(100svh-4rem)] lg:pt-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        <div className="w-full min-w-0 lg:flex-1">
          <h1 className="font-display text-5xl font-semibold tracking-wide text-zinc-100 sm:text-7xl">
            {words.map((word, index) => (
              <motion.span
                key={`${locale}-${word}-${index}`}
                className={`mr-[0.28em] inline-block ${/murat/i.test(word.replace(/[.,!'’]/g, '')) ? 'text-accent' : ''}`}
                initial={reduce ? false : { opacity: 0, y: 28, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.55, delay: reduce ? 0 : index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <motion.p
            key={`${locale}-about`}
            className="mt-6 max-w-2xl text-lg font-light leading-relaxed tracking-wide text-zinc-400 sm:text-xl"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: reduce ? 0 : 0.45 }}
          >
            {t.about}
          </motion.p>
          <motion.div
            key={`${locale}-cta`}
            className="mt-8 flex flex-wrap items-center gap-3"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: reduce ? 0 : 0.7 }}
          >
            <a
              href="mailto:demirkoparan.official@gmail.com"
              className="inline-flex items-center rounded-full border border-accent/50 px-6 py-3 text-sm font-medium tracking-wide text-accent transition-[transform,background-color] hover:scale-[1.03] hover:bg-accent/10"
            >
              {t.contactCta}
            </a>
            <a
              href="#projects"
              className="projects-cta relative inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-medium tracking-wide text-ink transition-transform hover:scale-[1.03]"
            >
              {t.projectsCta}
            </a>
          </motion.div>
        </div>

        <motion.div
          className="group relative shrink-0"
          initial={reduce ? false : { opacity: 0, scale: 0.88, filter: 'blur(12px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, delay: reduce ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-[-12%] rounded-full bg-accent/15 blur-3xl transition-all duration-500 group-hover:inset-[-18%] group-hover:bg-accent/35" />
          <div className="relative h-80 w-80 overflow-hidden rounded-full border-2 border-accent/45 shadow-[0_0_40px_rgba(200,245,66,0.18)] transition-[transform,box-shadow,border-color] duration-500 ease-out group-hover:scale-[1.05] group-hover:border-accent group-hover:shadow-[0_0_56px_rgba(200,245,66,0.45)] sm:h-[26rem] sm:w-[26rem] lg:h-[32rem] lg:w-[32rem]">
            <img
              src={asset('portrait.png')}
              alt="Murat"
              className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
