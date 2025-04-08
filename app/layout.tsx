import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/components/shared/theme-provider";
import CookieFix from "./next-cookie-fix";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Update accent color from primary (default is sky) to indigo and violet
// for a more vibrant yet professional look
const settings = {
  accent: "indigo" as const,
  secondaryAccent: "violet" as const,
}

export const metadata: Metadata = {
  title: "Shahroze Kamran Sahotra | Full Stack Developer",
  description: "Personal portfolio of Shahroze Kamran Sahotra, a Modern Full Stack Developer and Applied Cloud Generative AI Engineer with over 5 years of experience",
  keywords: ["Full Stack Developer", "Cloud AI Engineer", "Web Developer", "Portfolio", "Shahroze Kamran Sahotra"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased bg-background font-sans`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <CookieFix />
            <div className="flex-1">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
