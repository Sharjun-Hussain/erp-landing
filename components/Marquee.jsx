
export default function Marquee() {
    return (
        <>
            <div
                    className="py-10 border-y border-white/5 overflow-hidden bg-[#0a0a0c] relative z-20 flex whitespace-nowrap marquee-container">
                    <div
                        className="marquee-content text-4xl md:text-6xl font-bold text-white/5 uppercase tracking-widest flex gap-12 items-center will-change-transform">
                        <span>Fast Checkout</span> <span>•</span>
                        <span>Real-Time Inventory</span> <span>•</span>
                        <span>Never Oversell</span> <span>•</span>
                        <span>Automated Accounting</span> <span>•</span>
                        <span>WhatsApp CRM</span> <span>•</span>
                        <span>Fast Checkout</span> <span>•</span>
                        <span>Real-Time Inventory</span> <span>•</span>
                        <span>Never Oversell</span>
                    </div>
                </div>
        </>
    );
}