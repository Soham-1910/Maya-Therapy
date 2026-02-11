import Footer from "../../components/Footer";
import React from "react";
import Link from "next/link";

const BlogPostPage = () => {
    // Mock data for a single post
    const post = {
        date: "3/11/19",
        title: "Blog Post One",
        category: "HEALING",
        content: [
            "Life can feel overwhelming, and the work of understanding ourselves is rarely a straight path.In this space, I share reflections and insights on navigating anxiety, stress, and the lingering impact of past experiences with presence, compassion, and care.",
            "Healing often happens in small, everyday moments: how we breathe, how we respond to challenges, and how we hold space for our emotions.",
            "I hope these posts offer a space to pause, reflect, and find pieces of your own journey mirrored here, whether you’re seeking calm, clarity, or a deeper understanding of yourself."
        ]
    };

    return (
        <>
            <div className="bg-[#DCD1E6] min-h-screen font-[var(--font-gopher)] selection:bg-[#2D3925] selection:text-[#F2EDE7]">
                {/* --- POST HEADER --- */}
                <article className="max-w-full mx-auto px-8 pt-30 pb-12">
                    <div className="text-center space-y-6 mb-8">
                        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#2D3925] opacity-60">
                            {post.category} — {post.date}
                        </p>
                        <h1 className="text-5xl md:text-[82px] text-[#2D3925] font-medium tracking-tight leading-tight">
                            {post.title}
                        </h1>
                    </div>

                    {/* --- POST CONTENT --- */}
                    <div className="max-w-2xl mx-auto">
                        <div className="space-y-8 text-[#2D3925] text-lg md:text-xl leading-[1.8] opacity-90">
                            {post.content.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                    {/* --- BACK TO BLOG NAVIGATION --- */}
                    <div className="mt-20 ml-10">
                        <Link
                            href="/blog"
                            className="text-5xl font-medium tracking-wide text-[#2D3925] hover:opacity-50 transition-all duration-300"
                        >
                            <span className="material-symbols-outlined">chevron_left</span>Back to Blog
                        </Link>
                    </div>

                </article>
            </div>
            <div className=" border-b border-[#2D3925] "></div>
            <Footer />
        </>
    );
};

export default BlogPostPage;