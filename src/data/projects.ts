export type Project = {
  id: string
  images: string[]
  github: string | null
  live: string | null
  tags: string[]
  imageFit?: 'cover' | 'contain'
}

export const projects: Project[] = [
  {
    id: 'project-one',
    images: [
      '/projects/crypto/home.png',
      '/projects/crypto/chart.png',
      '/projects/crypto/analysis.png',
      '/projects/crypto/history.png',
      '/projects/crypto/login.png',
      '/projects/crypto/signup.png',
    ],
    github: 'https://github.com/muratdemrk/cryptocurrency-analyze',
    live: 'https://muratdemrk.github.io/cryptocurrency-analyze',
    tags: ['React', 'Vite', 'Tailwind CSS'],
  },
  {
    id: 'project-two',
    images: [
      '/projects/quotes/home.png',
      '/projects/quotes/drawer.png',
      '/projects/quotes/favorites.png',
      '/projects/quotes/settings-light.png',
      '/projects/quotes/settings-dark.png',
      '/projects/quotes/time-picker.png',
    ],
    github: 'https://github.com/muratdemrk/QuoteApp',
    live: null,
    tags: ['Android', 'Java', 'Room'],
    imageFit: 'contain',
  },
  {
    id: 'project-three',
    images: [
      '/projects/qrmenu/01-menu.png',
      '/projects/qrmenu/02-categories.png',
      '/projects/qrmenu/03-qr.png',
      '/projects/qrmenu/04-yemekler.png',
      '/projects/qrmenu/05-yemekler-2.png',
      '/projects/qrmenu/06-sicak-icecekler.png',
      '/projects/qrmenu/07-bitki-caylari.png',
      '/projects/qrmenu/08-mesrubatlar.png',
      '/projects/qrmenu/09-smoothieler.png',
      '/projects/qrmenu/10-iletisim.png',
    ],
    github: 'https://github.com/muratdemrk/qr-menu-web-app',
    live: 'https://muratdemrk.github.io/qr-menu-web-app',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 'project-four',
    images: [
      '/projects/blackjack/home.png',
      '/projects/blackjack/game.png',
      '/projects/blackjack/howtoplay.png',
      '/projects/blackjack/scores.png',
    ],
    github: 'https://github.com/muratdemrk/blackjack-web-app',
    live: 'https://muratdemrk.github.io/blackjack-web-app',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 'project-five',
    images: [
      '/projects/supermarket/01-login.png',
      '/projects/supermarket/02-dashboard.png',
      '/projects/supermarket/03-hizli-satis.png',
      '/projects/supermarket/04-satislar.png',
      '/projects/supermarket/05-stok.png',
      '/projects/supermarket/06-urunler.png',
      '/projects/supermarket/07-kategoriler.png',
      '/projects/supermarket/08-subeler.png',
      '/projects/supermarket/09-calisanlar.png',
      '/projects/supermarket/10-raporlar.png',
      '/projects/supermarket/11-analiz.png',
      '/projects/supermarket/12-analiz-kategori.png',
      '/projects/supermarket/13-analiz-urunler.png',
      '/projects/supermarket/14-analiz-karsilastirma.png',
    ],
    github: 'https://github.com/muratdemrk/supermarket-tracker',
    live: null,
    tags: ['React', 'Spring Boot', 'PostgreSQL'],
  },
  {
    id: 'project-six',
    images: [
      '/projects/mini-obs/01-login.png',
      '/projects/mini-obs/02-admin.png',
      '/projects/mini-obs/03-admin-listeler.png',
      '/projects/mini-obs/04-not-listesi.png',
      '/projects/mini-obs/05-ogrenci-paneli.png',
    ],
    github: 'https://github.com/muratdemrk/mini-obs',
    live: null,
    tags: ['React', 'Express', 'SQLite'],
  },
]
