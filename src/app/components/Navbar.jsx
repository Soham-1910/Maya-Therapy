"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react"; // optional hamburger icon

export default function Navbar() {
    const [hidden, setHidden] = useState(false); // scroll hide/show
    const [lastScrollY, setLastScrollY] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false); // mobile menu
    const pathname = usePathname();

    // Scroll hide/show
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setHidden(currentScrollY > lastScrollY && currentScrollY > 50);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const isActive = (path) => {
        if (path === "/") return pathname === "/";
        return pathname.startsWith(path);
    };

    const links = [
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <motion.nav
            animate={{ y: hidden ? -100 : 0 }}
            transition={{ type: "tween", duration: 0.5 }}
            className="fixed top-0 z-50 w-full"
        >
            <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4">
                {/* LOGO */}
                <Link
                    href="/"
                    className="font-[var(--font-gopher)] text-2xl sm:text-3xl md:text-4xl font-medium text-[#223614]"
                >
                    Maya Reynolds
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex gap-10 font-[var(--font-gopher)] text-base sm:text-lg md:text-xl font-normal text-[#223614]">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`relative transition-opacity hover:opacity-60 ${isActive(link.href) ? "opacity-100" : ""
                                }`}
                        >
                            {link.name}
                            <span
                                className={`absolute left-0 -bottom-1 h-[1.5px] w-full bg-[#223614] transition-all duration-300 ${isActive(link.href) ? "scale-x-100" : "scale-x-0"
                                    }`}
                            />
                        </Link>
                    ))}
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        <Menu size={28} className="text-[#223614]" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white w-full overflow-hidden"
                    >
                        <div className="flex flex-col gap-4 px-6 py-4 font-[var(--font-gopher)] text-[#223614]">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className={`relative py-2 transition-opacity hover:opacity-60 ${isActive(link.href) ? "opacity-100" : ""
                                        }`}
                                >
                                    {link.name}
                                    <span
                                        className={`absolute left-0 -bottom-1 h-[1.5px] w-full bg-[#223614] transition-all duration-300 ${isActive(link.href) ? "scale-x-100" : "scale-x-0"
                                            }`}
                                    />
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
