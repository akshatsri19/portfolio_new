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

                <div className="flex flex-row gap-6">
                    <motion.div
                        custom="left"
                        variants={itemVariants}
                        className="rounded-lg p-6 shadow-lg w-80 h-54"
                    >
                        <h4 className="text-2xl font-bold text-white mb-2">🧑‍💻 Software Developer</h4>
                        <p className="text-customBlue font-bold text-xl mb-2">May 2024 - Dec 2024</p>
                        <p className="text-gray-400 text-sm uppercase mb-4 tracking-widest">Co-op</p>
                        <p className="text-white mb-2">
                            <strong>Aurkei</strong>
                        </p>
                    </motion.div>

                    <motion.div
                        custom="top"
                        variants={itemVariants}
                        className="rounded-lg p-6 shadow-lg w-80 h-54"
                    >
                        <h4 className="text-2xl font-bold text-white mb-2">🧑‍💻 Senior System Engineer</h4>
                        <p className="text-customBlue font-bold text-xl mb-2">Apr 2022 - Oct 2022</p>
                        <p className="text-gray-400 text-sm uppercase mb-4 tracking-widest">Fulltime</p>
                        <p className="text-white mb-2">
                            <strong>Infosys</strong>
                        </p>
                    </motion.div>

                    <motion.div
                        custom="top"
                        variants={itemVariants}
                        className="rounded-lg p-6 shadow-lg w-80 h-54"
                    >
                        <h4 className="text-2xl font-bold text-white mb-2">🧑‍💻 System Engineer</h4>
                        <p className="text-customBlue font-bold text-xl mb-2">Jan 2021 - Mar 2022</p>
                        <p className="text-gray-400 text-sm uppercase mb-4 tracking-widest">Fulltime</p>
                        <p className="text-white mb-2">
                            <strong>Infosys</strong>
                        </p>
                    </motion.div>

                    <motion.div
                        custom="right"
                        variants={itemVariants}
                        className="rounded-lg p-6 shadow-lg w-80 h-54"
                    >
                        <h4 className="text-2xl font-bold text-white mb-2">🧑‍💻 Intern</h4>
                        <p className="text-customBlue font-bold text-xl mb-2">Oct 2020 - Jan 2021</p>
                        <p className="text-gray-400 text-sm uppercase mb-4 tracking-widest">Fulltime</p>
                        <p className="text-white mb-2">
                            <strong>Infosys</strong>
                        </p>
                    </motion.div>
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
                    <motion.div
                        custom="bottom"
                        variants={itemVariants}
                        className="rounded-lg p-6 shadow-lg w-96 h-64"
                    >
                        <p className="text-customBlue font-bold text-xl mb-2">2022-2024</p>
                        <h4 className="text-2xl font-bold text-white mb-2">🎓 Post Graduate Diploma</h4>
                        <p className="text-gray-400 text-sm uppercase mb-4 tracking-widest">
                            Blockchain / Mobile application and strategy
                        </p>
                        <p className="text-white font-bold mb-2">George Brown College</p>
                        <p className="text-gray-400">Grade: Dean's Honour List</p>
                    </motion.div>

                    <motion.div
                        custom="bottom"
                        variants={itemVariants}
                        className="rounded-lg p-6 shadow-lg w-96 h-64"
                    >
                        <p className="text-customBlue font-bold text-xl mb-2">2016-2020</p>
                        <h4 className="text-2xl font-bold text-white mb-2">🎓 Bachelor of Technology</h4>
                        <p className="text-gray-400 text-sm uppercase mb-4 tracking-widest">Computer Science</p>
                        <p className="text-white font-bold mb-2">DIT University</p>
                        <p className="text-gray-400">Grade: Class Distinction</p>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Resume;
