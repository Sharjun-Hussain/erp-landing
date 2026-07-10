export default function PackageIncludes() {
    return (
        <section id="package-includes" className="py-24 relative z-20 bg-[#09090b] border-t border-white/5">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05),transparent_70%)] pointer-events-none"></div>
            
            <div className="max-w-[1200px] mx-auto px-6 lg:px-10 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 package-header will-change-transform">
                    <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-4 block">
                        What You Get
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 flex items-center justify-center gap-3">
                        <span className="text-blue-400 text-2xl md:text-4xl">✦</span> Every Package Includes
                    </h2>
                    <p className="text-slate-400 text-base md:text-lg">
                        Best warranty and support included for free with every purchase.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    
                    {/* Card 1: Warranty */}
                    <div className="package-card bg-[#121214] border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center hover:bg-[#18181b] hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(16,185,129,0.15)] will-change-transform group">
                        <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                            <svg width="32" height="32" viewBox="0 0 48 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 0L0 9V26.46C0 41.34 10.23 55.14 24 58.5C37.77 55.14 48 41.34 48 26.46V9L24 0ZM43.5 26.46C43.5 38.97 35.31 50.31 24 53.79C12.69 50.31 4.5 38.97 4.5 26.46V12.45L24 5.16L43.5 12.45V26.46Z" fill="currentColor" fillOpacity="0.8"/>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Lifetime Software Warranty</h3>
                        <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                            Your software is protected forever. We give a lifetime warranty on all our POS systems. No hidden fees.
                        </p>
                    </div>

                    {/* Card 2: Updates */}
                    <div className="package-card bg-[#121214] border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center hover:bg-[#18181b] hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(59,130,246,0.15)] will-change-transform group">
                        <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4C7.58 4 4.01 7.58 4.01 12C4.01 16.42 7.58 20 12 20C15.73 20 18.84 17.45 19.73 14H17.65C16.83 16.33 14.61 18 12 18C8.69 18 6 15.31 6 12C6 8.69 8.69 6 12 6C13.66 6 15.14 6.69 16.22 7.78L13 11H20V4L17.65 6.35Z" fill="currentColor"/>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Free Lifetime Updates</h3>
                        <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                            Get new features and security updates for free, forever.
                        </p>
                    </div>

                    {/* Card 3: Support */}
                    <div className="package-card bg-[#121214] border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center hover:bg-[#18181b] hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(168,83,186,0.15)] will-change-transform group">
                        <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform duration-300 text-2xl">
                            🤝
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Free Service & Support</h3>
                        <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                            Our local support team is ready to help 24/7. Get free technical help and training anytime you need it.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
