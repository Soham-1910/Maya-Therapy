import Image from "next/image";
import FadeInSection from "../components/FadeInSection";

export default function IntroSection() {
    return (
        <section className="relative w-full min-h-[700px] bg-[#DCD1E6] flex items-center px-8 md:px-20 py-20 overflow-hidden">
            <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* LEFT CONTENT */}
                <div className="flex flex-col items-start max-w-[540px]">
                    <FadeInSection>
                        <h2 className="font-[var(--font-gopher)] text-[56px] md:text-[72px] leading-tight text-[#2F3E1D] mb-10">
                            Hi, I&apos;m Maya.
                        </h2>
                    </FadeInSection>

                    <div className="space-y-6 text-[#2F3E1D] text-[18px] font-light leading-relaxed mb-12">
                        <p>
                            I offer a safe, supportive space where we can gently explore your thoughts, emotions, and patterns. Together, we’ll work with care and clarity to navigate life’s challenges.
                        </p>
                    </div>
                    <FadeInSection>
                        <button className="inline-flex items-center gap-3 border border-[#2F3E1D] px-10 py-3.5 text-[11px] font-bold tracking-[0.2em] uppercase text-[#2F3E1D] hover:bg-[#2F3E1D] hover:text-white transition-all duration-300">
                            LET&apos;S CHAT <span className="text-lg">→</span>
                        </button>
                    </FadeInSection>
                </div>

                {/* RIGHT IMAGES - Stacked Arched and Circle */}
                <FadeInSection>
                    <div className="relative w-full flex justify-center md:justify-end">
                        <div className="relative w-full max-w-[480px]">

                            {/* Primary Arched Image */}
                            <div className="relative aspect-[4/5] w-full rounded-t-full overflow-hidden border border-transparent">
                                <Image
                                    src="/assets/profile.png" // Replace with your arched image path
                                    alt="Lilac holding flowers"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                />
                            </div>

                            {/* Floating Circular Image Overlay */}
                            <div className="absolute -bottom-12 -right-12 md:-right-20 w-[240px] h-[240px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden shadow-sm">
                                <Image
                                    src="/assets/flower.jpg" // Replace with your circular detail image path
                                    alt="Close up of flowers"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </FadeInSection>
            </div>
        </section>
    );
}