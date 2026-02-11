"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import FadeInSection from "../components/FadeInSection";


const faqData = [
    {
        question: "Do you take insurance?",
        answer: "I am an out-of-network provider. However, I can provide you with a monthly superbill that you can submit to your insurance company for potential reimbursement.",
    },
    {
        question: "What are your rates?",
        answer: "My standard rate is $150 per 50-minute session. I also offer a limited number of sliding scale spots based on financial need.",
    },
    {
        question: "Do you have any openings?",
        answer: "Currently, I have morning and early afternoon openings on Tuesdays and Thursdays. Please reach out to confirm current availability.",
    },
];

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="bg-[#FBF6EF] pt-24 pb-16 px-8 md:px-20">

            <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-20 items-start md:grid-cols-2">

                {/* LEFT SIDE: ARCHED IMAGE */}
                <FadeInSection>
                    <div className="relative flex w-full justify-center md:justify-start">
                        {/* Matches the specific tall "tombstone" arch ratio from the screenshot */}
                        <div className="relative aspect-[4/5.5] w-full max-w-[450px] h-[700px] overflow-hidden rounded-t-full">
                            <Image
                                src="/assets/sea.jpg" // Ensure your image is in public/assets/
                                alt="Dried flowers in a vase"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </FadeInSection>

                {/* RIGHT SIDE: ACCORDION */}
                <div className="flex flex-col pt-10">
                    <h2 className="mb-12 font-[var(--font-gopher)] text-[56px] font-normal text-[#2F3E1D]">
                        FAQs
                    </h2>

                    <FadeInSection>

                        <div className="border-t border-[#2F3E1D]/30">
                            {faqData.map((item, index) => (
                                <div key={index} className="border-b border-[#2F3E1D]/30">
                                    <button
                                        onClick={() => toggleAccordion(index)}
                                        className="group flex w-full items-center gap-6 py-8 text-left transition-all"
                                    >
                                        {/* PLUS/MINUS ICON ANIMATION */}
                                        <div className="relative flex h-5 w-5 items-center justify-center">
                                            {/* Horizontal Line */}
                                            <div className="absolute h-[1px] w-full bg-[#2F3E1D]/60" />
                                            {/* Vertical Line that rotates to 0 for minus */}
                                            <motion.div
                                                initial={false}
                                                animate={{ rotate: activeIndex === index ? 0 : 90 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="absolute h-[1px] w-full bg-[#2F3E1D]/60"
                                            />
                                        </div>

                                        <span className="text-[24px] font-normal tracking-tight text-[#2F3E1D] md:text-[32px]">
                                            {item.question}
                                        </span>
                                    </button>

                                    {/* EXPANDABLE ANSWER */}
                                    <AnimatePresence initial={false}>
                                        {activeIndex === index && (
                                            <motion.div
                                                key="content"
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                            >
                                                <div className="max-w-[540px] pb-10 pl-11 text-[17px] font-light leading-relaxed text-[#2F3E1D]/80">
                                                    {item.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </FadeInSection>
                </div>
            </div>
        </section>
    );
}