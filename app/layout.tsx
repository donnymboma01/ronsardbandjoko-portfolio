import type { Metadata } from "next";
import { SiteHeader } from "./_components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ronsard Bandjoko | Portfolio",
  description:
    "Portfolio de Ronsard Bandjoko, étudiant en bachelier électromécanique.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="min-h-full">
        <SiteHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
