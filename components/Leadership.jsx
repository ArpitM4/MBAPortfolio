'use client';
import { motion } from 'framer-motion';

const Leadership = () => {
    return (
        <section id="leadership" className="w-full min-h-screen bg-gray-50 py-20 px-4 md:px-8 lg:px-16">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-black mb-6">
                        Leadership Philosophy
                    </h2>
                    <div className="w-24 h-1 bg-black/80"></div>
                </motion.div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* Main Philosophy Quote - Left Column */}
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="sticky top-32"
                        >
                            <h3 className="text-3xl md:text-4xl leading-tight font-light text-black mb-8">
                                &ldquo;I believe leadership is not about authority, but about responsibility — the responsibility to enable others to perform at their best.&rdquo;
                            </h3>
                        </motion.div>
                    </div>

                    {/* Details - Right Column */}
                    <div className="lg:col-span-7 space-y-16">

                        {/* Leadership Style */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="text-sm font-bold uppercase tracking-widest text-black/60 mb-4">My Leadership Style</h4>
                            <p className="text-xl md:text-2xl font-light leading-relaxed text-black/90">
                                My approach to leadership is calm, structured, and people-centric. I focus on clarity, communication, and consistency, ensuring that individuals feel supported while remaining accountable.
                            </p>
                        </motion.div>

                        {/* How I Add Value */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="text-sm font-bold uppercase tracking-widest text-black/60 mb-4">How I Add Value</h4>
                            <p className="text-xl md:text-2xl font-light leading-relaxed text-black/90">
                                I add value by bringing structure to complexity, empathy to decision-making, and discipline to execution.
                            </p>
                        </motion.div>

                        {/* My Approach - New addition */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 md:p-12 rounded-2xl shadow-sm"
                        >
                            <h4 className="text-sm font-bold uppercase tracking-widest text-black/40 mb-8">My Approach to Work</h4>
                            <ul className="space-y-6">
                                {[
                                    "I seek clarity before action",
                                    "I balance people needs with business priorities",
                                    "I prefer simple systems over complex ones",
                                    "I value consistency over intensity"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <span className="w-1.5 h-1.5 mt-2.5 bg-black rounded-full block shrink-0" />
                                        <span className="text-lg md:text-xl font-light text-black/80">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Leadership;
