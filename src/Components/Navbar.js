import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

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

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: showNavbar ? 0 : -100 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed top-0 w-full bg-black z-10 shadow-md"
        >
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo Section */}
                <div className="flex items-center">
                    <span className="text-2xl font-bold text-orange-500 font-comic">Akshat Srivastava</span>
                </div>

                {/* Navigation Links */}
                <ul className="flex space-x-6 text-white font-medium">
                    <li>
                        <Link
                            to="home"
                            smooth={true}
                            duration={500}
                            spy={true}
                            activeClass="text-customBlue"
                            onSetActive={() => setActiveSection('home')}
                            className={`cursor-pointer hover:text-customBlue transition duration-200 ${
                                activeSection === 'home' ? 'text-customBlue' : ''
                            }`}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="about"
                            smooth={true}
                            duration={500}
                            spy={true}
                            activeClass="text-customBlue"
                            onSetActive={() => setActiveSection('about')}
                            className={`cursor-pointer hover:text-customBlue transition duration-200 ${
                                activeSection === 'about' ? 'text-customBlue' : ''
                            }`}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="resume"
                            smooth={true}
                            duration={500}
                            spy={true}
                            activeClass="text-customBlue"
                            onSetActive={() => setActiveSection('resume')}
                            className={`cursor-pointer hover:text-customBlue transition duration-200 ${
                                activeSection === 'resume' ? 'text-customBlue' : ''
                            }`}
                        >
                            Resume
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            spy={true}
                            activeClass="text-customBlue"
                            onSetActive={() => setActiveSection('projects')}
                            className={`cursor-pointer hover:text-customBlue transition duration-200 ${
                                activeSection === 'projects' ? 'text-customBlue' : ''
                            }`}
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            spy={true}
                            activeClass="text-customBlue"
                            onSetActive={() => setActiveSection('contact')}
                            className={`cursor-pointer hover:text-customBlue transition duration-200 ${
                                activeSection === 'contact' ? 'text-customBlue' : ''
                            }`}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </motion.nav>
    );
};

export default Navbar;
