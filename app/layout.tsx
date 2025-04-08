import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/components/shared/theme-provider";
import CookieFix from "./next-cookie-fix";

const inter = Inter({ subsets: ["latin"] });

// Update accent color from primary (default is sky) to indigo and violet
// for a more vibrant yet professional look
const settings = {
  accent: "indigo" as const,
  secondaryAccent: "violet" as const,
}

export const metadata: Metadata = {
  title: "Shahroze | Full Stack Developer",
  description: "Full Stack Developer specializing in modern web technologies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <CookieFix />
            <div className="flex-1">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
