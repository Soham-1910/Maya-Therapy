import Image from "next/image";
import Link from "next/link";
import SubscribeSection from "../Sections/SubscribeSection";
import Footer from "../components/Footer";
import FadeInSection from "../components/FadeInSection";


export default function BlogPage() {
    const blogPost = {
        slug: "blog-post-one",
        date: "3/11/19",
        title: "Blog Post One",
        img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800",
    };
    return (
        <>
            <section className="min-h-screen bg-[#DCD1E6] pb-12">
                <div className="mx-auto flex max-w-[1440px] pl-[106px] pt-[120px]">

                    {/* LEFT – ARCH IMAGE */}
                    <FadeInSection>
                        <div className="relative h-[640px] w-[460px] flex-shrink-0 overflow-hidden rounded-t-full">
                            <Image
                                src="/assets/blog.jpg"
                                alt="Reading moment"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </FadeInSection>
                    {/* RIGHT – TEXT */}
                    <div className="ml-[98px] flex max-w-[620px] flex-col justify-center">
                        <FadeInSection>
                            <h1 className=" mt-[-14px] font-[var(--font-gopher)] text-[80px] leading-[1.05] font-medium text-[#223614]">
                                The Maya Blog
                            </h1>
                        </FadeInSection>
                        <p className="mt-10 font-[var(--font-gopher)] w-sm text-[24px] leading-[1.7] tracking-wide text-[#223614]">
                            Where I share my journey and insights on healing, heart, and wholeness.
                        </p>

                        <p className="mt-4 font-[var(--font-gopher)] text-[18px] font-bold tracking-wide text-[#223614]">
                            Welcome!
                        </p>
                    </div>

                </div>
            </section>
            <div className="bg-[#C5C1C9] min-h-screen font-[var(--font-gopher)] pt-14">
                <section className="max-w-4xl mx-auto px-14 pb-16">
                    {/* Image */}
                    <FadeInSection>
                        <div className="aspect-[4/2.6] overflow-hidden mb-6 bg-white/20">
                            <img
                                src={blogPost.img}
                                alt={blogPost.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </FadeInSection>

                    {/* Content */}
                    <div className="space-y-3 text-[#2D3925]">
                        <p className="text-xs font-medium tracking-widest opacity-60">
                            {blogPost.date}
                        </p>
                        <FadeInSection>
                            <h2 className="text-5xl font-medium tracking-tight">
                                {blogPost.title}
                            </h2>
                        </FadeInSection>
                        <div className="pt-6">
                            <Link
                                href="/blog/one"
                                className="relative inline-block text-lg border-b-2 border-[#2D3925] font-medium text-[#2D3925] transition-opacity hover:opacity-60"
                            >
                                Read More
                                <span className="absolute left-0 -bottom-1 h-[1.5px] w-full bg-[#2D3925] scale-x-0 origin-left transition-transform duration-300 hover:scale-x-100" />
                            </Link>

                        </div>

                    </div>
                </section>
            </div>
            <SubscribeSection />
            <Footer />
        </>
    );
}
