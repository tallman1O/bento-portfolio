"use client";
import React, { useCallback, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FlipWords } from "@/components/ui/flip-words";
import Image from "next/image";
import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";
import { NasaAPOD } from "../components/NasaAPOD";
import { motion } from "motion/react";
import { SpotifyNowPlaying } from "@/components/SpotifyNowPlaying";
// import { RandomQuotes } from "@/components/RandomQuotes";

const techStack = {
  frontend: [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Motion",
      icon: "/logo/motion.svg",
    },
    {
      name: "Zustand",
      icon: "/logo/zustand.svg",
    },
    {
      name: "Expo",
      icon: "https://img.icons8.com/ios-filled/24/expo.png",
    },
  ],
  backend: [
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "Django",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    },
  ],
  "Database & Cloud": [
    {
      name: "PostgreSQL",
      icon: "https://skillicons.dev/icons?i=postgresql",
    },
    {
      name: "MongoDB",
      icon: "https://skillicons.dev/icons?i=mongodb",
    },
    {
      name: "Appwrite",
      icon: "https://cdn.simpleicons.org/appwrite/F02E65",
    },
    {
      name: "Firebase",
      icon: "/logo/firebase.svg",
    },
    {
      name: "NeonDB",
      icon: "/logo/neon.svg",
    },
    {
      name: "Drizzle",
      icon: "/logo/drizzle.svg",
    },
    {
      name: "Docker",
      icon: "https://skillicons.dev/icons?i=docker",
    },
  ],
  "Tools & Platforms": [
    {
      name: "Git",
      icon: "https://skillicons.dev/icons?i=git",
    },
    {
      name: "Figma",
      icon: "https://skillicons.dev/icons?i=figma",
    },
    {
      name: "Cursor",
      icon: "/logo/cursor.svg",
    },
    {
      name: "Postman",
      icon: "https://skillicons.dev/icons?i=postman",
    },
    {
      name: "Vercel",
      icon: "/logo/vercel.svg",
    },
  ],
};

