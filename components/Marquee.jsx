
export default function Marquee() {
    return (
        <>
            <div
                    className="py-10 border-y border-white/5 overflow-hidden bg-[#0a0a0c] relative z-20 flex whitespace-nowrap marquee-container">
                    <div
                        className="marquee-content animate-marquee text-4xl md:text-6xl font-black text-slate-400 capitalize tracking-tight flex gap-24 items-center will-change-transform pr-24">
                        <span>omnichannel retail erp</span>
                        <span>cloud inventory software</span>
                        <span>b2b wholesale billing</span>
                        <span>multi-store management</span>
                        <span>manufacturing tracking</span>
                        <span>supermarket pos system</span>
                        {/* Repeat for seamless loop */}
                        <span>omnichannel retail erp</span>
                        <span>cloud inventory software</span>
                        <span>b2b wholesale billing</span>
                        <span>multi-store management</span>
                        <span>manufacturing tracking</span>
                        <span>supermarket pos system</span>
                    </div>
                </div>
        </>
    );
}