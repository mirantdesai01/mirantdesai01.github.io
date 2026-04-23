import "./globals.css";

export const metadata = {
  title: "Mirant Desai",
  description: "Personal site for Mirant Desai",
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
