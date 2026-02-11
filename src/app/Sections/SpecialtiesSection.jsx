import Image from "next/image";
import FadeInSection from "../components/FadeInSection";

const specialties = [
    {
        title: "Anxiety",
        description: "Ongoing worry and mental tension can feel exhausting. Therapy helps you feel calmer, clearer, and more grounded.",
        image: "/assets/anxiety.jpg", // Replace with your image path
    },
    {
        title: "Emotional Healing",
        description: "Past experiences can continue to shape how you feel and relate. Therapy offers a safe space to process and restore balance.",
        image: "/assets/emotional.jpg", // Replace with your image path
    },
    {
        title: "High Pressure Living",
        description: "Constant pressure can quietly wear you down. Therapy helps you slow down and reconnect with what you need.",
        image: "/assets/peer.jpg", // Replace with your image path
    }
];

export default function Specialties() {
    return (
        <section className="bg-[#DCD1E6] py-24 px-8 md:px-16">
            {/* SECTION TITLE */}
            <h2 className="text-center font-[var(--font-gopher)] text-[48px] md:text-[64px] text-[#2F3E1D] mb-16">
                My Specialties
            </h2>

            {/* SPECIALTIES GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1440px] mx-auto">
                {specialties.map((item, index) => (
                    <div
                        key={index}
                        className="bg-[#FBF6EF] border border-[#2F3E1D]  p-10 flex flex-col h-full"
                    >
                        {/* CARD HEADER */}
                        <FadeInSection>
                            <h3 className="text-[24px] font-medium text-[#2F3E1D] mb-6">
                                {item.title}
                            </h3>
                        </FadeInSection>

                        {/* CARD DESCRIPTION */}
                        <p className="text-[15px] leading-relaxed text-[#2F3E1D] font-light mb-12 flex-grow">
                            {item.description}
                        </p>

                        {/* CIRCULAR IMAGE CONTAINER */}
                        <FadeInSection>
                            <div className="relative w-full aspect-square flex items-center justify-center mt-auto">
                                <div className="relative w-[90%] h-[90%] rounded-full overflow-hidden border border-[#2F3E1D] p-6">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                        sizes="33vw"
                                    />
                                </div>

                            </div>
                        </FadeInSection>
                    </div>
                ))}
            </div>
        </section>
    );
}