import "./globals.css";

export const metadata = {
  title: "Mirant Desai",
  description: "Personal site for Mirant Desai",
  verification: {
    google: "google-site-verification=J7i7zlBRp000_K6YT3p1HkKYJhp7qw6CGpBPfghCf3I",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
