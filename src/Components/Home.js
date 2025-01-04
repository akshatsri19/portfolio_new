import React, { useState, useEffect } from 'react';
import me from '../assets/Me.png';
import { Link } from 'react-scroll';

const Home = () => {
    const roles = ["Web Developer", "Android/iOS Developer", "Blockchain Developer"];
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        const currentRole = roles[currentRoleIndex];
        let letterIndex = 0;

        const typeEffect = () => {
            if (letterIndex <= currentRole.length) {
                setDisplayedText(currentRole.slice(0, letterIndex));
                letterIndex++;
            } else {
                clearInterval(typingInterval);
                setTimeout(() => {
                    setDisplayedText("");
                    setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
                }, 4000);
            }
        };

        const typingInterval = setInterval(typeEffect, 100);
        return () => clearInterval(typingInterval);
    }, [currentRoleIndex]);

    return (
        <section className="text-white flex items-center">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center mt-28">
                {/* Left Section */}
                <div className="max-w-xl md:w-1/2 text-center md:text-left">
                    <p className="text-customBlue text-lg font-bold uppercase mb-6">Hello!</p>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        I'm <span className="text-customBlue">Akshat Srivastava</span>
                    </h1>
                    <p className="text-xl md:text-2xl font-semibold mt-5 h-10">{displayedText}</p>
                    <p className="text-2xl md:text-3xl font-semibold mt-10 mb-5">A Problem Solver</p>
                    <Link
                        to="projects"
                        smooth={true}
                        duration={500}
                        className="mt-10 bg-transparent border-2 border-white text-white py-2 px-6 rounded-full hover:bg-customBlue hover:text-black transition duration-300 cursor-pointer"
                    >
                        My Works
                    </Link>
                </div>
                {/* Right Section */}
                <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
                    <img
                        src={me}
                        alt="Akshat Srivastava"
                        className="rounded-lg shadow-lg max-w-full h-auto"
                    />
                </div>
            </div>
        </section>
    );
};

export default Home;
