import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Providers } from "./providers";
import NavBar from "@/components/NavBar";
import "./globals.css";

const roboto_condensed = Roboto_Condensed({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SG read already?",
  description:
    "Simple, powerful document reader for elderly and visually impaired people.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto_condensed.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <NavBar />
            {children}
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}