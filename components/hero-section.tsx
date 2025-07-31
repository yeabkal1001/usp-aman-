"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { Spotlight } from "@/components/ui/spotlight";
import CompanyCircle from "@/components/company-circle";

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const words = [
    { text: "Building", className: "text-black" },
    { text: "Tomorrow's", className: "text-black" },
    { text: "Infrastructure", className: "text-[#A9111D]" },
    { text: "Today", className: "text-[#A9111D]" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-white pt-16 sm:pt-20 pb-16 sm:pb-20 lg:pb-24"
    >
      {/* Spotlight Effects */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#A9111D"
      />
      <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="white" />

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(169,17,29,0.1)_50%,transparent_75%)] bg-[length:60px_60px]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Mobile Layout - Stacked */}
          <div className="lg:hidden w-full h-full flex flex-col items-center justify-center">
            {/* Content - Top on Mobile (Left Column Content) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex-1 flex items-center justify-center w-full max-w-lg text-center px-4"
            >
              <div className="space-y-3 lg:space-y-8">
                {/* Enhanced Company Logo/Name with Actual Logo */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 text-center"
                >
                  {/* Logo Image */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="flex-shrink-0"
                  >
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/25Yrs-USP_new_logo.png-uWfFbZRTZfTh8cPNWi7J542JpcfYv8.png"
                      alt="USP Holdings 25 Years Logo"
                      className="h-16 sm:h-20 lg:h-24 xl:h-32 w-auto object-contain"
                    />
                  </motion.div>

                  {/* Text Logo */}
                  <div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-[#0C141F] mb-2 tracking-tight">
                      USP{" "}
                      <span className="text-4xl sm:text-3xl lg:text-4xl font-normal text-[#A9111D] tracking-wider">
                        HOLDINGS
                      </span>
                    </h1>

                    {/* 25 Years Badge */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6, duration: 0.8 }}
                      className="mt-2"
                    >
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#A9111D]/20 text-[#A9111D] border border-[#A9111D]/30">
                        <span className="w-2 h-2 bg-[#A9111D] rounded-full mr-2"></span>
                        25 Years of Excellence
                      </span>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Typewriter Effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 1 }}
                >
                  <TypewriterEffectSmooth
                    words={words}
                    className="text-lg sm:text-xl lg:text-2xl"
                  />
                </motion.div>

                {/* Professional Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="space-y-4 lg:space-y-6"
                >
                  <p className="text-base sm:text-lg lg:text-xl text-[#0C141F]/90 leading-relaxed max-w-2xl font-light">
                    A premier multi-industry corporation with over 25 years of
                    excellence in real estate development, construction, and
                    property management. Trusted by Fortune 500 companies and
                    government agencies worldwide.
                  </p>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-4 lg:pt-6">
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-[#A9111D]">
                        $100M+
                      </div>
                      <div className="text-xs sm:text-sm text-[#0C141F]/70 uppercase tracking-wide">
                        Portfolio Value
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-[#A9111D]">
                        25+
                      </div>
                      <div className="text-xs sm:text-sm text-[#0C141F]/70 uppercase tracking-wide">
                        Years Experience
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-[#A9111D]">
                        Global
                      </div>
                      <div className="text-xs sm:text-sm text-[#0C141F]/70 uppercase tracking-wide">
                        Operations
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* CompanyCircle - Below Content on Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="flex-1 flex items-center justify-center w-full"
            >
              <div className="w-full max-w-[320px] flex items-center justify-center">
                <CompanyCircle />
              </div>
            </motion.div>
          </div>

          {/* Desktop Layout - Grid */}
          <div className="hidden lg:grid grid-cols-2 gap-16 items-center w-full">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex items-center justify-start w-full max-w-lg"
            >
              <div className="space-y-8 text-left">
                {/* Enhanced Company Logo/Name with Actual Logo */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 text-center"
                >
                  {/* Logo Image */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="flex-shrink-0"
                  >
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/25Yrs-USP_new_logo.png-uWfFbZRTZfTh8cPNWi7J542JpcfYv8.png"
                      alt="USP Holdings 25 Years Logo"
                      className="h-16 sm:h-20 lg:h-24 xl:h-32 w-auto object-contain"
                    />
                  </motion.div>

                  {/* Text Logo */}
                  <div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-[#0C141F] mb-2 tracking-tight">
                      USP
                    </h1>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#A9111D] tracking-wider">
                      HOLDINGS
                    </div>
                    {/* 25 Years Badge */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6, duration: 0.8 }}
                      className="mt-2"
                    >
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#A9111D]/20 text-[#A9111D] border border-[#A9111D]/30">
                        <span className="w-2 h-2 bg-[#A9111D] rounded-full mr-2"></span>
                        25 Years of Excellence
                      </span>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Typewriter Effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 1 }}
                >
                  <TypewriterEffectSmooth
                    words={words}
                    className="text-lg sm:text-xl lg:text-2xl"
                  />
                </motion.div>

                {/* Professional Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="space-y-6"
                >
                  <p className="text-base sm:text-lg lg:text-xl text-[#0C141F]/90 leading-relaxed max-w-2xl font-light">
                    A premier multi-industry corporation with over 25 years of
                    excellence in real estate development, construction, and
                    property management. Trusted by Fortune 500 companies and
                    government agencies worldwide.
                  </p>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-3 gap-8 pt-6">
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-[#A9111D]">
                        $100M+
                      </div>
                      <div className="text-xs sm:text-sm text-[#0C141F]/70 uppercase tracking-wide">
                        Portfolio Value
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-[#A9111D]">
                        25+
                      </div>
                      <div className="text-xs sm:text-sm text-[#0C141F]/70 uppercase tracking-wide">
                        Years Experience
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-[#A9111D]">
                        Global
                      </div>
                      <div className="text-xs sm:text-sm text-[#0C141F]/70 uppercase tracking-wide">
                        Operations
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - Interactive CompanyCircle Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="relative w-full flex items-center justify-center min-h-[600px]"
            >
              <CompanyCircle />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
