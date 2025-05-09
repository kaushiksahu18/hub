"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight, Music, Headphones, Keyboard } from "lucide-react";
import FloatingNote from "./FloatingNote";
import Link from "next/link";

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-primary/90 to-primary/80">
        <div className="absolute inset-0 bg-[url('/hero-img.jpg')] bg-cover bg-center bg-no-repeat mix-blend-overlay opacity-80" />
      </div>

      {/* Floating musical notes animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingNote
          className="text-white/20"
          top="10%"
          left="20%"
          size={24}
          delay={0}
        />
        <FloatingNote
          className="text-white/20"
          top="30%"
          left="80%"
          size={20}
          delay={2}
        />
        <FloatingNote
          className="text-white/20"
          top="70%"
          left="15%"
          size={28}
          delay={1}
        />
        <FloatingNote
          className="text-white/20"
          top="60%"
          left="75%"
          size={18}
          delay={3}
        />
        <FloatingNote
          className="text-white/20"
          top="85%"
          left="60%"
          size={22}
          delay={2.5}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="inline-block bg-accent/20 backdrop-blur-xs px-4 py-2 rounded-full mb-4">
              <p className="text-white text-sm font-medium">
                Discover Your Musical Potential
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Unlock Your <span className="text-accent">Musical</span> Journey
              Today
            </h1>
            <p className="text-lg text-white/90 mb-8 max-w-lg">
              Expert instruction in guitar, keyboard, and typing skills.
              Transform your passion into mastery with personalized lessons for
              all ages and skill levels.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/register">
                <button className="bg-accent hover:bg-accent/90 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 flex items-center gap-2 transform hover:scale-105">
                  Start Learning <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl">
              <h3 className="text-white text-xl font-semibold mb-4">
                Featured Lessons
              </h3>

              <div className="space-y-4">
                {[
                  {
                    icon: <Music className="h-5 w-5" />,
                    title: "Guitar Mastery",
                    level: "All Levels",
                    color: "bg-blue-500/20",
                  },
                  {
                    icon: <Keyboard className="h-5 w-5" />,
                    title: "Keyboard Skills",
                    level: "Beginner to Pro",
                    color: "bg-purple-500/20",
                  },
                  {
                    icon: <Headphones className="h-5 w-5" />,
                    title: "Typing Excellence",
                    level: "Speed Building",
                    color: "bg-green-500/20",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className={`p-3 rounded-lg ${item.color} text-white`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-medium group-hover:text-accent transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-white/70 text-sm">{item.level}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="h-8 w-8 rounded-full bg-gray-300 border-2 border-white/20 overflow-hidden"
                      >
                        <img
                          src={`https://i.pravatar.cc/100?img=${i + 10}`}
                          alt="Student"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                    <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center text-xs text-white font-medium">
                      +82
                    </div>
                  </div>
                  <p className="text-white/90 text-sm">Joined this week</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
