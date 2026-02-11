import React from "react";
import FadeInSection from "../components/FadeInSection";

const SubscribeSection = () => {
    return (
        <section className="bg-[#7F7B86] py-25 px-6 md:px-16 selection:bg-[#E5E1D8] selection:text-[#8B8A52]">
            <div className="max-w-6xl mx-auto border border-white/40 p-18 relative">

                {/* Content Container */}
                <div className="max-w-2xl mx-auto text-center space-y-4">

                    {/* Header */}
                    <FadeInSection>
                        <h2 className="text-[#E5E1D8] text-5xl font-medium tracking-tight">
                            Subscribe
                        </h2>
                    </FadeInSection>
                    {/* Subtext */}
                    <p className="text-[#E5E1D8] text-xl opacity-90 leading-relaxed">
                        Sign up with your email address to receive news and updates.
                    </p>

                    {/* Form Fields */}
                    <form className="max-w-md mx-auto flex items-center gap-4 pt-4">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="flex-1 bg-white px-6 py-4 text-[#2D3925] placeholder:text-[#2D3925]/40 focus:outline-none text-lg"
                            required
                        />
                        <FadeInSection>
                            <button
                                type="submit"
                                className="bg-[#7F7B86] border border-white/30 text-[#E5E1D8] px-10 py-4 uppercase text-sm font-bold tracking-widest hover:bg-[#6B6772] transition-colors"
                            >
                                Sign Up
                            </button>
                        </FadeInSection>
                    </form>

                    {/* Footer Text */}
                    <p className="text-[#E5E1D8] text-md  opacity-80 pt-4">
                        We respect your privacy.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default SubscribeSection;