"use client";
import { motion } from "framer-motion";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative bg-white py-12 sm:py-16 lg:py-20 xl:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-[#0C141F] mb-4 sm:mb-6">
            Our{" "}
            <span className="text-[#A9111D] font-normal">
              Business Divisions
            </span>
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-px bg-[#A9111D] mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg lg:text-xl text-[#0C141F]/80 max-w-4xl mx-auto leading-relaxed font-light px-4">
            Three specialized companies operating in perfect synergy to deliver
            comprehensive, integrated solutions across real estate development,
            construction, and property management.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-12 sm:space-y-16">
          {/* United Investments */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center"
          >
            <div className="order-2 lg:order-1">
              <div className="mb-4 sm:mb-6">
                <div className="text-xs sm:text-sm text-[#A9111D] font-medium uppercase tracking-wide mb-2">
                  Real Estate Development
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#0C141F] mb-3 sm:mb-4">
                  United Investments
                </h3>
                <div className="w-12 sm:w-16 h-px bg-[#A9111D] mb-4 sm:mb-6"></div>
              </div>

              <p className="text-base sm:text-lg text-[#0C141F]/80 leading-relaxed mb-6 sm:mb-8 font-light">
                Premier real estate development company managing over $100
                million in luxury projects including Class-A office buildings,
                upscale condominiums, and innovative mixed-use communities.
              </p>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-2 h-2 bg-[#A9111D] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium text-[#0C141F] text-sm sm:text-base">
                      Hill East Mixed-Use Development
                    </div>
                    <div className="text-[#0C141F]/60 text-xs sm:text-sm">
                      $564M comprehensive development project
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-2 h-2 bg-[#A9111D] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium text-[#0C141F] text-sm sm:text-base">
                      TRIBECA Luxury Condominiums
                    </div>
                    <div className="text-[#0C141F]/60 text-xs sm:text-sm">
                      High-end residential development in NoMa
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-2 h-2 bg-[#A9111D] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium text-[#0C141F] text-sm sm:text-base">
                      International Expansion
                    </div>
                    <div className="text-[#0C141F]/60 text-xs sm:text-sm">
                      100+ unit development project in Ethiopia
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {[
                  "Luxury Development",
                  "Mixed-Use Projects",
                  "International Markets",
                  "Sustainable Design",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#0C141F]/5 text-[#0C141F] text-xs sm:text-sm font-medium rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="h-60 sm:h-72 lg:h-80 bg-gradient-to-br from-[#A9111D]/10 to-[#0C141F]/5 rounded-lg flex items-center justify-center">
                <img
                  src="/usp-investment.png"
                  alt="United Investments Logo"
                  className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 object-contain drop-shadow-xl"
                />
              </div>
            </div>
          </motion.div>

          {/* DC General Construction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center"
          >
            <div>
              <div className="h-60 sm:h-72 lg:h-80 bg-gradient-to-br from-[#0C141F]/10 to-[#A9111D]/5 rounded-lg flex items-center justify-center">
                <img
                  src="/dcgcc.png"
                  alt="DC General Construction Logo"
                  className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 object-contain drop-shadow-xl"
                />
              </div>
            </div>

            <div>
              <div className="mb-4 sm:mb-6">
                <div className="text-xs sm:text-sm text-[#A9111D] font-medium uppercase tracking-wide mb-2">
                  Construction Services
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#0C141F] mb-3 sm:mb-4">
                  DC General Construction
                </h3>
                <div className="w-12 sm:w-16 h-px bg-[#A9111D] mb-4 sm:mb-6"></div>
              </div>

              <p className="text-base sm:text-lg text-[#0C141F]/80 leading-relaxed mb-6 sm:mb-8 font-light">
                Full-service construction company delivering exceptional quality
                projects on time and within budget, with a strong commitment to
                sustainable building practices and innovative construction
                methodologies.
              </p>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-2 h-2 bg-[#A9111D] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium text-[#0C141F] text-sm sm:text-base">
                      The Westin BWI Airport Hotel
                    </div>
                    <div className="text-[#0C141F]/60 text-xs sm:text-sm">
                      260-room upper-upscale hotel project
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-2 h-2 bg-[#A9111D] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium text-[#0C141F] text-sm sm:text-base">
                      LEED Certified Projects
                    </div>
                    <div className="text-[#0C141F]/60 text-xs sm:text-sm">
                      Sustainable construction practices
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-2 h-2 bg-[#A9111D] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium text-[#0C141F] text-sm sm:text-base">
                      Commercial & Residential
                    </div>
                    <div className="text-[#0C141F]/60 text-xs sm:text-sm">
                      Diverse project portfolio
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {[
                  "Quality Assurance",
                  "On-Time Delivery",
                  "LEED Certified",
                  "Innovation",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#0C141F]/5 text-[#0C141F] text-xs sm:text-sm font-medium rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Potomac Management Group */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center"
          >
            <div className="order-2 lg:order-1">
              <div className="mb-4 sm:mb-6">
                <div className="text-xs sm:text-sm text-[#A9111D] font-medium uppercase tracking-wide mb-2">
                  Property Management
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#0C141F] mb-3 sm:mb-4">
                  Potomac Management Group
                </h3>
                <div className="w-12 sm:w-16 h-px bg-[#A9111D] mb-4 sm:mb-6"></div>
              </div>

              <p className="text-base sm:text-lg text-[#0C141F]/80 leading-relaxed mb-6 sm:mb-8 font-light">
                Comprehensive property management services including parking
                operations at major international airports, transportation
                logistics, security services, and complete facility management
                solutions.
              </p>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-2 h-2 bg-[#A9111D] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium text-[#0C141F] text-sm sm:text-base">
                      Major Airport Operations
                    </div>
                    <div className="text-[#0C141F]/60 text-xs sm:text-sm">
                      Dulles, JFK, LaGuardia, BWI management
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-2 h-2 bg-[#A9111D] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium text-[#0C141F] text-sm sm:text-base">
                      International Presence
                    </div>
                    <div className="text-[#0C141F]/60 text-xs sm:text-sm">
                      Addis Ababa Bole International Airport
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-2 h-2 bg-[#A9111D] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium text-[#0C141F] text-sm sm:text-base">
                      Comprehensive Services
                    </div>
                    <div className="text-[#0C141F]/60 text-xs sm:text-sm">
                      Transportation, security, janitorial solutions
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {[
                  "Global Operations",
                  "Airport Management",
                  "Security Services",
                  "Logistics",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#0C141F]/5 text-[#0C141F] text-xs sm:text-sm font-medium rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="h-60 sm:h-72 lg:h-80 bg-gradient-to-br from-[#A9111D]/10 to-[#0C141F]/5 rounded-lg flex items-center justify-center">
                <img
                  src="/potomac.png"
                  alt="Potomac Management Group Logo"
                  className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 object-contain drop-shadow-xl"
                  onError={(e) => {
                    e.currentTarget.src = "/8.png";
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
