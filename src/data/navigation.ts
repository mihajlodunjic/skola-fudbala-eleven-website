import { business } from "./business";

export const navigation = [
  { label: "Početna", href: "/" },
  { label: "Program", href: "/program/" },
  { label: "O školi", href: "/o-skoli/" },
  { label: "Lokacija i kontakt", href: "/lokacija-i-kontakt/" }
] as const;

export const globalNavigationLabel = "Glavna navigacija";

export const globalCta = {
  label: "Pozovite za upis",
  href: business.phoneHref
} as const;
