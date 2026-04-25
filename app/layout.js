import "./globals.css";

const siteUrl = "https://mirantdesai01.github.io";

export const metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Mirant Desai",
  title: {
    default: "Mirant Desai | Official Profile, AI Product Builder, Software Developer",
    template: "%s | Mirant Desai",
  },
  description:
    "Official website for Mirant Desai, an AI product builder and software developer focused on practical AI, automation, PlanAI, full-stack software, API architecture, and product collaboration systems.",
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Mirant Desai", url: siteUrl }],
  creator: "Mirant Desai",
  publisher: "Mirant Desai",
  category: "personal profile",
  keywords: [
    "Mirant Desai",
    "Mirant Desai official website",
    "Mirant Desai profile",
    "AI product builder",
    "software developer",
    "automation",
    "full-stack software",
    "business technology",
    "PlanAI",
    "serverless API architecture",
    "AI product strategy",
  ],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Mirant Desai | Official Profile",
    description:
      "Official profile for Mirant Desai, focused on practical AI products, PlanAI, automation, full-stack software, and business systems.",
    url: siteUrl,
    siteName: "Mirant Desai",
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: "Mirant Desai | Official Profile",
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
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
