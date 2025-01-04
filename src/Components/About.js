import React, { useEffect, useState, useRef } from 'react';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const progressBarRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 } // Trigger animation when 30% of the section is visible
        );

        if (progressBarRef.current) {
            observer.observe(progressBarRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <section
                ref={progressBarRef}
                className="about-section-top mt-32 bg-black text-gray-400 py-16 px-6 md:px-12 lg:px-20 text-center"
            >
                <div className="relative">
                    {/* Background Text */}
                    <span className="absolute top-12 inset-0 flex items-center justify-center text-6xl md:text-9xl font-extrabold text-customBlue opacity-10 tracking-wide pointer-events-none">
                        About
                    </span>

                    {/* Foreground Text */}
                    <h2 className="relative text-4xl md:text-6xl font-bold text-white z-10">
                        About Me
                    </h2>
                </div>
            </section>

            <section className="about-section bg-black text-gray-400 py-4 pb-20 px-2 md:px-12 lg:px-20 text-center">
                <div className="container mx-auto flex flex-col md:flex-row items-start space-y-10 md:space-y-0 md:space-x-10">
                    {/* Left Section: Profile Picture and Skills */}
                    <div className="md:w-1/2">
                        <h3 className="text-xl font-bold mb-4">Skills</h3>
                        <div>
                            {[
                                { skill: 'Angular', percentage: 95 },
                                { skill: 'Swift', percentage: 80 },
                                { skill: 'React', percentage: 85 },
                                { skill: 'Java', percentage: 90 },
                                { skill: 'SQL', percentage: 90 },
                                { skill: 'Node', percentage: 85 },
                                { skill: 'C#', percentage: 80 },
                                { skill: '.NET', percentage: 80 },
                                { skill: 'JavaScript', percentage: 90 },
                                { skill: 'Solidity', percentage: 80 },
                            ].map((item, index) => (
                                <div key={index} className="mb-4">
                                    <p className="text-sm font-medium mb-1">
                                        {item.skill} {item.percentage}%
                                    </p>
                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                        <div
                                            className="bg-customBlue h-2 rounded-full transition-all duration-1000"
                                            style={{
                                                width: isVisible ? `${item.percentage}%` : '0%',
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center justify-between mt-10">
                            <div className="text-customBlue text-3xl font-bold">
                                20+ <span className="text-white font-normal">Projects Completed</span>
                            </div>
                            <a
                                href="https://www.linkedin.com/in/akshatsri19"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-linkedIn text-black py-2 px-6 rounded-full font-bold hover:bg-customBlue transition duration-300"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Right Section: About and Details */}
                    <div className="md:w-1/2">
                        <p className="mb-6 mt-20 text-justify">
                            With over 4 years of comprehensive experience as a Full Stack Developer, I specialize in
                            building scalable and dynamic web, mobile, and blockchain applications. My expertise
                            includes developing robust front-end interfaces, architecting secure back-end systems,
                            and integrating blockchain solutions for decentralized platforms. Passionate about
                            creating impactful projects, solving complex problems, and mentoring aspiring developers.
                        </p>
                        <div className="grid grid-cols-1 gap-8 mt-6 text-left">
                            <div>
                                <p className="text-lg font-bold mb-2">
                                    <strong>Profile:</strong>{' '}
                                    <span className="font-normal">Software Development</span>
                                </p>
                                <p className="text-lg font-bold mb-2">
                                    <strong>Domain:</strong>{' '}
                                    <span className="font-normal">Retail, E-commerce, Finance</span>
                                </p>
                                <p className="text-lg font-bold mb-2">
                                    <strong>Education:</strong>{' '}
                                    <span className="font-normal">Bachelor of Computer Engineering</span>
                                </p>
                                <p className="text-lg font-bold mb-2">
                                    <strong>Language:</strong>{' '}
                                    <span className="font-normal">English, Hindi, Bhojpuri</span>
                                </p>
                                <p className="text-lg font-bold mb-2">
                                    <strong>Development Tools:</strong>{' '}
                                    <span className="font-normal">
                                        Visual Studio Code, Postman, GitHub, Docker, Jenkins
                                    </span>
                                </p>
                                <p className="text-lg font-bold mb-2">
                                    <strong>Other Skills:</strong>{' '}
                                    <span className="font-normal">
                                        REST APIs, GCP, CI/CD Pipelines, Agile Methodologies, Web3.js, HTML, CSS,
                                        Hardhat
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
