import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
