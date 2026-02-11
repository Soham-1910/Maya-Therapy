import Image from "next/image";
import FadeInSection from "../components/FadeInSection";
import About from "../Sections/About";
import Specialties from "../Sections/SpecialtiesSection";
import HopeSection from "../Sections/HopeSection";
import IntroSection from "../Sections/IntroSection";
import FAQSection from "../Sections/FAQSection";
import BackgroundAndCTA from "../Sections/BackgroundAndCTA";

export default function Hero() {
    return (
        <>
            <section className="relative min-h-screen bg-[#DCD1E6] flex items-center pt-4">
                <div className="mx-auto grid max-w-[1490px] grid-cols-2 items-center px-[46px] w-full">

                    {/* LEFT IMAGE */}
                    <FadeInSection>
                        <div className="relative h-[760px] w-[570px] flex items-end">
                            <div className="absolute inset-0 overflow-hidden rounded-t-full border border-transparent">
                                <div className="relative h-full w-full px-[20px]">
                                    <Image
                                        src="/assets/hand.jpg"
                                        alt="Lilac flowers"
                                        fill
                                        priority
                                        className="object-cover object-bottom rounded-t-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </FadeInSection>

                    {/* RIGHT CONTENT */}
                    <FadeInSection>
                        <div className="pl-[50px] font-[var(--font-gopher)] text-[#2E3A2F] -mt-16">
                            <h1 className="leading-[0.9]">
                                <span className="block font-normal text-[#2F3E1D] text-[78px] ml-18">
                                    BE KIND
                                </span>
                                <span className="block font-light text-[#2F3E1D] text-[42px] ml-50">
                                    to
                                </span>
                                <span className="block font-normal text-[#2F3E1D] text-[78px]">
                                    YOUR MIND
                                </span>
                            </h1>

                            <p className="mt-8 ml-4 text-[16px] font-normal tracking-normal">
                                Evidence-Based Therapy for Adults in Santa Monica, CA.
                            </p>

                            <button className="mt-8 ml-32 inline-flex items-center gap-3 border border-[#2F3E1D] px-6 py-2 text-[14px] font-medium tracking-normal transition hover:bg-[#2F3E1D] hover:text-white uppercase">
                                Connect With Me <span className="text-lg">→</span>
                            </button>
                        </div>
                    </FadeInSection>

                </div>
            </section>
            <About/>

            <Specialties />
            <HopeSection />
            <IntroSection />
            <FAQSection />
            <BackgroundAndCTA />
        </>
    );
}
