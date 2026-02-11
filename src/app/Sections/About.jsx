import Image from "next/image";
import Link from "next/link";
import FadeInSection from "../components/FadeInSection";

export default function AboutSection() {
    return (
        <FadeInSection>
            <section className="flex w-full min-h-[680px]">
                {/* LEFT CONTENT */}
                <div className="flex w-1/2 flex-col justify-between bg-[#FBF6EF]">
                    {/* CONTENT AREA (padded) */}

                    <div className="pl-[66px] pt-[200px]">

                        <h2 className="mb-4 font-[var(--font-gopher)] text-[46px] font-normal text-[#3A2F3D]">
                            Clarity, balance, and growth.
                        </h2>

                        <div className="max-w-[620px] space-y-4 text-[#3A2F3D]">
                            <p className="text-[16px] font-normal">
                                Life can feel overwhelming at times, particularly when personal and professional pressures build up.
                            </p>

                            <p className="text-[16px] font-normal">
                                You don’t have to face it alone, support is here when you’re ready.
                            </p>
                        </div>

                    </div>


                    {/* FULL-WIDTH BOTTOM BAR */}

                    <div className="border-t border-[#3A2F3D] py-[22px] flex justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 text-[11px] font-normal text-[#3A2F3D] hover:opacity-70 transition-opacity"
                        >
                            GET IN TOUCH <span className="text-lg">→</span>
                        </Link>
                    </div>

                </div>


                {/* RIGHT IMAGE */}

                <div className="relative w-1/2 overflow-hidden">
                    <Image
                        src="/assets/about.png"
                        alt="Coffee, notebook, and lilac flatlay"
                        fill
                        className="object-cover object-center"
                        sizes="50vw"
                        priority
                    />
                </div>

            </section>
        </FadeInSection>
    );
}