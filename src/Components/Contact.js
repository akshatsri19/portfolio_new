import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFileAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const { ref: sectionRef, inView: sectionInView } = useInView({
        threshold: 0.3, // Trigger when 20% of the section is visible
        triggerOnce: true, // Animate only once
    });

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut" } },
    };

    return (
        <section
            ref={sectionRef}
            className="contact-section bg-black text-white py-16 px-6 md:px-12 lg:px-20"
        >
            {/* Header */}
            <motion.div
                variants={itemVariants}
                initial="hidden"
                animate={sectionInView ? "visible" : "hidden"}
                className="text-center mb-12"
            >
                <div className="relative mb-8">
                    {/* Background Text */}
                    <span className="absolute top-12 inset-0 flex items-center justify-center text-6xl md:text-9xl font-extrabold text-customBlue opacity-10 tracking-wide pointer-events-none">
                        Contact
                    </span>

                    {/* Foreground Text */}
                    <h2 className="relative text-4xl md:text-6xl font-bold text-white z-10">
                        Contact Me
                    </h2>
                </div>
                <p className="text-lg md:text-xl text-gray-400 mt-20">
                    Below are the details to reach out to me!
                </p>
            </motion.div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-20">
            {[
    {
        icon: <FaMapMarkerAlt className="text-customBlue text-2xl" />,
        title: "ADDRESS",
        content: "Toronto, Canada",
    },
    {
        icon: <FaPhoneAlt className="text-customBlue text-2xl" />,
        title: "CONTACT NUMBER",
        content: "+1(289)-623-0427",
    },
    {
        icon: <FaEnvelope className="text-customBlue text-2xl" />,
        title: "EMAIL ADDRESS",
        content: "akshat.sri19@gmail.com",
    },
    {
        icon: (
            <FaFileAlt className="text-customBlue text-2xl" />
        ),
        title: "DOWNLOAD RESUME",
        content: (
            <a
                href="https://drive.google.com/file/d/1q-GhnwagFFJPLAxdtPfIv6TbYj4PBqFJ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-customBlue hover:underline"
            >
                resumelink
            </a>
        ),
    },
].map((item, index) => (
    <motion.div
        key={index}
        variants={itemVariants}
        initial="hidden"
        animate={sectionInView ? "visible" : "hidden"}
        className="text-center"
    >
        <div className="bg-customGray rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
            {item.icon}
        </div>
        <h3 className="text-lg font-bold font-comic">{item.title}</h3>
        <p className="text-gray-400 mt-2">{item.content}</p>
    </motion.div>
))}

            </div>

            <h3 className="text-center text-gray-400 text-sm mt-60">
                Copyright ©2025 All rights reserved
            </h3>

            {/* Scroll to Top Button */}
            {showButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-10 right-10 bg-orange-500 text-white rounded-full px-5 py-3 shadow-lg hover:bg-customBlue transition duration-300"
                >
                    ↑
                </button>
            )}
        </section>
    );
};

export default Contact;
