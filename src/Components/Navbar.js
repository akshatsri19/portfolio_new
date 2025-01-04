import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setShowNavbar(true);
            } else {
                setShowNavbar(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: showNavbar || isMobileMenuOpen ? 0 : -100 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className={`fixed top-0 w-full z-20 bg-black shadow-md transition-all duration-300 ${
                isMobileMenuOpen ? 'bg-black' : ''
            }`}
        >
            <div className="container flex justify-between items-center py-4 px-6">
                {/* Logo Section */}
                <div className="flex items-center">
                    <span className="text-2xl font-bold text-orange-500 font-comic">Akshat Srivastava</span>
                </div>

                {/* Hamburger Menu for Mobile */}
                <div className="md:hidden">
                    <button
                        onClick={handleMenuToggle}
                        aria-label="Toggle Menu"
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Navigation Links */}
                <ul
                    className={`md:flex md:space-x-6 text-white font-medium absolute md:static top-16 md:top-0 left-0 w-full md:w-auto bg-black md:bg-transparent transition-all duration-300 ${
                        isMobileMenuOpen ? 'block' : 'hidden'
                    }`}
                >
                    {['home', 'about', 'resume', 'projects', 'contact'].map((section) => (
                        <li key={section} className="text-center md:text-left py-2 md:py-0">
                            <Link
                                to={section}
                                smooth={true}
                                duration={500}
                                spy={true}
                                activeClass="text-customBlue"
                                onSetActive={() => setActiveSection(section)}
                                className={`cursor-pointer hover:text-customBlue transition duration-200 ${
                                    activeSection === section ? 'text-customBlue' : ''
                                }`}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.nav>
    );
};

export default Navbar;
