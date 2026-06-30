
export default function Marquee() {
    return (
        <>
            <div
                    className="py-10 border-y border-white/5 overflow-hidden bg-[#0a0a0c] relative z-20 flex whitespace-nowrap marquee-container">
                    <div
                        className="marquee-content animate-marquee text-5xl md:text-7xl font-black text-slate-200 uppercase tracking-widest flex gap-16 items-center will-change-transform">
                        <span>ZERO DOWNTIME POS</span> <span className="text-white/10">•</span>
                        <span>OMNICHANNEL READY</span> <span className="text-white/10">•</span>
                        <span>ELIMINATE OVERSELLING</span> <span className="text-white/10">•</span>
                        <span>UNIFIED DASHBOARD</span> <span className="text-white/10">•</span>
                        <span>CRM THAT CONVERTS</span> <span className="text-white/10">•</span>
                        <span>BUILT FOR SCALE</span> <span className="text-white/10">•</span>
                        <span>ZERO DOWNTIME POS</span> <span className="text-white/10">•</span>
                        <span>OMNICHANNEL READY</span> <span className="text-white/10">•</span>
                        <span>ELIMINATE OVERSELLING</span>
                    </div>
                </div>
        </>
    );
}