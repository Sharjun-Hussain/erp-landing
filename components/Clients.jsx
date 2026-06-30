
export default function Clients() {
    return (
        <>
            <section id="clients" className="py-12 border-t border-white/5 bg-[#0a0a0c] overflow-hidden relative z-20">
                    <div className="text-center mb-10 client-header will-change-transform">
                        <p className="text-slate-500 text-sm font-semibold tracking-widest uppercase">Powering operations for industry
                            leaders</p>
                    </div>
            
                    <div className="relative flex overflow-x-hidden group">
                        <div
                            className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0c] to-transparent z-10 pointer-events-none">
                        </div>
                        <div
                            className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a0a0c] to-transparent z-10 pointer-events-none">
                        </div>
            
                        <div
                            className="animate-marquee flex whitespace-nowrap items-center gap-16 md:gap-24 opacity-50 hover:opacity-100 transition-opacity duration-300">
                            <span className="text-2xl font-bold text-white tracking-tighter">NEXUS<span
                                    className="text-blue-500">CORP</span></span>
                            <span className="text-2xl font-black text-white uppercase tracking-widest">Aura</span>
                            <span className="text-2xl font-semibold text-slate-300 italic">Vanguard Retail</span>
                            <span className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                                <div className="w-4 h-4 bg-purple-500 rounded-sm"></div> PrimeTech
                            </span>
                            <span className="text-2xl font-medium text-white tracking-widest uppercase">Horizon</span>
                            <span className="text-2xl font-bold text-white tracking-tighter">NEXUS<span
                                    className="text-blue-500">CORP</span></span>
                            <span className="text-2xl font-black text-white uppercase tracking-widest">Aura</span>
                            <span className="text-2xl font-semibold text-slate-300 italic">Vanguard Retail</span>
                            <span className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                                <div className="w-4 h-4 bg-purple-500 rounded-sm"></div> PrimeTech
                            </span>
                        </div>
                    </div>
                </section>
        </>
    );
}