"use client";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navItems = [
    { id: "home", label: "Home", href: "/" },
    { id: "about", label: "About", href: "/about" },
    { id: "services", label: "Services", href: "/services" },
    { id: "projects", label: "Projects", href: "/projects" },
    { id: "leadership", label: "Leadership", href: "/leadership" },
    { id: "contact", label: "Contact", href: "/contact" },
  ];

  // Sync activeSection with current route
  const activeSection =
    navItems.find((item) => item.href === pathname)?.id || "home";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white shadow-md`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <img
                src="/header-logo-removebg-preview.png"
                alt="USP Holdings Logo"
                className="h-8 sm:h-10 w-auto object-contain"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation Items */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.id} href={item.href}>
                <motion.div
                  className={`relative text-sm font-medium tracking-wide uppercase transition-colors duration-300 cursor-pointer ${
                    activeSection === item.id
                      ? "text-[#A9111D]"
                      : "text-[#0C141F]/80 hover:text-[#0C141F]"
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-[#A9111D]"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Desktop Contact Button */}
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block px-6 py-2 bg-[#A9111D] text-white text-sm font-medium tracking-wide uppercase hover:bg-[#A9111D]/90 transition-colors duration-300"
            >
              Get In Touch
            </motion.button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#0C141F] p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <motion.span
                animate={
                  isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
                }
                className="w-6 h-0.5 bg-[#0C141F] block transition-all duration-300"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-0.5 bg-[#0C141F] block mt-1 transition-all duration-300"
              />
              <motion.span
                animate={
                  isMobileMenuOpen
                    ? { rotate: -45, y: -6 }
                    : { rotate: 0, y: 0 }
                }
                className="w-6 h-0.5 bg-[#0C141F] block mt-1 transition-all duration-300"
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden overflow-hidden bg-white border-t border-[#0C141F]/10"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <motion.div
                  className={`block px-4 py-3 text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${
                    activeSection === item.id
                      ? "text-[#A9111D] bg-[#A9111D]/5"
                      : "text-[#0C141F]/80 hover:text-[#0C141F] hover:bg-[#0C141F]/5"
                  }`}
                  whileHover={{ x: 4 }}
                >
                  {item.label}
                </motion.div>
              </Link>
            ))}
            {/* Mobile Contact Button */}
            <div className="px-4 pt-2">
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 bg-[#A9111D] text-white text-sm font-medium tracking-wide uppercase hover:bg-[#A9111D]/90 transition-colors duration-300 rounded-lg"
                >
                  Get In Touch
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
