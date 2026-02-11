"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeInSection from "../components/FadeInSection";
import Footer from "../components/Footer";

const professionalData = [
    {
        title: "Education",
        content: "Master of Arts in Counseling Psychology from the University of Minnesota. Bachelor of Science in Psychology.",
    },
    {
        title: "Licensure",
        content: "Licensed Professional Clinical Counselor (LPCC) in the State of Minnesota. License #12345.",
    },
    {
        title: "Certifications",
        content: "Certified Clinical Trauma Professional (CCTP) and specialized training in Mindfulness-Based Stress Reduction (MBSR).",
    },
];

export default function BackgroundAndCTA() {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <div className="w-full">
            {/* PROFESSIONAL BACKGROUND SECTION - Adjusted for smaller scale */}
            <section className="bg-[#DCD1E6] py-16 px-8 md:px-20">
                <div className="max-w-[800px] mx-auto">
                    <FadeInSection>
                        <h2 className="text-center font-[var(--font-gopher)] font-medium text-[32px] md:text-[44px] text-[#2F3E1D] mb-6">
                            My Professional Background
                        </h2>
                    </FadeInSection>

                    <FadeInSection>
                        <div className="border-t border-[#2F3E1D]/30">
                            {professionalData.map((item, index) => (
                                <div key={index} className="border-b border-[#2F3E1D]/30">
                                    <button
                                        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                        className="w-full py-3 flex items-center justify-between text-left group"
                                    >
                                        <span className="text-[20px] md:text-[24px] font-normal text-[#2F3E1D] tracking-tight">
                                            {item.title}
                                        </span>

                                        {/* ANIMATED PLUS/MINUS ICON */}
                                        <div className="relative w-5 h-5 flex items-center justify-center">
                                            <div className="absolute w-full h-[1px] bg-[#2F3E1D]/60" />
                                            <motion.div
                                                initial={false}
                                                animate={{ rotate: activeIndex === index ? 0 : 90 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="absolute w-full h-[1px] bg-[#2F3E1D]/60"
                                            />
                                        </div>
                                    </button>

                                    {/* ANIMATED CONTENT */}
                                    <AnimatePresence>
                                        {activeIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pb-6 text-[16px] font-light leading-relaxed text-[#2F3E1D]/80">
                                                    {item.content}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </FadeInSection>
                </div>
            </section>

            {/* GET STARTED CTA SECTION - Remains Original Size */}
            <section className="bg-[#80814D] py-32 px-8 md:px-20 text-center">
                <div className="max-w-[800px] mx-auto flex flex-col items-center">
                    <FadeInSection>
                        <h2 className="font-[var(--font-gopher)] text-[50px] md:text-[46px] text-white leading-tight mb-8">
                            Get started today.
                        </h2>
                    </FadeInSection>
                    <p className="text-white/90 text-[18px] md:text-[20px] font-normal mb-16 max-w-[650px]">
                        Ready to take the first step towards a happier, healthier you?
                        Contact me to book your first session. I look forward to starting this
                        therapeutic journey with you.
                    </p>
                    <FadeInSection>
                        <button className="inline-flex items-center gap-3 border border-white px-6 py-3 text-[13px] font-normal uppercase text-white hover:bg-white hover:text-[#80814D] transition-all duration-300">
                            GET IN TOUCH <span className="text-lg">→</span>
                        </button>
                    </FadeInSection>
                </div>
            </section>
                <Footer />

        </div>
    );
}