export const runtime = 'edge';
import localFont from "next/font/local";
import "./globals.css";
import clsx from "clsx";
import { ThemeProvider } from 'next-themes'
import { useTheme } from 'next-themes'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: 'Mohamadreza Golbaba',
  description: 'Crafting digital experiences with code and creativity'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <ThemeProvider attribute="class">
        <body className={clsx(
          geistSans.variable,
          geistMono.variable,
          "min-h-screen font-sans antialiased",
          "bg-white dark:bg-black",
          " grid-background "
        )}>
          <main className="min-h-screen pb-24 sppotlight-overlay-light dark:spotlight-overlay">
            {children}
          </main>
        </body>
      </ThemeProvider>
    </html>
  )
}