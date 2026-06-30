"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register ScrollTrigger exactly once
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
    const footerRef = useRef(null);

    useGSAP(() => {
        // 1. CTA Section: Smooth slide up and fade
        gsap.fromTo(
            ".footer-cta",
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".footer-cta",
                    start: "top 90%", // Triggers when the top of the element hits 90% down the viewport
                },
            }
        );

        // 2. Grid Columns: Staggered entrance with a slight spring feel
        gsap.fromTo(
            ".footer-grid-item",
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.1, // 0.1 seconds between each column animating
                ease: "back.out(1.2)", // Gives it that buttery "Framer Motion" spring bounce
                scrollTrigger: {
                    trigger: ".footer-grid",
                    start: "top 85%",
                },
            }
        );

        // 3. Footer Bottom: Simple fade
        gsap.fromTo(
            ".footer-bottom",
            { opacity: 0 },
            {
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".footer-bottom",
                    start: "top 95%",
                },
            }
        );

        // 4. Massive Text: Epic slow slide up
        gsap.fromTo(
            "#massive-footer-text",
            { y: "100%", opacity: 0 },
            {
                y: "33%",
                opacity: 1,
                duration: 1.5,
                ease: "power4.out", // Deep deceleration curve
                scrollTrigger: {
                    trigger: "#premium-footer",
                    start: "top 60%",
                },
            }
        );
    }, { scope: footerRef }); // Scope ensures GSAP only selects elements inside this specific footer

    return (
        <footer
            ref={footerRef}
            id="premium-footer"
            className="relative bg-white rounded-t-[4rem] pt-24 pb-8 z-[999] text-slate-900 overflow-hidden"
        >
            {/* Subtle background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-blue-400/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">

                {/* CTA Section */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-16 border-b border-slate-200 footer-cta">
                    <div className="mb-8 md:mb-0">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tighter mb-4">
                            Ready to unify?
                        </h2>
                        <p className="text-slate-600 text-lg max-w-md">
                            Join visionary enterprises running their core operations on the Inzeedo ecosystem.
                        </p>
                    </div>
                    <a
                        href="#"
                        className="relative inline-flex h-14 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white group transition-transform duration-500 ease-out hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]"
                    >
                        {/* Spinning border handled by Tailwind */}
                        <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3b82f6_0%,#ffffff_50%,#a855f7_100%)] transition-all" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-8 font-bold text-slate-900 backdrop-blur-3xl group-hover:bg-slate-50 transition-colors duration-300">
                            Deploy Now
                        </span>
                    </a>
                </div>

                {/* Footer Links Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 py-16 footer-grid">

                    {/* Brand Column */}
                    <div className="lg:col-span-2 pr-0 lg:pr-12 footer-grid-item">
                        <a href="#" className="flex items-center gap-3 text-2xl font-bold text-slate-900 mb-6 group">
                            <div className="w-6 h-6 rounded-full bg-blue-600 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>
                            Inzeedo ERP
                        </a>
                        <p className="text-slate-600 text-sm leading-relaxed mb-8">
                            The complete point-of-sale and business management software. Built for retail, restaurants, manufacturing, and growing enterprises.
                        </p>
                    </div>

                    {/* Modules Column */}
                    <div className="footer-grid-item">
                        <h4 className="text-slate-900 font-bold mb-6 tracking-widest uppercase text-xs">Modules</h4>
                        <ul className="space-y-4 text-sm text-slate-600">
                            {['Omnichannel POS', 'Advanced Inventory & GRN', 'Manufacturing & Recipes', 'WhatsApp CRM'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="group flex items-center hover:text-blue-600 transition-colors duration-300">
                                        <span className="transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 mr-2 text-blue-600">
                                            →
                                        </span>
                                        <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                                            {item}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Platform Column */}
                    <div className="footer-grid-item">
                        <h4 className="text-slate-900 font-bold mb-6 tracking-widest uppercase text-xs">Platform</h4>
                        <ul className="space-y-4 text-sm text-slate-600">
                            {['Hardware & QZ Tray', 'Shopify Sync', 'Shift Management'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="group flex items-center hover:text-blue-600 transition-colors duration-300">
                                        <span className="transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 mr-2 text-blue-600">
                                            →
                                        </span>
                                        <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                                            {item}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div className="footer-grid-item">
                        <h4 className="text-slate-900 font-bold mb-6 tracking-widest uppercase text-xs">Company</h4>
                        <ul className="space-y-4 text-sm text-slate-600">
                            {['About Us', 'Privacy'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="group flex items-center hover:text-blue-600 transition-colors duration-300">
                                        <span className="transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 mr-2 text-blue-600">
                                            →
                                        </span>
                                        <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                                            {item}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-200 text-slate-500 text-xs font-medium footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Inzeedo Technologies. All rights reserved.</p>
                </div>
            </div>

            {/* Massive Background Text */}
            <div className="w-full overflow-hidden mt-12 flex justify-center items-end opacity-5 pointer-events-none">
                <h1
                    id="massive-footer-text"
                    className="text-[13vw] font-black text-slate-900 leading-[0.7] tracking-tighter"
                >
                    INZEEDO
                </h1>
            </div>
        </footer>
    );
}