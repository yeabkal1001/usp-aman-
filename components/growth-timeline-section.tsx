"use client";
import { motion } from "framer-motion";
import { Car, Building, Globe, Trophy, Users, TrendingUp } from "lucide-react";

const timeline = [
  {
    year: 1998,
    title: "Foundation",
    event:
      "Acquired 30-space parking facility on U Street; launched U Street Parking",
    impact: "Started with 4 employees",
    icon: Car,
    color: "from-[#A9111D] to-[#8B0E18]",
  },
  {
    year: 2005,
    title: "Expansion Era",
    event:
      "Co-founded United Investments, marking entry into real estate development",
    impact: "Diversified into construction and development",
    icon: Building,
    color: "from-[#0C141F] to-[#1A2332]",
  },
  {
    year: 2012,
    title: "Major Airports",
    event: "Secured parking operations at Dulles, JFK, and LaGuardia airports",
    impact: "Became a major player in airport services",
    icon: Globe,
    color: "from-[#A9111D] to-[#8B0E18]",
  },
  {
    year: 2018,
    title: "Global Reach",
    event:
      "Completed The Westin BWI Airport; expanded to Ethiopia with Bole International Airport",
    impact: "International operations established",
    icon: Trophy,
    color: "from-[#0C141F] to-[#1A2332]",
  },
  {
    year: 2020,
    title: "Portfolio Growth",
    event: "Hill East Mixed-Use Development project valued at $564 million",
    impact: "Portfolio exceeded $100 million",
    icon: TrendingUp,
    color: "from-[#A9111D] to-[#8B0E18]",
  },
  {
    year: 2024,
    title: "Industry Leadership",
    event:
      "25 years of excellence with global operations and sustainable development focus",
    impact: "Leading multi-industry corporation",
    icon: Users,
    color: "from-[#0C141F] to-[#1A2332]",
  },
];

