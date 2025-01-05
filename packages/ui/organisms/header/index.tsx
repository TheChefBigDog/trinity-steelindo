import React, {useState, useEffect} from 'react';
import './style.css';
import {NavButtonLink} from '@trinity-steelindo/ui/atoms';
import {motion, Variants} from 'framer-motion';

type NavLink = {
  path: string;
  label: string;
};

type Props = {
  logoWhite: string;
  logoBlack: string;
  navLinks: NavLink[];
};

export const Header = ({logoWhite, logoBlack, navLinks}: Props) => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(Math.min(window.scrollY, 200));
    };

    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
  }, [isMobileMenuOpen]);

  const menuVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
      backgroundColor: 'rgba(255, 255, 255)',
    },
    closed: {
      opacity: 0,
      y: '-100%',
      transitionEnd: {
        display: 'none',
      },
    },
  };

  const headerOpacity = scrollPosition / 200;
  const isScrolled = headerOpacity > 0.2;

  return (
    <header
      className={`fixed top-0 z-50 w-full p-3 transition-all duration-700 ease-linear ${
        isMobileMenuOpen || isHovered
          ? 'bg-white bg-opacity-65 shadow-md'
          : isScrolled
            ? `bg-white bg-opacity-65 shadow-md`
            : 'bg-transparent'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={
              isScrolled || isHovered || isMobileMenuOpen
                ? logoWhite
                : logoBlack
            }
            className="h-12 w-12 transition-opacity duration-700"
            alt={`${isScrolled || isHovered || isMobileMenuOpen ? 'Black Logo' : 'White Logo'}`}
          />
          <span
            className={`ml-3 text-xl font-bold transition-colors duration-700 ${
              isScrolled || isHovered || isMobileMenuOpen
                ? 'text-black'
                : 'text-white'
            }`}>
            PT. TRINITY STEELINDO
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden space-x-4 md:flex">
          {navLinks.map((link, index) => (
            <NavButtonLink
              key={index}
              navBarTitle={link.label}
              path={link.path}
              isHeaderHovered={isHovered || isMobileMenuOpen}
              headerOpacity={headerOpacity}
              isMenuOpen={isMobileMenuOpen}
            />
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={`block p-2 ${isScrolled || isHovered || isMobileMenuOpen ? 'text-black' : 'text-white'}  md:hidden`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-white"
        initial="closed"
        animate={isMobileMenuOpen ? 'open' : 'closed'}
        variants={menuVariants}>
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute right-5 top-5 p-2 text-black"
          aria-label="Close Menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul className="space-y-4">
          {navLinks.map((link, index) => (
            <motion.li key={index}>
              <NavButtonLink
                navBarTitle={link.label}
                path={link.path}
                isHeaderHovered={true}
                headerOpacity={1}
                isMenuOpen={isMobileMenuOpen}
              />
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </header>
  );
};
