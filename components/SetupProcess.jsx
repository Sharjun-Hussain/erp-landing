export default function SetupProcess() {
    return (
        <section id="setup-process" className="py-24 relative z-20 bg-[#09090b] border-t border-white/5 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(251,191,36,0.08),transparent_50%)] pointer-events-none"></div>

            <div className="max-w-[1000px] mx-auto px-6 lg:px-10 relative z-10">
                {/* Header */}
                <div className="text-center mb-24 setup-header will-change-transform flex flex-col items-center">
                    <div className="border border-purple-500/20 rounded-full px-4 py-1.5 mb-6 bg-purple-500/10 text-xs font-semibold text-purple-300 tracking-widest uppercase">
                        Onboarding Process
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                        Easy Setup. <br /> <span className="text-slate-500">Fast Results.</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        We do all the hard work for you. From planning to final setup, our process is built around your specific business needs.
                    </p>
                </div>

                {/* Vertical Timeline */}
                <div className="relative">
                    {/* Central Line */}
                    <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-[1px]"></div>
                    <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500/50 via-blue-500/50 to-emerald-500/50 -translate-x-[1px] h-full scroll-progress-line origin-top scale-y-0"></div>

                    {/* Step 1 */}
                    <div className="setup-card relative flex flex-col md:flex-row justify-between items-start md:items-center w-full mb-20 group">
                        <div className="order-2 md:order-1 md:w-5/12 pl-20 md:pl-0 text-left md:text-right pr-0 md:pr-12">
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">1. Understand Your Needs</h3>
                            <p className="text-slate-400 text-base leading-relaxed">
                                We call you to understand your business. We write down exactly how your inventory, branches, and billing should work before we start.
                            </p>
                        </div>
                        
                        <div className="absolute left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 w-[56px] h-[56px] rounded-full bg-[#09090b] border-4 border-[#09090b] flex items-center justify-center z-10">
                            <div className="w-full h-full rounded-full bg-purple-500/20 border border-purple-500/50 flex items-center justify-center text-purple-400 font-bold shadow-[0_0_20px_rgba(168,83,186,0.3)] group-hover:scale-110 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                                01
                            </div>
                        </div>

                        <div className="order-3 md:order-3 md:w-5/12 hidden md:block"></div>
                    </div>

                    {/* Step 2 */}
                    <div className="setup-card relative flex flex-col md:flex-row justify-between items-start md:items-center w-full mb-20 group">
                        <div className="order-2 md:order-1 md:w-5/12 hidden md:block"></div>
                        
                        <div className="absolute left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 w-[56px] h-[56px] rounded-full bg-[#09090b] border-4 border-[#09090b] flex items-center justify-center z-10">
                            <div className="w-full h-full rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center text-blue-400 font-bold shadow-[0_0_20px_rgba(59,130,246,0.3)] group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                                02
                            </div>
                        </div>

                        <div className="order-3 md:order-3 md:w-5/12 pl-20 md:pl-12 text-left">
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">2. Custom Development</h3>
                            <p className="text-slate-400 text-base leading-relaxed">
                                Meet with our developers. In just 3 days, we change the screens, software flow, and features until it matches exactly what you want.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="setup-card relative flex flex-col md:flex-row justify-between items-start md:items-center w-full group">
                        <div className="order-2 md:order-1 md:w-5/12 pl-20 md:pl-0 text-left md:text-right pr-0 md:pr-12">
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">3. Test and Pay</h3>
                            <p className="text-slate-400 text-base leading-relaxed">
                                You test the completed software. When your team is 100% happy and everything works perfectly, then you pay. No risk for you.
                            </p>
                        </div>
                        
                        <div className="absolute left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 w-[56px] h-[56px] rounded-full bg-[#09090b] border-4 border-[#09090b] flex items-center justify-center z-10">
                            <div className="w-full h-full rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 font-bold shadow-[0_0_20px_rgba(16,185,129,0.3)] group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                                03
                            </div>
                        </div>

                        <div className="order-3 md:order-3 md:w-5/12 hidden md:block"></div>
                    </div>

                </div>
            </div>
        </section>
    );
}
