import React from 'react';
import { motion } from 'framer-motion';

const Resume = () => {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: (direction) => ({
            opacity: 0,
            x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
            y: direction === 'top' ? -100 : direction === 'bottom' ? 100 : 0,
        }),
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: 0.8, ease: 'easeInOut' },
        },
    };

    return (
        <section className="resume-section bg-black text-white py-16 px-6 md:px-12 lg:px-20">
            {/* Resume Header */}
            <div className="text-center mb-12">
                <div className="relative mb-20">
                    <span className="absolute top-12 inset-0 flex items-center justify-center text-6xl md:text-9xl font-extrabold text-customBlue opacity-10 tracking-wide pointer-events-none">
                        Resume
                    </span>
                    <h2 className="relative text-4xl md:text-6xl font-bold text-white z-10">
                        Resume
                    </h2>
                </div>
                <p className="text-lg md:text-xl text-gray-400">
                    Seasoned Full Stack Developer with 4+ years of experience building dynamic web, mobile, and blockchain applications. Proven expertise in scalable software development, smart contract integration, and cloud deployment.
                </p>
            </div>

            {/* Experience Section */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className="mb-12"
            >
                <h3 className="text-3xl font-bold text-white mb-4 border-b-2 border-customBlue inline-block">
                    Experience
                </h3>

                <div className="flex flex-wrap gap-6 justify-center">
                    {[
                        {
                            role: "Software Developer",
                            period: "May 2024 - Dec 2024",
                            type: "Co-op",
                            company: "Aurkei",
                            direction: "top",
                        },
                        {
                            role: "Senior System Engineer",
                            period: "Apr 2022 - Oct 2022",
                            type: "Fulltime",
                            company: "Infosys",
                            direction: "top",
                        },
                        {
                            role: "System Engineer",
                            period: "Jan 2021 - Mar 2022",
                            type: "Fulltime",
                            company: "Infosys",
                            direction: "top",
                        },
                        {
                            role: "Intern",
                            period: "Oct 2020 - Jan 2021",
                            type: "Fulltime",
                            company: "Infosys",
                            direction: "top",
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            custom={item.direction}
                            variants={itemVariants}
                            className="rounded-lg p-6 shadow-lg w-full md:w-80"
                        >
                            <h4 className="text-2xl font-bold text-white mb-2">🧑‍💻 {item.role}</h4>
                            <p className="text-customBlue font-bold text-xl mb-2">{item.period}</p>
                            <p className="text-gray-400 text-sm uppercase mb-4 tracking-widest">{item.type}</p>
                            <p className="text-white mb-2">
                                <strong>{item.company}</strong>
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Education Section */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
            >
                <h3 className="text-3xl font-bold text-white mb-4 border-b-2 border-customBlue inline-block">
                    Education
                </h3>
                <div className="flex flex-wrap gap-6 justify-center">
                    {[
                        {
                            year: "2022-2024",
                            degree: "Post Graduate Diploma",
                            specialization: "Blockchain / Mobile Application and Strategy",
                            institution: "George Brown College",
                            grade: "Dean's Honour List",
                            direction: "bottom",
                        },
                        {
                            year: "2016-2020",
                            degree: "Bachelor of Technology",
                            specialization: "Computer Science",
                            institution: "DIT University",
                            grade: "Class Distinction",
                            direction: "bottom",
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            custom={item.direction}
                            variants={itemVariants}
                            className="rounded-lg p-6 shadow-lg w-full md:w-96"
                        >
                            <p className="text-customBlue font-bold text-xl mb-2">{item.year}</p>
                            <h4 className="text-2xl font-bold text-white mb-2">🎓 {item.degree}</h4>
                            <p className="text-gray-400 text-sm uppercase mb-4 tracking-widest">
                                {item.specialization}
                            </p>
                            <p className="text-white font-bold mb-2">{item.institution}</p>
                            <p className="text-gray-400">{item.grade}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Resume;
