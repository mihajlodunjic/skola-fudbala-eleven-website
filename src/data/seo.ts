export const seo = {
  home: {
    path: "/",
    title: "Škola fudbala ELEVEN | Novi Beograd",
    description:
      "Škola fudbala za dečake i devojčice mlađeg uzrasta na Tošinom bunaru 161. Fudbalske osnove, igra, motorika i timski rad."
  },
  program: {
    path: "/program/",
    title: "Program za decu | Škola fudbala ELEVEN",
    description:
      "Program fudbala za najmlađe kroz igru, osnovne fudbalske elemente, razvoj motorike, koordinacije i timskog rada."
  },
  about: {
    path: "/o-skoli/",
    title: "O školi | Škola fudbala ELEVEN",
    description: "Upoznajte način rada Škole fudbala ELEVEN sa dečacima i devojčicama mlađeg uzrasta na Novom Beogradu."
  },
  contact: {
    path: "/lokacija-i-kontakt/",
    title: "Lokacija i kontakt | Škola fudbala ELEVEN",
    description:
      "Škola fudbala ELEVEN trenira na adresi Tošin bunar 161, Novi Beograd. Pronađite lokaciju i kontaktirajte školu za informacije o upisu."
  },
  notFound: {
    path: "/404/",
    title: "Stranica nije pronađena | ELEVEN",
    description: "Adresa koju ste otvorili ne vodi do postojeće stranice sajta.",
    noindex: true
  }
} as const;

export type SeoEntry = (typeof seo)[keyof typeof seo];
