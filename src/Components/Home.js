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
                clearInterval(typingInterval); // Stop typing when the word is complete
                setTimeout(() => {
                    setDisplayedText(""); // Clear the text before starting the next word
                    setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length); // Move to next role
                }, 4000); // Pause before transitioning to the next word
            }
        };

        const typingInterval = setInterval(typeEffect, 100); // Typing speed
        return () => clearInterval(typingInterval); // Cleanup on unmount
    }, [currentRoleIndex]);

    return (
        <section className="text-white flex items-center">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center mt-28">
                {/* Left Section */}
                <div className="max-w-xl md:w-1/2">
                    <p className="text-customBlue text-lg font-bold uppercase mb-6">Hello!</p>
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight font-phosphate">
                        I'm <span className="text-customBlue ">Akshat Srivastava</span>
                    </h1>
                    <p className="text-2xl font-semibold mt-5 h-10">
                        {displayedText}
                    </p>
                    <p className="text-3xl font-semibold mt-10 mb-5 font-comic">A Problem Solver</p>
                    <Link
    to="projects"
    smooth={true}
    duration={500}
    className="mt-40 bg-transparent border-2 border-white text-white py-2 px-6 rounded-full hover:bg-customBlue hover:text-black transition duration-300 cursor-pointer"
>
    My Works
</Link>
                </div>
                {/* Right Section */}
                <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
                    <img 
                        src={me}
                        alt="Akshat Srivastava" 
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default Home;
