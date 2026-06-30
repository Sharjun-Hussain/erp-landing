
export default function MobileCards() {
    return (
        <>
            <section className="py-24 bg-transparent md:hidden relative z-20 border-t border-white/5">
                    <div className="px-6">
                        <h2 className="text-5xl font-black text-white mb-12 uppercase tracking-tighter text-center">Work from Anywhere.
                        </h2>
                        <div className="space-y-6 text-left">
                            <div className="bg-[#121214] border border-blue-500/30 rounded-3xl p-8 mobile-card">
                                <h3 className="text-2xl font-bold text-white mb-2">🌐 Web Dashboard</h3>
                                <p className="text-slate-400">Log in from anywhere to check sales and inventory.</p>
                            </div>
                            <div className="bg-[#121214] border border-emerald-500/40 rounded-3xl p-8 mobile-card">
                                <h3 className="text-2xl font-bold text-white mb-2">💻 Fast Desktop Setup</h3>
                                <p className="text-slate-400">Connect receipt printers and barcode scanners instantly.</p>
                            </div>
                        </div>
                    </div>
                </section>
        </>
    );
}