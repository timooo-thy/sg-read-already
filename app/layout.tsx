import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";
import { Providers } from "./providers";
import NavBar from "@/components/NavBar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const roboto_condensed = Roboto_Condensed({ subsets: ["latin"] });

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Home | SG read already?",
  description:
    "Simple, powerful document summariser and reader for elderly and visually impaired people.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto_condensed.className} bg-background`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <NavBar />
            {children}
            <SpeedInsights />
            <Analytics />
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
