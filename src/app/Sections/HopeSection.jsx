import Image from "next/image";
import Link from "next/link";
import FadeInSection from "../components/FadeInSection";

export default function HopeSection() {
    const listItems = [
        "Persistent feelings of sadness or hopelessness",
        "Trouble focusing or making decisions",
        "Difficulty maintaining relationships",
        "Feeling constantly exhausted or unmotivated",
        "A pervasive sense of being overwhelmed"
    ];

    return (
        <FadeInSection>
            <section className="relative w-full bg-[#FBF6EF]">
                <div className="mx-auto flex min-h-[720px] max-w-[1440px]">

                    {/* LEFT IMAGE */}

                    <div className="relative w-1/2 overflow-hidden animate-fadeIn">
                        <Image
                            src="/assets/Yoga.png"
                            alt="Woman practicing yoga"
                            fill
                            className="object-contain"
                            sizes="50vw"
                            priority
                        />
                    </div>


                    {/* RIGHT CONTENT */}
                    <div className="flex w-1/2 flex-col">

                        {/* TOP CONTENT */}
                        <div className="flex-grow px-[80px] pt-[80px] pb-12">
                            <h2 className="mb-10 font-[var(--font-gopher)] text-[52px] font-normal text-[#3A2F3D]">
                                Support Is Always Here.
                            </h2>

                            <div className="max-w-[500px] text-[#3A2F3D]">
                                <p className="mb-8 text-[17px] font-medium">
                                    If you are facing any of these, there’s hope:
                                </p>

                                <ul className="mb-12 space-y-4">
                                    {listItems.map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-3 text-[17px] font-light"
                                        >
                                            <span className="mt-[10px] h-[3px] w-[3px] rounded-full bg-[#3A2F3D]" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <p className="text-[17px] font-light">
                                    With empathy and guidance, we’ll work together to navigate the
                                    challenges life throws your way.
                                </p>
                            </div>
                        </div>

                        {/* FOOTER CTA */}
                        <div className="border-t border-[#3A2F3D]/20 py-[25px] flex justify-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-[#3A2F3D] hover:opacity-70 transition-opacity"
                            >
                                Work With Me <span className="text-lg">→</span>
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
        </FadeInSection>
    );
}