const Home = () => {
  const words = [
    "Products.",
    "Frontends.",
    "Backends.",
    "WebApps.",
    "Mobile Apps.",
  ];

  const [time, setTime] = React.useState(new Date());
  const [isLoading, setIsLoading] = useState(true);
  const [nasaLoaded, setNasaLoaded] = useState(false);
  const [spotifyLoaded, setSpotifyLoaded] = useState(false);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Add a safety timeout to prevent infinite loading
    const safetyTimeout = setTimeout(() => {
      console.log("Safety timeout triggered - forcing content to show");
      setIsLoading(false);
    }, 5000); // 5 seconds timeout

    return () => {
      clearInterval(timer);
      clearTimeout(safetyTimeout);
    };
  }, []);

  const handleNasaLoad = useCallback(() => {
    console.log("NASA image loaded");
    setNasaLoaded(true);
    if (spotifyLoaded) {
      setIsLoading(false);
    }
  }, [spotifyLoaded]);

  const handleSpotifyLoad = useCallback(() => {
    console.log("Spotify data loaded");
    setSpotifyLoaded(true);
    if (nasaLoaded) {
      setIsLoading(false);
    }
  }, [nasaLoaded]);

  // const handleQuotesLoad = useCallback(() => {
  //   console.log("Quotes loaded");
  //   if (nasaLoaded && spotifyLoaded) {
  //     setIsLoading(false);
  //   }
  // }, [nasaLoaded, spotifyLoaded]);

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-black">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div>
          <p className="text-white text-xl">
            Loading your cosmic experience...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-screen relative">
      <div className="relative min-h-screen w-full flex flex-col lg:flex-row items-start justify-center p-2 sm:p-8 md:p-8 lg:p-12 gap-4">
        {/* Profile Card */}
        <div className="flex flex-col items-start justify-start gap-4 w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="w-full h-fit bg-transparent p-4 flex flex-col items-start justify-center"
          >
            <div className="flex items-center gap-2 p-4">
              <Avatar className="rounded-full w-20 h-20 bg-white/10">
                <AvatarImage src="/mehul.png" alt="Mehul Uttam" />
                <AvatarFallback className="text-lg font-semibold">
                  MU
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start justify-center p-4">
                <h1 className="text-2xl font-bold text-white">Mehul Uttam.</h1>
                <p className="text-base text-white/50">@tallman1O</p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center p-4 w-full">
              <div className="text-xl text-white">
                I Build
                <FlipWords
                  words={words}
                  duration={1100}
                  className="text-white inline-block font-bold"
                />{" "}
                <p className="text-lg">
                  I&apos;m a 21 year old software developer based in Pune,
                  India.
                </p>
              </div>
              <div className="flex items-start justify-between w-full py-4 mt-20">
                <p className="text-white/50 italic hidden md:block">
                  &quot;How to make this div
                  <br /> center again?&quot;
                </p>
                <div className="flex flex-col items-start md:items-end justify-end gap-2">
                  <div className="flex items-center justify-start md:justify-end gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 ml-2 animate-pulse shadow-[0_0_8px_2px_rgba(34,197,94,0.6)]"></div>
                    <p className="text-white/50 italic">Available for work.</p>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <p className="text-white/50 italic">
                      {time.toLocaleDateString("en-GB") +
                        " , " +
                        " " +
                        time.toLocaleTimeString("en-GB", {
                          hour: "2-digit",
                          minute: "2-digit",
                          second: "2-digit",
                          hour12: true,
                        })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="w-full z-20 flex flex-col items-center justify-center rounded-lg"
          >
            <div className="relative w-full flex flex-col items-center justify-center">
              <NasaAPOD onLoad={handleNasaLoad} />
            </div>
          </motion.div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-col items-start justify-start gap-4 w-full lg:w-1/3">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="flex w-full h-fit items-start justify-start gap-2 bg-transparent p-4"
          >
            <div className="flex flex-col items-start gap-4 w-full">
              <p className="text-white text-7xl font-bold">{"{ }"}</p>
              <h1 className="text-white text-3xl font-bold capitalize">
                TECH STACK.
              </h1>
              <div className="flex flex-col items-start gap-2 w-full">
                <p className="text-white/80 flex items-start text-sm font-bold">
                  Frontend :
                </p>
                <div className="flex items-center gap-4 flex-wrap w-full">
                  {techStack.frontend.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-2 rounded-full p-2 bg-transparent cursor-pointer hover:shadow-[0_0_8px_2px_rgba(255,255,255,0.6)] transition-all duration-300"
                    >
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={24}
                        height={24}
                      />
                      <p className="text-white text-sm font-bold">
                        {tech.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-start gap-2">
                <p className="text-white/80 flex items-start text-sm font-bold">
                  Backend :
                </p>
                <div className="flex items-center gap-4 flex-wrap w-full">
                  {techStack.backend.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-2 rounded-full p-2 bg-transparent cursor-pointer hover:shadow-[0_0_8px_2px_rgba(255,255,255,0.6)] transition-all duration-300"
                    >
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={24}
                        height={24}
                      />
                      <p className="text-white text-sm font-bold">
                        {tech.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-start gap-2">
                <p className="text-white/80 flex items-start text-sm font-bold">
                  Database & Cloud :
                </p>
                <div className="flex items-center gap-4 flex-wrap w-full">
                  {techStack["Database & Cloud"].map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-2 rounded-full p-2 bg-transparent cursor-pointer hover:shadow-[0_0_8px_2px_rgba(255,255,255,0.6)] transition-all duration-300"
                    >
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={24}
                        height={24}
                      />
                      <p className="text-white text-sm font-bold">
                        {tech.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-start gap-2">
                <p className="text-white/80 flex items-start text-sm font-bold">
                  Tools & Platforms :
                </p>
                <div className="flex items-center gap-4 flex-wrap w-full">
                  {techStack["Tools & Platforms"].map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-2 rounded-full p-2 bg-transparent cursor-pointer hover:shadow-[0_0_8px_2px_rgba(255,255,255,0.6)] transition-all duration-300"
                    >
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={24}
                        height={24}
                      />
                      <p className="text-white text-sm font-bold">
                        {tech.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quotes */}
          {/* <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="flex w-full h-fit items-start justify-start gap-2 bg-transparent p-2 sm:p-4"
          >
            <div className="flex flex-col items-start gap-4 w-full">
              <RandomQuotes onLoad={handleQuotesLoad} />
            </div>
          </motion.div> */}
        </div>

        {/* Links & Projects */}
        <div className="flex flex-col items-start justify-start gap-2 w-full lg:w-auto">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="h-fit bg-transparent p-4 flex flex-col items-center justify-center w-full"
          >
            <div className="flex items-center justify-center gap-4 p-4 w-full">
              <h1 className="text-white text-5xl font-bold">
                LIN
                <br />
                KS.
              </h1>
              <div className="flex flex-col items-start gap-2">
                <div className="flex items-center justify-center gap-2">
                  <Link href="https://x.com/tallman1O" target="_blank">
                    <Image
                      src="https://img.icons8.com/pulsar-gradient/100/twitterx.png"
                      alt="Twitter"
                      width={60}
                      height={60}
                      className="cursor-pointer hover:scale-110 transition-all duration-300"
                    />
                  </Link>
                  <Link href="https://github.com/tallman1O" target="_blank">
                    <Image
                      src="https://img.icons8.com/pulsar-gradient/100/github.png"
                      alt="Github"
                      width={60}
                      height={60}
                      className="cursor-pointer hover:scale-110 transition-all duration-300"
                    />
                  </Link>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Link
                    href="https://www.linkedin.com/in/mehul-uttam/"
                    target="_blank"
                  >
                    <Image
                      src="https://img.icons8.com/pulsar-gradient/100/linkedin.png"
                      alt="LinkedIn"
                      width={60}
                      height={60}
                      className="cursor-pointer hover:scale-110 transition-all duration-300"
                    />
                  </Link>
                  <Link href="mailto:mehulsavio@gmail.com" target="_blank">
                    <Image
                      src="https://img.icons8.com/pulsar-gradient/100/gmail-new.png"
                      alt="gmail-new"
                      width={60}
                      height={60}
                      className="cursor-pointer hover:scale-110 transition-all duration-300"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Projects */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="w-full z-20 bg-transparent flex flex-col items-start justify-center p-4 hover:shadow-[0_0_8px_2px_rgba(255,255,255,0.6)] transition-all duration-300 rounded-lg"
          >
            <div className="relative w-full flex flex-col items-center justify-center">
              <Link
                href="/projects"
                target="_blank"
                className="flex flex-col items-center justify-center"
              >
                <h1 className="text-white text-4xl font-bold relative z-10 p-2 flex items-center gap-2 justify-center">
                  PROJECTS.
                </h1>
                <SquareArrowOutUpRight className="w-10 h-10 text-white" />
              </Link>
            </div>
          </motion.div>

          {/* Spotify */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="w-full z-20 bg-transparent flex flex-col items-start justify-center p-4"
          >
            <div className="relative w-full flex flex-col items-start justify-center">
              <h1 className="text-white text-4xl font-bold relative z-10 p-2">
                NOW PLAYING.
              </h1>
              <SpotifyNowPlaying onLoad={handleSpotifyLoad} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
