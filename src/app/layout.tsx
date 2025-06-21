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
  title: "Mehul Uttam | Developer",
  icons: {
    icon: "/favicon.ico",
  },
  description:
    "Explore my portfolio showcasing full-stack development projects using React, Next.js, Node.js and more. Software developer based in Pune, India specializing in building modern web applications.",
  keywords: [
    "Full Stack Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "Node.js",
    "Web Development",
    "Portfolio",
  ],
  openGraph: {
    title: "Mehul Uttam | Developer",
    description: "Full-stack developer specializing in modern web applications",
    type: "website",
    url: "https://mehuluttam.vercel.app",
    images: [
      {
        url: "/mehul.png",
        width: 800,
        height: 600,
        alt: "Mehul Uttam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehul Uttam | Developer",
    description: "Full-stack developer specializing in modern web applications",
    images: ["/mehul.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} font-spaceGrotesk antialiased bg-black min-h-screen`}
      >
        <div className="relative min-h-screen lg:h-screen">
          <ShootingStars />
          <StarsBackground />
          {children}
        </div>
      </body>
    </html>
  );
}
