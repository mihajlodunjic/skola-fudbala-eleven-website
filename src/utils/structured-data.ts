import { business } from "@data/business";
import { buildUrl } from "@data/site";
import type { BreadcrumbItem } from "@components/Breadcrumbs.astro";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SportsOrganization",
    name: business.name,
    url: buildUrl("/"),
    logo: buildUrl(business.logo.src),
    description:
      "Škola fudbala za dečake i devojčice mlađeg uzrasta na Tošinom bunaru 161. Fudbalske osnove, igra, motorika i timski rad.",
    sport: "Fudbal",
    telephone: business.phoneSchema,
    email: business.email,
    sameAs: [business.instagram.url],
    areaServed: business.address.areaServed,
    location: {
      "@type": "Place",
      name: business.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: business.address.street,
        addressLocality: business.address.municipality,
        addressRegion: business.address.region,
        addressCountry: business.address.countryCode
      }
    }
  };
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: buildUrl(item.href)
    }))
  };
}