export function GrowthTimelineSection() {
  return (
    <section className="relative bg-white py-12 sm:py-16 lg:py-20 xl:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(169,17,29,0.1)_50%,transparent_75%)] bg-[length:60px_60px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-[#0C141F] mb-4 sm:mb-6">
            Our Growth{" "}
            <span className="text-[#A9111D] font-normal">Journey</span>
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-px bg-[#A9111D] mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg lg:text-xl text-[#0C141F]/80 max-w-4xl mx-auto leading-relaxed font-light px-4">
            From a single parking facility to a global multi-industry
            powerhouse. Discover the key milestones that shaped USP Holdings
            into the industry leader we are today.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line - Hidden on mobile, visible on desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#A9111D] via-[#0C141F] to-[#A9111D] rounded-full opacity-30"></div>

          {/* Timeline Items */}
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative mb-8 sm:mb-12 lg:mb-16"
            >
              {/* Mobile Layout - Centered */}
              <div className="md:hidden">
                <div className="flex flex-col items-center">
                  {/* Timeline Dot with Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${item.color} rounded-full border-4 border-white shadow-xl flex items-center justify-center z-10 cursor-pointer mb-4`}
                  >
                    <item.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="w-full bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-[#0C141F]/10 hover:shadow-2xl hover:border-[#A9111D]/20 transition-all duration-300"
                  >
                    {/* Year Badge */}
                    <div
                      className={`inline-flex items-center px-3 sm:px-4 py-1 sm:py-2 rounded-full text-white font-bold text-base sm:text-lg mb-3 sm:mb-4 bg-gradient-to-r ${item.color}`}
                    >
                      {item.year}
                    </div>

                    {/* Title Badge */}
                    <div className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-[#A9111D] text-xs sm:text-sm font-medium border border-[#A9111D]/30 bg-[#A9111D]/5 mb-3 sm:mb-4">
                      {item.title}
                    </div>

                    {/* Event Description */}
                    <h3 className="text-lg sm:text-xl font-semibold text-[#0C141F] mb-2 sm:mb-3 leading-tight">
                      {item.event}
                    </h3>

                    {/* Impact Statement */}
                    <p className="text-[#0C141F]/70 font-medium text-sm sm:text-base">
                      {item.impact}
                    </p>

                    {/* Decorative Element */}
                    <div
                      className={`w-8 sm:w-12 h-1 bg-gradient-to-r ${item.color} rounded-full mt-3 sm:mt-4 mx-auto`}
                    ></div>
                  </motion.div>
                </div>
              </div>

              {/* Desktop Layout - Alternating */}
              <div className="hidden md:flex items-center relative">
                {/* Left Card (even indices) */}
                {index % 2 === 0 && (
                  <div className="w-5/12 pr-8 text-right">
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white rounded-2xl p-8 shadow-xl border border-[#0C141F]/10 hover:shadow-2xl hover:border-[#A9111D]/20 transition-all duration-300"
                    >
                      {/* Year Badge */}
                      <div
                        className={`inline-flex items-center px-4 py-2 rounded-full text-white font-bold text-lg mb-4 bg-gradient-to-r ${item.color}`}
                      >
                        {item.year}
                      </div>

                      {/* Title Badge */}
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-[#A9111D] text-sm font-medium border border-[#A9111D]/30 bg-[#A9111D]/5 mb-4">
                        {item.title}
                      </div>

                      {/* Event Description */}
                      <h3 className="text-xl font-semibold text-[#0C141F] mb-3 leading-tight">
                        {item.event}
                      </h3>

                      {/* Impact Statement */}
                      <p className="text-[#0C141F]/70 font-medium text-base">
                        {item.impact}
                      </p>

                      {/* Decorative Element */}
                      <div
                        className={`w-12 h-1 bg-gradient-to-r ${item.color} rounded-full mt-4 ml-auto`}
                      ></div>
                    </motion.div>
                  </div>
                )}

                {/* Center Timeline Dot with Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  className={`absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br ${item.color} rounded-full border-4 border-white shadow-xl flex items-center justify-center z-10 cursor-pointer`}
                >
                  <item.icon className="h-8 w-8 text-white" />
                </motion.div>

                {/* Connection Line to Left Card */}
                {index % 2 === 0 && (
                  <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 w-8 h-px bg-gradient-to-l from-[#A9111D]/30 to-transparent"></div>
                )}

                {/* Connection Line to Right Card */}
                {index % 2 === 1 && (
                  <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 w-8 h-px bg-gradient-to-r from-[#A9111D]/30 to-transparent"></div>
                )}

                {/* Right Card (odd indices) */}
                {index % 2 === 1 && (
                  <div className="absolute right-0 w-5/12 pl-8 text-left">
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white rounded-2xl p-8 shadow-xl border border-[#0C141F]/10 hover:shadow-2xl hover:border-[#A9111D]/20 transition-all duration-300"
                    >
                      {/* Year Badge */}
                      <div
                        className={`inline-flex items-center px-4 py-2 rounded-full text-white font-bold text-lg mb-4 bg-gradient-to-r ${item.color}`}
                      >
                        {item.year}
                      </div>

                      {/* Title Badge */}
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-[#A9111D] text-sm font-medium border border-[#A9111D]/30 bg-[#A9111D]/5 mb-4">
                        {item.title}
                      </div>

                      {/* Event Description */}
                      <h3 className="text-xl font-semibold text-[#0C141F] mb-3 leading-tight">
                        {item.event}
                      </h3>

                      {/* Impact Statement */}
                      <p className="text-[#0C141F]/70 font-medium text-base">
                        {item.impact}
                      </p>

                      {/* Decorative Element */}
                      <div
                        className={`w-12 h-1 bg-gradient-to-r ${item.color} rounded-full mt-4 mr-auto`}
                      ></div>
                    </motion.div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Growth Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 lg:mt-20 bg-[#0C141F] rounded-2xl p-6 sm:p-8 lg:p-12"
        >
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-light text-white mb-3 sm:mb-4">
              25 Years of Remarkable Growth
            </h3>
            <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base">
              From humble beginnings to industry leadership, our journey
              reflects unwavering commitment to excellence and innovation.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                number: "1998",
                label: "Founded",
                desc: "Single Parking Facility",
              },
              {
                number: "2005",
                label: "Diversified",
                desc: "Real Estate Development",
              },
              {
                number: "2018",
                label: "Global",
                desc: "International Operations",
              },
              { number: "2024", label: "$100M+", desc: "Portfolio Value" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#A9111D] mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-white/90 font-medium mb-1 text-xs sm:text-sm">
                  {stat.label}
                </div>
                <div className="text-white/60 text-xs">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Future Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-[#A9111D]/10 to-[#A9111D]/5 rounded-2xl p-6 sm:p-8 border border-[#A9111D]/20">
            <h3 className="text-xl sm:text-2xl font-light text-[#0C141F] mb-3 sm:mb-4">
              Looking Forward
            </h3>
            <p className="text-[#0C141F]/80 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base">
              As we continue our journey, USP Holdings remains committed to
              sustainable development, community empowerment, and creating
              lasting legacies for future generations. The next chapter of our
              story is just beginning.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
