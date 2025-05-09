import React, { useState, useEffect, useRef, useCallback } from "react";
import "../navbar-fix.css";
import "../navbar-responsive.css";
import "../navbar-edge-fixes.css";
import "../navbar-platform-fixes.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faBars, faX } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ 
  sections = [
    { id: "home", name: "Home" },
    { id: "About", name: "About" },
    { id: "services", name: "Services" },
    { id: "Projects", name: "Projects" },
    { id: "Contact", name: "Contact" }
  ], 
  activeSection = "home" 
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navbarRef = useRef(null);
  const menuButtonRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Memoize event handlers with useCallback
  const handleResize = useCallback(() => {
    const newWidth = window.innerWidth;
    setIsMobile(newWidth < 768);
    
    // Close mobile menu when resizing to desktop
    if (newWidth >= 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [menuOpen]);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  // Update window width on resize
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  // Handle scroll events for navbar styling
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Handle clicks outside the mobile menu to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (menuOpen && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen, isMobile]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = useCallback((sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 80; // Account for navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const sectionRect = section.getBoundingClientRect().top;
      const sectionPosition = sectionRect - bodyRect;
      const offsetPosition = sectionPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Close menu after clicking
      if (isMobile) {
        setMenuOpen(false);
      }
    }
  }, [isMobile]);

  return (
    <header id="main-header">
      <nav
        id="main-navbar"
        ref={navbarRef}
        className={`py-4 ${
          scrolled || isMobile ? "bg-[#6A5EE1] shadow-lg" : "bg-transparent"
        } transition-all duration-300 ease w-full fixed top-0 left-0 z-[9999]`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Brand logo and name */}
          <div id="navbar-brand" onClick={() => scrollToSection("home")}>
            <div id="navbar-logo" className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#FFA62B] to-[#FF8A00] rounded-xl flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-md">
              <span id="navbar-logo-text">P</span>
            </div>
            <h1 id="navbar-title" className="text-white font-bold text-xl sm:text-2xl">Pankaj</h1>
          </div>

          {/* Desktop menu */}
          <div id="desktop-menu" className="hidden md:flex items-center gap-6">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`relative text-white font-medium transition-colors px-3 py-2 rounded-md 
                  ${activeSection === section.id 
                    ? "text-[#FFA62B] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#FFA62B]" 
                    : "hover:text-[#FFA62B] hover:bg-[rgba(255,255,255,0.1)]"
                  }`}
              >
                {section.name}
              </button>
            ))}
          </div>

          {/* Download CV button (desktop) */}
          <div id="cv-button-container" className="hidden md:block">
            <a
              id="cv-button"
              href="/Resume.pdf"
              download="PankajResume.pdf"
              className="bg-[#FFA62B] hover:bg-[#FF8A00] text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-md transition-colors"
            >
              <FontAwesomeIcon icon={faDownload} />
              <span>Download CV</span>
            </a>
          </div>

          {/* Mobile menu button */}
          {isMobile && (
            <button
              id="menu-button"
              ref={menuButtonRef}
          onClick={toggleMenu}
              className="md:hidden p-2 rounded-md hover:bg-[rgba(106,94,225,0.5)]"
              aria-label="Toggle menu"
            >
              <FontAwesomeIcon icon={menuOpen ? faX : faBars} className="text-white text-lg" />
            </button>
          )}
        </div>

        {/* Mobile menu */}
        {isMobile && (
          <div
            id="mobile-menu"
            ref={mobileMenuRef}
            className={`${
              menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            } transition-opacity duration-300 absolute left-0 right-0 top-full bg-[#7B6EF6]/95 backdrop-blur-md shadow-xl border-t border-[rgba(106,94,225,0.3)]`}
          >
            <div className="p-4 flex flex-col">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`relative text-white text-left p-3 rounded-md transition-colors
                    ${activeSection === section.id 
                      ? "text-[#FFA62B] border-l-2 border-[#FFA62B] pl-4 bg-[rgba(255,166,43,0.1)]" 
                      : "hover:text-[#FFA62B] hover:bg-[rgba(255,255,255,0.1)] hover:border-l-2 hover:border-[rgba(255,166,43,0.5)] hover:pl-4"
                    }`}
                >
                  {section.name}
                </button>
              ))}
              <a
                id="mobile-cv-button"
                href="/Resume.pdf"
                download="PankajResume.pdf"
                className="bg-[#FFA62B] hover:bg-[#FF8A00] text-white mt-4 px-6 py-3 rounded-full flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <FontAwesomeIcon icon={faDownload} />
              <span>Download CV</span>
              </a>
            </div>
          </div>
      )}
    </nav>
    </header>
  );
};

export default Navbar; 