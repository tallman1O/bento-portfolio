"use client";
import React from "react";
import Dither from "./utils/background/_Dither/Dither";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FlipWords } from "@/components/ui/flip-words";
import Image from "next/image";

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
      name: "Framer Motion",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
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
      name: "NestJS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
    },
    {
      name: "FastAPI",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
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
      name: "Docker",
      icon: "https://skillicons.dev/icons?i=docker",
    },
    {
      name: "Kubernetes",
      icon: "https://skillicons.dev/icons?i=kubernetes",
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

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-screen w-screen relative">
      <div className="absolute inset-0 z-10">
        <Dither />
      </div>

      <div className="relative h-full w-full flex items-start justify-center p-20 gap-4">
        {/* Tech Stack */}
        <div className="flex w-1/3 h-fit items-start justify-start gap-2 bg-transparent p-4">
          <div className="flex flex-col items-start gap-4 w-full">
            <p className="text-white text-7xl font-bold">{"{ }"}</p>
            <h1 className="text-white text-2xl font-bold capitalize">
              TECH STACK
            </h1>
            <div className="flex flex-col items-start gap-2 w-full">
              <p className="text-white/80 flex items-start text-sm font-bold">
                Frontend :
              </p>
              <div className="flex items-center gap-4 flex-wrap w-full">
                {techStack.frontend.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-1 rounded-full p-2 bg-transparent cursor-pointer hover:shadow-[0_0_8px_2px_rgba(255,255,255,0.6)] transition-all duration-300"
                  >
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={24}
                      height={24}
                    />
                    <p className="text-white text-sm font-bold">{tech.name}</p>
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
                    className="flex items-center gap-1 rounded-full p-2 bg-transparent cursor-pointer hover:shadow-[0_0_8px_2px_rgba(255,255,255,0.6)] transition-all duration-300"
                  >
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={24}
                      height={24}
                    />
                    <p className="text-white text-sm font-bold">{tech.name}</p>
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
                    className="flex items-center gap-1 rounded-full p-2 bg-transparent cursor-pointer hover:shadow-[0_0_8px_2px_rgba(255,255,255,0.6)] transition-all duration-300"
                  >
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={24}
                      height={24}
                    />
                    <p className="text-white text-sm font-bold">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Profile Card */}
        <div className="w-1/2 h-fit bg-transparent p-4 flex flex-col items-start justify-center">
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
                className="text-white inline-block font-bold"
              />{" "}
              <p className="text-lg">
                I&apos;m a 21 year old software developer based in Pune, India.
              </p>
            </div>
            <div className="flex items-start justify-between w-full py-4 mt-20">
              <p className="text-white/50 italic">
                &quot;How to make this div
                <br /> center again?&quot;
              </p>
              <div className="flex-col items-center justify-center gap-2">
                <div className="flex items-center justify-center gap-2">
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
        </div>

        {/* Links & Projects */}
        <div className="w-1/2 h-fit bg-transparent p-4 flex flex-col items-start justify-center">
          <div className="flex items-center gap-2 p-4">
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
