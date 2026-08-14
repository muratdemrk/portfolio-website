import type { Messages } from './types'

export const en: Messages = {
  greeting: 'Hi, I’m',
  role: 'Computer Engineer',
  about:
    'I build reliable web products with a focus on clear interfaces and solid engineering. I enjoy turning complex problems into calm, well-crafted software — from architecture to the last hover state.',
  projectsTitle: 'Projects',
  githubLabel: 'View on GitHub',
  githubUnavailable: 'Not published on GitHub yet',
  footer: 'Designed & built by Murat',
  langLabel: 'Language',
  navLabel: 'Page sections',
  navProjects: 'Projects',
  liveLabel: 'Open live site',
  prevImage: 'Previous screenshot',
  nextImage: 'Next screenshot',
  closeImage: 'Close',
  projects: {
    'project-one': {
      title: 'Crypto Analysis Panel',
      description:
        'A web app for tracking live crypto prices in USDT and TRY, running technical analysis, and surfacing BUY / SELL signals with analysis history.',
    },
    'project-two': {
      title: 'Quote App',
      description:
        'An Android quotes app that fetches random quotes, categorizes them with Gemini, saves favorites in Room, and sends daily notifications with WorkManager.',
    },
    'project-three': {
      title: 'QR Menu',
      description:
        'A QR-code café menu for Konalga: guests scan a code and browse the digital menu in the browser.',
    },
    'project-four': {
      title: 'Blackjack',
      description:
        'A browser blackjack game with hit, stand, scoring, and a how-to-play flow — built in HTML, CSS, and JavaScript.',
    },
    'project-five': {
      title: 'Supermarket Tracker',
      description:
        'An admin dashboard for supermarket chains: branches, staff, products, sales, and daily/monthly reports — React, Spring Boot, and PostgreSQL.',
    },
  },
}
