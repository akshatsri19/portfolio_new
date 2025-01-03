import React, { useRef } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import image from "../assets/Image.png";

const Projects = () => {
    const [ref, inView] = useInView({
        threshold: 0.5, // Trigger when 50% of the section is visible
        triggerOnce: false, // Only trigger the animation once
    });

    const counterData = [
        { end: 15, label: "Achievements" },
        { end: 20, label: "Projects" },
        { end: 10, label: "Teams Collaborated" },
    ];

    return (
        <>
            <section className="projects-section bg-black text-white py-16 px-6 md:px-12 lg:px-20">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="relative mb-20">
                        {/* Background Text */}
                        <span className="absolute top-12 inset-0 flex items-center justify-center text-6xl md:text-9xl font-extrabold text-customBlue opacity-10 tracking-wide pointer-events-none">
                            Projects
                        </span>

                        {/* Foreground Text */}
                        <h2 className="relative text-4xl md:text-6xl font-bold text-white z-10">
                            Projects
                        </h2>
                    </div>
                    <p className="text-lg md:text-xl text-gray-400">
                        Below are some sample projects showcasing skills in Mobile, Web, and Blockchain platforms.
                    </p>
                </div>

                {/* Project Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            title: "TrustBlu",
                            description:
                                "An app that incentivizes blood donation using Node, Express, React, Solidity, Polygon Amoy, and Firebase. It integrates with Google Maps to display the appointment location after a successful booking. It adds QR code functionality that verifies the user’s donation and provides them with NFT for their contribution to the cause with a responsive layout for both small and large screens.",
                            youtube: "6FbR95CPE8E",
                        },
                        {
                            title: "HomeFlavours",
                            description:
                                "Inspired by Uber and Doordash, the idea was to promote local businesses and onboard them onto the mobile app so they could benefit from and increase their business. It uses the latest tech stack, which includes React Native, Google Cloud Firebase for data storage, authentication, and authorization purposes, and Java for the backend.",
                            youtube: "ubxqtMmX5-A",
                        },
                        {
                            title: "CBDC",
                            description:
                                "Web App that allows organizations to transact using one digital coin created on Node, Express, React, and Hyperledger Fabric. Admin organizations have an additional feature to freeze any account conducting fraudulent activities, making the application more secure. Used terraform to create IaC for AWS.",
                            youtube: "ke55OcCS3mQ",
                        },
                    ].map((project, index) => (
                        <div
                            key={index}
                            className="bg-customGray rounded-lg shadow-lg p-4 overflow-hidden"
                        >
                            {project.youtube && (
                                <a
                                    href={`https://www.youtube.com/watch?v=${project.youtube}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="relative">
                                        <iframe
                                            src={`https://www.youtube.com/embed/${project.youtube}?mute=1`}
                                            title={project.title}
                                            className="rounded-lg mb-4 h-60 w-full object-cover"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </a>
                            )}
                            <h3 className="text-xl font-bold mb-2 text-white mt-10 tracking-widest">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 text-sm text-justify">
                                {project.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Additional Section with Background Image */}
            <section
                className="bg-cover mt-20 py-16 px-6 md:px-12 lg:px-20"
                style={{
                    backgroundImage: `url(${image})`,
                }}
            >
                <div className="text-center text-white">
                    <div
                        ref={ref}
                        className="flex justify-center transform -translate-y-24 mb-16"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {counterData.map((counter, index) => (
                                <div
                                    key={index}
                                    className="bg-customGray rounded-lg py-5 w-64 text-center mx-auto"
                                >
                                    <h3 className="text-4xl font-bold text-customBlue">
                                        {inView && (
                                            <CountUp
                                                start={0}
                                                end={counter.end}
                                                duration={2}
                                                suffix="+"
                                            />
                                        )}
                                    </h3>
                                    <p className="text-lg mt-2">{counter.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <a
                        href="https://github.com/akshatsri19/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-customBlue text-center text-black py-3 px-6 rounded-full font-bold mt-6 inline-block"
                    >
                        GitHub
                    </a>
                </div>
            </section>
        </>
    );
};

export default Projects;
