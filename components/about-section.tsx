"use client";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

export function AboutSection() {
  return (
    <section id="about" className="relative">
      <LampContainer>
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 py-4 text-center text-2xl sm:text-3xl lg:text-4xl xl:text-7xl font-medium tracking-tight text-[#0C141F]"
        >
          About USP Holdings
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center text-base sm:text-lg lg:text-xl text-[#0C141F]/80 max-w-4xl mx-auto mt-6 sm:mt-8 leading-relaxed font-light px-4"
        >
          Established in 1998, USP Holdings has evolved from a single parking
          facility into a diversified corporation managing over $100 million in
          premium real estate developments, construction projects, and property
          management operations across the United States and internationally.
        </motion.p>
      </LampContainer>

      {/* Corporate Overview with Real Images */}
      <div className="bg-white py-12 sm:py-16 lg:py-20 xl:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mission, Vision, Values Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full p-6 sm:p-8 border border-[#0C141F]/10 hover:border-[#A9111D]/30 transition-all duration-300">
                <div className="mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#A9111D]/10 rounded flex items-center justify-center mb-3 sm:mb-4">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#A9111D] rounded"></div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-normal text-[#0C141F] mb-3 sm:mb-4">
                    Mission Statement
                  </h3>
                </div>

                <blockquote className="text-[#0C141F] font-medium text-base sm:text-lg mb-4 sm:mb-6 italic border-l-4 border-[#A9111D] pl-3 sm:pl-4">
                  "To be the leading company delivering services and products
                  with an unwavering commitment to quality and integrity across
                  all industries we serve."
                </blockquote>

                <div className="space-y-2 sm:space-y-3 text-[#0C141F]/70">
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <div className="w-1.5 h-1.5 bg-[#A9111D] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm">
                      Excellence in project execution and client service
                    </span>
                  </div>
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <div className="w-1.5 h-1.5 bg-[#A9111D] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm">
                      Integrity as our foundational business principle
                    </span>
                  </div>
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <div className="w-1.5 h-1.5 bg-[#A9111D] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm">
                      Innovation driving sustainable industry solutions
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full p-6 sm:p-8 border border-[#0C141F]/10 hover:border-[#A9111D]/30 transition-all duration-300">
                <div className="mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#A9111D]/10 rounded flex items-center justify-center mb-3 sm:mb-4">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#A9111D] rounded"></div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-normal text-[#0C141F] mb-3 sm:mb-4">
                    Vision Statement
                  </h3>
                </div>

                <blockquote className="text-[#0C141F] font-medium text-base sm:text-lg mb-4 sm:mb-6 italic border-l-4 border-[#A9111D] pl-3 sm:pl-4">
                  "To create and build a lasting legacy of empowered communities
                  while leaving environments that are resilient, sustainable,
                  and thriving for future generations."
                </blockquote>

                <div className="space-y-2 sm:space-y-3 text-[#0C141F]/70">
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <div className="w-1.5 h-1.5 bg-[#A9111D] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm">
                      Sustainable development and environmental stewardship
                    </span>
                  </div>
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <div className="w-1.5 h-1.5 bg-[#A9111D] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm">
                      Community empowerment and economic development
                    </span>
                  </div>
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <div className="w-1.5 h-1.5 bg-[#A9111D] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm">
                      Legacy building for future generations
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full p-6 sm:p-8 border border-[#0C141F]/10 hover:border-[#A9111D]/30 transition-all duration-300">
                <div className="mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#A9111D]/10 rounded flex items-center justify-center mb-3 sm:mb-4">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#A9111D] rounded"></div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-normal text-[#0C141F] mb-3 sm:mb-4">
                    Core Values
                  </h3>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {[
                    "Excellence in Execution",
                    "Unwavering Integrity",
                    "Continuous Innovation",
                    "Sustainable Practices",
                    "Community Focus",
                    "Global Perspective",
                  ].map((value, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 sm:space-x-3"
                    >
                      <div className="w-2 h-2 bg-[#A9111D] rounded-full flex-shrink-0"></div>
                      <span className="text-[#0C141F] font-medium text-xs sm:text-sm">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Corporate Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-[#0C141F] rounded-lg p-6 sm:p-8 lg:p-12"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#A9111D] mb-1 sm:mb-2">
                  25+
                </div>
                <div className="text-white/90 font-medium mb-1 text-xs sm:text-sm">
                  Years of Excellence
                </div>
                <div className="text-white/60 text-xs">Since 1998</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#A9111D] mb-1 sm:mb-2">
                  $100M+
                </div>
                <div className="text-white/90 font-medium mb-1 text-xs sm:text-sm">
                  Portfolio Value
                </div>
                <div className="text-white/60 text-xs">Active Projects</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#A9111D] mb-1 sm:mb-2">
                  3
                </div>
                <div className="text-white/90 font-medium mb-1 text-xs sm:text-sm">
                  Business Divisions
                </div>
                <div className="text-white/60 text-xs">
                  Integrated Solutions
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#A9111D] mb-1 sm:mb-2">
                  2
                </div>
                <div className="text-white/90 font-medium mb-1 text-xs sm:text-sm">
                  Countries
                </div>
                <div className="text-white/60 text-xs">US & Ethiopia</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
