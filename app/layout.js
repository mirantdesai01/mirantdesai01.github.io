import "./globals.css";

const siteUrl = "https://mirantdesai01.github.io";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mirant Desai | AI Product Builder and Software Developer",
    template: "%s | Mirant Desai",
  },
  description:
    "Mirant Desai builds practical AI, automation, and full-stack software products, with writing on PlanAI, API architecture, and product collaboration systems.",
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Mirant Desai", url: siteUrl }],
  creator: "Mirant Desai",
  publisher: "Mirant Desai",
  keywords: [
    "Mirant Desai",
    "AI product builder",
    "software developer",
    "automation",
    "full-stack software",
    "business technology",
    "PlanAI",
    "serverless API architecture",
    "AI product strategy",
  ],
  openGraph: {
    title: "Mirant Desai | AI Product Builder and Software Developer",
    description:
      "Personal profile for Mirant Desai, focused on practical AI products, PlanAI, automation, full-stack software, and business systems.",
    url: siteUrl,
    siteName: "Mirant Desai",
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: "Mirant Desai | AI Product Builder and Software Developer",
    description:
      "Practical AI, PlanAI, automation, and full-stack software work by Mirant Desai.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "wu2Rg7sElRUMCJdfsQN8aoiVRF2HtPFrtXLdUHJL2hM",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
