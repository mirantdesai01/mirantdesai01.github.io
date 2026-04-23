import "./globals.css";

export const metadata = {
  title: "Mirant Desai",
  description: "Personal site for Mirant Desai",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
