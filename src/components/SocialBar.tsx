import { useEffect, useState, type ComponentType, type SVGProps } from 'react'
import { profile } from '../data/profile'

type IconProps = SVGProps<SVGSVGElement>

function GitHubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452z" />
    </svg>
  )
}

function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM17.5 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
    </svg>
  )
}

function XIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  )
}

function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

const linkClass =
  'flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent/70 text-zinc-300 shadow-[0_0_12px_rgba(200,245,66,0.18)] transition-[transform,box-shadow,border-color,color] duration-500 ease-out hover:border-accent hover:text-accent hover:shadow-[0_0_20px_rgba(200,245,66,0.35)] sm:h-11 sm:w-11'

const links: { href: string; label: string; icon: ComponentType<IconProps>; external?: boolean }[] = [
  { href: profile.socials.github, label: 'GitHub', icon: GitHubIcon, external: true },
  { href: profile.socials.linkedin, label: 'LinkedIn', icon: LinkedInIcon, external: true },
  { href: profile.socials.instagram, label: 'Instagram', icon: InstagramIcon, external: true },
  { href: profile.socials.x, label: 'Twitter', icon: XIcon, external: true },
  { href: `mailto:${profile.socials.email}`, label: 'Email', icon: MailIcon },
]

export function SocialBar({ className = '' }: { className?: string }) {
  const [pulse, setPulse] = useState(false)

  useEffect(() => {
    const onFocus = () => {
      window.setTimeout(() => {
        setPulse(true)
        window.setTimeout(() => setPulse(false), 1100)
      }, 380)
    }

    window.addEventListener('focus-socials', onFocus)
    return () => window.removeEventListener('focus-socials', onFocus)
  }, [])

  return (
    <div className={`flex items-center gap-2 sm:gap-4 ${className}`}>
      {links.map(({ href, label, icon: Icon, external }, index) => (
        <a
          key={label}
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noreferrer noopener' : undefined}
          aria-label={label}
          style={{ transitionDelay: pulse ? `${index * 70}ms` : '0ms' }}
          className={`${linkClass} ${
            pulse
              ? 'scale-125 border-accent text-accent shadow-[0_0_28px_rgba(200,245,66,0.5)]'
              : 'scale-100'
          }`}
        >
          <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
        </a>
      ))}
    </div>
  )
}
