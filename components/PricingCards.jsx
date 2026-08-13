'use client';

import { useTranslations } from 'next-intl';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function PricingCards() {
    // using basic placeholder translations or text
    // A standard translations setup if namespace is missing:
    // const t = useTranslations('Pricing');
    const containerRef = useRef(null);

    useGSAP(() => {
        // Hero Intro Animation
        gsap.fromTo('.pricing-header', 
            { y: 30, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.1 }
        );
        gsap.fromTo('.pricing-sub', 
            { y: 20, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.3 }
        );

        // Cards Staggered Animation
        gsap.fromTo('.pricing-card', 
            { y: 60, opacity: 0 }, 
            { 
                y: 0, 
                opacity: 1, 
                stagger: 0.2, 
                duration: 1, 
                ease: 'power3.out', 
                delay: 0.5 
            }
        );
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative z-20 py-32 bg-[#09090b] text-white overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.08),transparent_70%)] -z-10 pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
                        Transparent Pricing
                    </div>
                    <h1 className="pricing-header text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 will-change-transform">
                        Simple plans for <br className="hidden sm:block" />
                        <span className="text-gradient">growing businesses</span>
                    </h1>
                    <p className="pricing-sub text-slate-400 text-lg md:text-xl max-w-2xl mx-auto will-change-transform">
                        No hidden fees. No surprise charges. Choose the plan that perfectly fits your retail or manufacturing operations.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                    
                    {/* Starter Plan */}
                    <div className="pricing-card will-change-transform relative bg-[#121214] border border-white/5 rounded-[2rem] p-8 md:p-10 hover:border-blue-500/30 transition-all duration-300 group">
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-slate-200 mb-2">Starter</h3>
                            <p className="text-slate-400 text-sm mb-6">Perfect for single stores and small operations just getting started.</p>
                            <div className="flex items-baseline gap-2 mb-2">
                                <span className="text-5xl font-bold text-white tracking-tighter">$49</span>
                                <span className="text-slate-500 font-medium">/mo</span>
                            </div>
                            <p className="text-blue-400 text-sm font-semibold">Billed annually</p>
                        </div>
                        
                        <a href="#" className="flex justify-center items-center w-full h-12 bg-white/5 hover:bg-white/10 text-white rounded-xl font-semibold transition-colors mb-8 border border-white/10 shadow-sm">
                            Get Started
                        </a>

                        <div className="space-y-4">
                            <div className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-4">What's included</div>
                            {[
                                "1 Store Location",
                                "2 POS Users",
                                "Basic Inventory Management",
                                "Standard Retail Analytics",
                                "Email Support"
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-slate-300 text-sm">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Professional Plan (Highlighted) */}
                    <div className="pricing-card will-change-transform relative bg-[#121214] border border-blue-500/40 rounded-[2rem] p-8 md:p-10 hover:border-blue-400 transition-all duration-300 group shadow-[0_0_40px_rgba(59,130,246,0.1)] lg:-translate-y-4">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-lg">
                            Most Popular
                        </div>
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-slate-200 mb-2">Professional</h3>
                            <p className="text-slate-400 text-sm mb-6">For growing businesses needing advanced inventory and multi-store tools.</p>
                            <div className="flex items-baseline gap-2 mb-2">
                                <span className="text-5xl font-bold text-white tracking-tighter">$99</span>
                                <span className="text-slate-500 font-medium">/mo</span>
                            </div>
                            <p className="text-purple-400 text-sm font-semibold">Billed annually</p>
                        </div>
                        
                        <a href="#" className="relative flex justify-center items-center w-full h-12 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold transition-colors mb-8 shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                            Start Free Trial
                        </a>

                        <div className="space-y-4">
                            <div className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-4">Everything in Starter, plus:</div>
                            {[
                                "Up to 5 Store Locations",
                                "Unlimited POS Users",
                                "Advanced multi-store inventory",
                                "Manufacturing & Recipes (BOM)",
                                "Priority 24/7 Support",
                                "Shopify Integration"
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-slate-200 text-sm font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="pricing-card will-change-transform relative bg-[#121214] border border-white/5 rounded-[2rem] p-8 md:p-10 hover:border-emerald-500/30 transition-all duration-300 group">
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-slate-200 mb-2">Enterprise</h3>
                            <p className="text-slate-400 text-sm mb-6">Customized solutions for massive retail chains and large-scale manufacturing.</p>
                            <div className="flex items-baseline gap-2 mb-2">
                                <span className="text-5xl font-bold text-white tracking-tighter">Custom</span>
                            </div>
                            <p className="text-emerald-400 text-sm font-semibold">Available direct</p>
                        </div>
                        
                        <a href="#" className="flex justify-center items-center w-full h-12 bg-white/5 hover:bg-white/10 text-white rounded-xl font-semibold transition-colors mb-8 border border-white/10 shadow-sm">
                            Contact Sales
                        </a>

                        <div className="space-y-4">
                            <div className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-4">Everything in Pro, plus:</div>
                            {[
                                "Unlimited Locations",
                                "Dedicated Account Manager",
                                "Custom API Access",
                                "Dedicated Cloud Server",
                                "Custom Data Migration",
                                "White-label Options"
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-slate-300 text-sm">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
