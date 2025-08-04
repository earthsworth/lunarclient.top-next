import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { NavMenu } from "@/components/NavMenu";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Celestial - The Browser Research Project",
  description:
    "The leading tools for tweaking your browser. Brought you by Earthsworth with love ♥️",
  keywords: [
    "minecraft",
    "lunarclient",
    "cosmetics",
    "all cosmetics",
    "unlock cosmetics",
    "celestial",
    "celestial launcher",
    "lunar all cosmetics",
    "lunar",
    "moonsworth",
    "earthsworth",
    "lunar cracked",
    "cracked cosmetics",
    "lunar youtube",
    "free cosmetics",
    "lunar free cosmetics",
    "lunarcn",
    "lunarclient.com",
  ],
  openGraph: {
    type: "website",
    title: "Celestial - The Browser Research Project",
    description:
      "The leading tools for tweaking your browser. Brought you by Earthsworth with love ♥️",
    images: "/og-images/index.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="bg-background sticky top-0 z-50 w-full">
            <div className="3xl:fixed:px-0 px-6 py-3">
              <NavMenu />
            </div>
          </div>
          {children}
        </ThemeProvider>

        <Footer />
      </body>
    </html>
  );
}
