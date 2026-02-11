import React from "react";
import FadeInSection from "../components/FadeInSection";

const ContactPage = () => {
    const socialImages = [
        { id: 1, src: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=600", alt: "Lilacs" },
        { id: 2, src: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&q=80&w=600", alt: "Shelves" },
        { id: 3, src: "/assets/download.jpg", alt: "Flatlay" },
        { id: 4, src: "/assets/mountain.jpg", alt: "Portrait" },
    ];
    return (
        <>
            <div className="min-h-screen bg-[#DCD1E6 ] flex items-start justify-center p-8 md:p-16 font-[var(--font-gopher)]">
                <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                    {/* Left Column: Text + Images */}
                    <div className="space-y-10 md:space-y-4">

                        {/* Header and Paragraphs */}
                        <div className="space-y-6 md:space-y-20">
                            <FadeInSection>
                                <h1 className="text-[#2F3E1D] font-medium tracking-tight text-5xl md:text-[85px] pt-12 md:pt-20">
                                    Let&apos;s Connect
                                </h1>
                            </FadeInSection>
                            <div className="space-y-4 max-w-md">
                                <p className="text-[#2F3E1D] text-lg md:text-xl leading-relaxed">
                                    Starting therapy is courageous.
                                </p>
                                <p className="text-[#2F3E1D] text-lg md:text-xl leading-relaxed">
                                    Get in touch for questions, or to book a free 15-minute consultation.
                                </p>
                            </div>
                        </div>

                        {/* Overlapping Images */}
                        <div className="relative left-20 ">
                            <FadeInSection>
                                {/* Primary Image */}
                                <div className="w-64 h-96 rounded-t-full overflow-hidden border-4 border-transparent">
                                    <img
                                        src="/assets/hand.jpg"
                                        alt="Woman holding lilacs"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Circular Secondary Image */}
                                <div className="absolute bottom-4 left-44 w-36 h-36 rounded-full overflow-hidden border-4 border-transparent transform translate-y-4">
                                    <img
                                        src="/assets/flower.jpg"
                                        alt="White lilac blossoms"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </FadeInSection>
                        </div>
                    </div>

                    <div className="mt-10 md:mt-[240px] ">
                        <FadeInSection>
                            <div className="bg-[#C5C1C9] text-[#2F3E1D] p-8 md:p-12 max-w-[560px]">
                                <p className=" md:text-[18px] font-normal leading-[1.6] tracking-wide">
                                    <span className="font-medium">PLEASE NOTE:</span> If you opt to use a &quot;Form Block&quot; on
                                    your contact page this is not HIPAA-compliant.
                                    Squarespace stores data that is input into forms in
                                    the Marketing tab under Profiles. Instead, you can
                                    embed a HIPAA-compliant form, a link to your client
                                    portal, or simply put your email address.
                                </p>
                            </div>
                        </FadeInSection>
                    </div>

                </div>
            </div>


            <main className="max-w-full mx-auto px-6 pt-16 md:pt-24 pb-20 bg-[#C5C1C9]">
                <div className="text-center mb-16">
                    <FadeInSection>
                        <h1 className="text-[#2D3925] text-5xl md:text-[72px] font-medium tracking-tight mb-6">
                            Book an appointment.
                        </h1>
                    </FadeInSection>
                    <p className="text-[#2D3925] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Please fill out the form below to request a session. I will get back
                        to you within 24 hours to confirm your time.
                    </p>
                </div>

                {/* Contact Form */}
                <form className="max-w-2xl mx-auto space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Name */}
                        <div className="flex flex-col space-y-2">
                            <label className="text-[#2D3925] uppercase text-xs font-bold tracking-widest">Full Name</label>
                            <input
                                type="text"
                                placeholder="Jane Doe"
                                className="bg-transparent border-b border-[#2D3925] py-3 focus:outline-none focus:border-[#344E2C] transition-colors placeholder:opacity-30"
                            />
                        </div>
                        {/* Email */}
                        <div className="flex flex-col space-y-2">
                            <label className="text-[#2D3925] uppercase text-xs font-bold tracking-widest">Email Address</label>
                            <input
                                type="email"
                                placeholder="email@example.com"
                                className="bg-transparent border-b border-[#2D3925] py-3 focus:outline-none focus:border-[#344E2C] transition-colors placeholder:opacity-30"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Service Selection */}
                        <div className="flex flex-col space-y-2">
                            <label className="text-[#2D3925] uppercase text-xs font-bold tracking-widest">Service Type</label>
                            <select className="bg-transparent border-b border-[#2D3925] py-3 focus:outline-none focus:border-[#344E2C] appearance-none cursor-pointer">
                                <option>Individual Therapy</option>
                                <option>15-Minute Consultation</option>
                                <option>Couples Counseling</option>
                            </select>
                        </div>
                        {/* Preferred Date */}
                        <div className="flex flex-col space-y-2">
                            <label className="text-[#2D3925] uppercase text-xs font-bold tracking-widest">Preferred Date</label>
                            <input
                                type="date"
                                className="bg-transparent border-b border-[#2D3925] py-3 focus:outline-none focus:border-[#344E2C] transition-colors"
                            />
                        </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col space-y-2">
                        <label className="text-[#2D3925] uppercase text-xs font-bold tracking-widest">Additional Details</label>
                        <textarea
                            rows="4"
                            placeholder="Tell me a bit about what you&apos;re looking for..."
                            className="bg-transparent border-b border-[#2D3925] py-3 focus:outline-none focus:border-[#344E2C] transition-colors resize-none placeholder:opacity-30"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6 flex justify-center">
                        <button className="bg-[#2D3925] text-[#E5E1D8] px-12 py-4 hover:opacity-90 transition-all uppercase text-sm font-bold tracking-widest">
                            Request Appointment
                        </button>
                    </div>
                </form>

                {/* HIPAA Disclaimer (matching the style of the green box in the first image) */}
                <div className="mt-20 max-w-2xl mx-auto border border-[#2D3925]/20 p-8 text-center italic text-sm text-[#2D3925]/70">
                    This form is for appointment requests only. Please do not share sensitive
                    clinical information here. All data is handled according to our privacy policy.
                </div>
            </main>

            <section className="bg-[#7F7B86] py-2 md:py-30 px-8 md:px-16">
                <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Office Details */}
                    <div className="text-[#FAF7FB] space-y-12">
                        {/* Address Block */}
                        <div className="space-y-6">
                            <h2 className="text-5xl md:text-5xl font-medium tracking-tight">
                                My Office
                            </h2>
                            <div className="text-xl md:text-xl leading-relaxed opacity-90">
                                <p>123th Street 45 W</p>
                                <p>Santa Monica, CA</p>
                            </div>
                        </div>

                        {/* Hours Block */}
                        <div className="space-y-6">
                            <h2 className="text-5xl md:text-5xl font-medium tracking-tight">
                                Hours
                            </h2>
                            <div className="text-xl md:text-xl leading-relaxed opacity-90">
                                <p>Monday – Friday</p>
                                <p>10am – 6pm</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: The Map */}
                    <div className="relative w-[650px] h-[400px] md:h-[400px] overflow-hidden shadow-2xl pr-10">
                        {/* Note: For a live project, you would replace the 'src' with your 
            actual Google Maps Embed API key and set the style to 'grayscale'.
          */}
                        <iframe
                            title="Office Location"
                            src="https://www.google.com/maps?q=123th%20Street%2045%20W,%20Santa%20Monica,%20CA%2090401&output=embed"
                            className="w-full h-full grayscale contrast-125 brightness-110 border-0"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>

                    </div>

                </div>
            </section>


            {/* find my socials */}

            <section className="bg-[#9F9AA2] py-20 md:py-20 px-8 md:px-16 selection:bg-[#2D3925] selection:text-white">
                <FadeInSection>
                    <div className="max-w-8xl mx-auto">
                        {/* Header */}
                        <h2 className="text-[#2F3E1D] text-5xl md:text-6xl font-medium tracking-tight mb-8">
                            Find me on social.
                        </h2>

                        {/* Image Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {socialImages.map((image) => (
                                <div
                                    key={image.id}
                                    className="relative aspect-square overflow-hidden cursor-pointer group"
                                >
                                    {/* Image with Hover Effect */}
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:opacity-90"
                                    />

                                    {/* Subtle Overlay on Hover */}
                                    <div className="absolute inset-0 bg-[#2D3925]/0 group-hover:bg-[#2D3925]/5 transition-colors duration-500" />
                                </div>
                            ))}
                        </div>
                    </div>
                </FadeInSection>
            </section>

            <div className="max-w-full border-t border-[#2D3925]">

            </div>
        </>
    );
};

export default ContactPage;