import React, { useState, useEffect } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { cn } from "@/lib/utils";

interface Props {
  onThemeToggle?: () => void;
  isDarkMode?: boolean;
  links?: Array<{ href: string; label: string }>;
}

const Navbar = ({
  onThemeToggle = () => {},
  isDarkMode = false,
  links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ],
}: Props) => {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navOpacity = useTransform(scrollY, [0, 100], [1, 0.95]);
  const navY = useTransform(scrollY, [0, 100], [0, isVisible ? 0 : -100]);

  return (
    <motion.nav
      style={{
        y: navY,
        opacity: navOpacity,
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 h-16 bg-background/60 backdrop-blur-lg z-50 transition-all duration-300"
    >
      <div className="container mx-auto h-full flex items-center justify-between px-4">
        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="w-8 h-8">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4">
              {links.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  whileHover={{ x: 5 }}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(link.href);
                    if (element) {
                      setIsOpen(false);
                      element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                        inline: "nearest",
                      });
                    }
                  }}
                  className="text-foreground/60 hover:text-primary transition-colors duration-500 text-lg font-medium p-2"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex justify-center space-x-8 flex-1">
          {links.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              whileHover={{ y: -2 }}
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector(link.href);
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                  });
                }
              }}
              className="text-foreground/60 hover:text-primary transition-colors duration-500 text-sm font-medium tracking-wide uppercase"
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Theme Toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onThemeToggle}
          className="rounded-full hover:bg-primary/10 transition-colors duration-300"
        >
          <motion.div
            initial={false}
            animate={{ rotate: isDarkMode ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {isDarkMode ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </motion.div>
        </Button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
