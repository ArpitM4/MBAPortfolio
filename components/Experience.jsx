'use client';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <section id="experience" className="w-full bg-white py-20 px-4 md:px-8 lg:px-16">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-6xl font-light text-black mb-16 text-center"
                >
                    Experience & Impact
                </motion.h2>

                {/* Roles Section */}
                <div className="space-y-16 mb-24">
                    {/* HR */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="group"
                    >
                        <div className="border-t border-black/20 pt-8 flex flex-col md:flex-row md:justify-between md:gap-8">
                            <div className="md:w-1/3 mb-4 md:mb-0">
                                <h3 className="text-2xl font-normal text-black mb-2">Human Resources</h3>
                                <p className="text-sm text-black/70 font-medium uppercase tracking-widest">VBeyond Corporation</p>
                            </div>
                            <div className="md:w-2/3">
                                <p className="text-lg md:text-xl font-normal text-black/80 leading-relaxed">
                                    As an HR Intern, I worked on talent sourcing, screening, interview coordination, and recruitment operations, gaining hands-on exposure to the hiring lifecycle.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Marketing */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="group"
                    >
                        <div className="border-t border-black/20 pt-8 flex flex-col md:flex-row md:justify-between md:gap-8">
                            <div className="md:w-1/3 mb-4 md:mb-0">
                                <h3 className="text-2xl font-normal text-black mb-2">Marketing & Strategy</h3>
                                <p className="text-sm text-black/70 font-medium uppercase tracking-widest">Academic Projects</p>
                            </div>
                            <div className="md:w-2/3">
                                <p className="text-lg md:text-xl font-normal text-black/80 leading-relaxed">
                                    Through projects on Yippee Noodles and SUGAR Cosmetics, I analysed consumer behaviour, brand positioning, and communication strategies to develop actionable business insights.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Leadership */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="group"
                    >
                        <div className="border-t border-black/20 pt-8 flex flex-col md:flex-row md:justify-between md:gap-8">
                            <div className="md:w-1/3 mb-4 md:mb-0">
                                <h3 className="text-2xl font-normal text-black mb-2">Leadership Roles</h3>
                                <p className="text-sm text-black/70 font-medium uppercase tracking-widest">E&I Cell</p>
                            </div>
                            <div className="md:w-2/3">
                                <p className="text-lg md:text-xl font-normal text-black/80 leading-relaxed">
                                    As Senior Coordinator, I support corporate relations, events, and communication, ensuring smooth coordination between stakeholders.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Capabilities & Achievements Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Key Skills / Capabilities */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-gray-50 p-8 md:p-12 rounded-2xl"
                    >
                        <h3 className="text-2xl font-normal text-black mb-8">Key Capabilities</h3>
                        <ul className="space-y-4">
                            {[
                                "Stakeholder coordination and communication",
                                "Structured problem solving",
                                "Data analysis and reporting",
                                "Process design and improvement",
                                "Event and program management"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-black/70">
                                    <span className="w-1.5 h-1.5 bg-black/40 rounded-full" />
                                    <span className="font-light">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Selected Achievements */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-black text-white p-8 md:p-12 rounded-2xl"
                    >
                        <h3 className="text-2xl font-normal text-white mb-8">Selected Achievements</h3>
                        <ul className="space-y-6">
                            {[
                                { number: "200+", text: "Candidate pipeline built during HR internship" },
                                { number: "150+", text: "Respondents for primary research projects" },
                                { icon: "★", text: "Coordinated corporate relations and major campus events" },
                                { icon: "★", text: "Received Letter of Recommendation for performance" }
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <span className="text-xl font-bold min-w-[3rem] text-right text-gray-400">
                                        {item.number || item.icon}
                                    </span>
                                    <span className="font-light text-gray-300">{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Experience;
