import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

const spaceGrotesk = localFont({
  src: "./fonts/SpaceGrotesk-VariableFont_wght.ttf",
  variable: "--font-space-grotesk",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Portfolio | Mehul Uttam",
  description: "Mehul Uttam's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} font-spaceGrotesk antialiased bg-black`}
      >
        <ShootingStars />
        <StarsBackground />
        {children}
      </body>
    </html>
  );
}
