"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BookingModal } from "@/components/booking-modal";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

interface HeaderProps {
  siteSettings: {
    brandName?: string;
    brandMark?: string;
    navigation?: { label: string; href: string }[];
    booking?: {
      visualTitle?: string;
      visualAccent?: string;
      visualImage?: string;
      highlights?: string[];
      formTitle?: string;
      formDescription?: string;
      submitText?: string;
      successTitle?: string;
      successDescription?: string;
      businessOptions?: string[];
    };
  };
}

export function Header({ siteSettings }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isBookingOpen, setIsBookingOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  const { theme, toggleTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500 py-4",
        scrolled ? "py-2" : "py-6",
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div
          className={cn(
            "container mx-auto flex h-16 items-center justify-between px-6 md:px-10 transition-all duration-500 rounded-full",
            scrolled ? "glass shadow-2xl" : "bg-transparent",
          )}
        >
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-[var(--primary)] rounded-xl flex items-center justify-center text-[var(--background)] font-black text-xl group-hover:rotate-12 transition-transform">
              {siteSettings.brandMark || "D"}
            </div>
            <span className="text-2xl font-black tracking-tighter">
              {siteSettings.brandName || siteConfig.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-10">
            {(siteSettings.navigation?.length
              ? siteSettings.navigation
              : siteConfig.navigation
            ).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-black uppercase tracking-widest transition-all hover:text-primary relative group/nav"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover/nav:w-full" />
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="rounded-full"
              aria-label="Toggle theme"
            >
              {!mounted ? (
                <div className="h-5 w-5" />
              ) : theme === "dark" ? (
                <Sun className="h-5 w-5 text-primary" />
              ) : (
                <Moon className="h-5 w-5 text-primary" />
              )}
            </Button>
            {/* Existing Booking Button */}
            <Button
              onClick={() => setIsBookingOpen(true)}
              variant="primary"
              size="sm"
              className="rounded-full shadow-lg shadow-primary/20"
            >
              Get Catalog
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="flex items-center justify-center rounded-full w-12 h-12 md:hidden glass hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        <BookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          brandMark={siteSettings.brandMark}
          booking={siteSettings.booking}
        />

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="fixed inset-0 top-0 z-[60] flex flex-col items-center justify-center bg-background/98 backdrop-blur-2xl animate-in fade-in duration-500 md:hidden">
            <button
              className="absolute top-6 right-6 w-12 h-12 rounded-full glass flex items-center justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
            <nav className="flex flex-col items-center gap-10">
              {(siteSettings.navigation?.length
                ? siteSettings.navigation
                : siteConfig.navigation
              ).map((item, i) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-4xl font-black tracking-tighter hover:text-primary transition-colors animate-in slide-in-from-bottom-4 duration-700"
                  style={{ animationDelay: `${i * 100}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsBookingOpen(true);
                }}
                variant="primary"
                size="lg"
                className="w-full mt-10 rounded-full"
              >
                Get Digital Catalog
              </Button>
            </nav>
          </div>
        )}
      </motion.div>
    </header>
  );
}
