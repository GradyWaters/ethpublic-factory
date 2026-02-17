export function getSiteConfig() {
  return {
    siteName: "EthPublic",
    tagline: "Clear guides, safer onchain moves.",
    nav: [
      { label: "Start Here", href: "/start-here" },
      { label: "Guides", href: "/guides" },
      { label: "ENS", href: "/category/ens" },
      { label: "Security", href: "/category/security" },
      { label: "Tools", href: "/category/tools" },
      { label: "Services", href: "/services" }
    ],
    colors: {
      background: "#ffffff",
      text: "#111111",
      accent: "#e63946"
    }
  };
}
