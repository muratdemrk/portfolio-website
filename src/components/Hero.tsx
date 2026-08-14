import { motion, useReducedMotion } from 'framer-motion'
import { profile } from '../data/profile'
import { useLocale } from '../i18n/LocaleContext'
import { SocialLinks } from './SocialLinks'

export function Hero() {
  const { t } = useLocale()
  const reduce = useReducedMotion()

  const fade = reduce
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }

  return (
    <section className="flex min-h-svh flex-col justify-center px-6 pb-16 pt-24">
      <div className="mx-auto w-full max-w-5xl">
        <motion.p
          className="mb-4 font-mono text-sm tracking-widest text-teal-300"
          variants={fade}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.5 }}
        >
          {t.greeting}
        </motion.p>
        <motion.h1
          className="font-display text-5xl font-semibold tracking-tight text-slate-100 sm:text-7xl"
          variants={fade}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          {profile.name}.
        </motion.h1>
        <motion.h2
          className="mt-3 font-display text-2xl font-medium text-slate-400 sm:text-4xl"
          variants={fade}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.55, delay: 0.16 }}
        >
          {t.role}
        </motion.h2>
        <motion.p
          className="mt-8 max-w-xl text-lg leading-relaxed text-slate-400"
          variants={fade}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.55, delay: 0.24 }}
        >
          {t.about}
        </motion.p>
        <SocialLinks />
      </div>
    </section>
  )
}
