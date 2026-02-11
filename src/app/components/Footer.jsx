"use client";

import Link from "next/link";
import FadeInSection from "./FadeInSection";
import Copyright from "./Copyright";

export default function Footer() {


    return (
        <div   className="bg-[#F9F5F0] pt-12 font-light text-[#2F3E1D]">
            <div className="max-w-[1610px] mx-auto px-8 md:px-14">
                {/* FLEX CONTAINER */}
                <div className="flex flex-col md:flex-row justify-between gap-16 mb-20">

                    {/* LEFT SIDE: LOGO & ADDRESS */}
                    <FadeInSection>
                        <div className="space-y-6 md:w-full">
                            <h2 className="font-[var(--font-gopher)] font-medium text-[32px] md:text-[42px] leading-none mb-10">
                                Maya Reynolds
                            </h2>
                            <div className="space-y-1 text-[18px] font-normal">
                                <p>123 Example Road</p>
                                <p>Minneapolis, MN</p>
                            </div>
                            <div className="pt-6 space-y-1 text-[18px] font-normal">
                                <p className="underline underline-offset-4 cursor-pointer hover:opacity-70">
                                    email@example.com
                                </p>
                                <p>(555) 555-5555</p>
                            </div>
                        </div>
                    </FadeInSection>

                    {/* RIGHT SIDE: HOURS + NAVIGATION */}
                    <div className="flex flex-end gap-56">

                        {/* HOURS */}
                        <FadeInSection>
                            <div className="md:pl-10">
                                <h3 className="font-[var(--font-gopher)] font-medium text-[32px] md:text-[36px] mb-6">
                                    Hours
                                </h3>
                                <div className="text-[16px] font-normal">
                                    <p>Monday – Friday</p>
                                    <p>10am – 6pm</p>
                                </div>
                            </div>
                        </FadeInSection>
                        {/* NAVIGATION LINKS */}
                        <FadeInSection>
                            <div className="text-left md:text-right">
                                <h3 className="font-[var(--font-gopher)] text-[32px] md:text-[42px] mb-6 font-medium">
                                    Find
                                </h3>
                                <nav className="flex flex-col gap-3 text-[18px] font-normal">
                                    <Link href="/Home" className="underline underline-offset-4 hover:opacity-70">Home</Link>
                                    <Link href="/contact" className="underline underline-offset-4 hover:opacity-70">Contact</Link>
                                    <Link href="/blog" className="underline underline-offset-4 hover:opacity-70">Blog</Link>
                                </nav>
                            </div>
                        </FadeInSection>
                    </div>
                </div>
            </div>
            <Copyright />
        </div>
        
    );
}
