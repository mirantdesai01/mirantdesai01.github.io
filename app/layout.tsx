import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const siteUrl = "https://mirantdesai01.github.io";

const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mirant Desai | Fractional CFO & Strategic Finance",
    template: "%s | Mirant Desai",
  },
  description: "Fractional CFO and strategic finance advisory for startups, small businesses, and organizations.",
  keywords: ["Mirant Desai", "Fractional CFO", "Strategic Finance", "Financial Planning", "Startups", "Small Business"],
  authors: [{ name: "Mirant Desai", url: siteUrl }],
  creator: "Mirant Desai",
  publisher: "Mirant Desai",
  category: "Financial Services",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Mirant Desai",
    title: "Mirant Desai | Fractional CFO & Strategic Finance",
    description:
      "Strategic financial planning and CFO-level decision support for startups, small businesses, and organizations.",
    images: [
      {
        url: "/mirant-desai-social.png",
        width: 1200,
        height: 630,
        alt: "Mirant Desai, Fractional CFO and Strategic Finance Advisor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mirant Desai | Fractional CFO & Strategic Finance",
    description:
      "Strategic financial planning and CFO-level decision support for startups, small businesses, and organizations.",
    images: ["/mirant-desai-social.png"],
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
    google: "wu2Rg7sElRUMCJdfsQN8aoiVRF2HtPFrtXLdUHJL2hM"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="HdVMGlNyP7A1mMCWVjwsKW6h8NzivjsuACza31OX3Kc" />
        <link rel="related" href="https://caseinfo.arcourts.gov/opad/case/CV-25-739" />
      </head>
      <body
        suppressHydrationWarning
        className={`${garamond.variable} min-h-screen bg-white text-slate-900 antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          {/* Header */}
          <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
            <nav className="mx-auto max-w-7xl px-5 py-3.5 sm:px-8">
              <div className="flex items-center justify-between">
                <Link href="/" className="group flex items-center gap-3.5">
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-slate-300 text-[11px] font-bold tracking-[0.08em] text-slate-900 transition group-hover:border-teal-700 group-hover:text-teal-800">
                    MD
                  </span>
                  <span className="leading-tight">
                    <span className="display-font block text-[17px] font-semibold tracking-[-0.01em] text-slate-950">
                      Mirant Desai
                    </span>
                    <span className="hidden text-[11px] font-medium tracking-[0.01em] text-slate-500 sm:block">
                      Fractional CFO & Strategic Finance
                    </span>
                  </span>
                </Link>
                <div className="flex items-center gap-4 text-[13px] font-semibold text-slate-700 sm:gap-7">
                  <Link href="/services" className="transition-colors hover:text-teal-800">
                    Services
                  </Link>
                  <Link href="/about" className="hidden transition-colors hover:text-teal-800 sm:block">
                    About
                  </Link>
                  <Link href="/blog" className="hidden transition-colors hover:text-teal-800 md:block">
                    Insights
                  </Link>
                  <a
                    href="https://calendly.com/desaimirant9/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#102b36] px-4 py-2.5 text-white transition hover:bg-[#1f6670]"
                  >
                    Schedule a call
                  </a>
                </div>
              </div>
            </nav>
          </header>

          {/* Main Content */}
          <main className="flex-1 px-6 py-12">
            {children}
          </main>

          {/* Footer */}
          <footer className="mt-auto border-t border-slate-200 bg-[#f6f4ef]">
            <div className="mx-auto max-w-7xl px-6 py-10">
              <div className="flex flex-col justify-between gap-6 text-sm text-slate-600 md:flex-row md:items-end">
                <div>
                  <p className="display-font text-lg font-semibold text-slate-950">Mirant Desai</p>
                  <p className="mt-1">Fractional CFO & Strategic Finance</p>
                  <p className="mt-4">&copy; {new Date().getFullYear()} Mirant Desai. All rights reserved.</p>
                </div>
                <div className="flex flex-wrap gap-6">
                  <Link href="/services" className="transition-colors hover:text-slate-950">
                    Services
                  </Link>
                  <Link href="/blog" className="transition-colors hover:text-slate-950">
                    Insights
                  </Link>
                  <Link href="/legal" className="transition-colors hover:text-slate-950">
                    Legal
                  </Link>
                  <a
                    href="https://www.planaipro.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-900 transition-colors"
                  >
                    PlanAI
                  </a>
                  <a
                    href="https://linkedin.com/in/desaimirant"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-900 transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/mirantdesai01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-900 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
