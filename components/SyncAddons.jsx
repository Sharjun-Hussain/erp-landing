
export default function SyncAddons() {
    return (
        <>
            <section id="sync-addons"
                    className="py-32 relative z-20 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.08),transparent_60%)] border-t border-white/5 overflow-hidden">
                    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center gap-16">
            
                        <div className="lg:w-1/2 sync-text will-change-transform">
                            <div
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
                                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span> Powerful Add-ons
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">Real-Time Inventory Sync.</h2>
                            <p className="text-slate-400 text-lg mb-6">Never oversell an item again. When a sale happens in your physical store, your website inventory drops instantly. When an order is placed online, your system logs it, deducts stock, and updates your accounting.</p>
            
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-slate-300 font-medium">
                                    <div
                                        className="w-6 h-6 rounded-md bg-white/5 flex items-center justify-center text-white text-xs border border-white/10">
                                        1</div>
                                    Shopify Native Integration
                                </li>
                                <li className="flex items-center gap-3 text-slate-300 font-medium">
                                    <div
                                        className="w-6 h-6 rounded-md bg-white/5 flex items-center justify-center text-white text-xs border border-white/10">
                                        2</div>
                                    Custom Frontend E-commerce (Next.js/React)
                                </li>
                                <li className="flex items-center gap-3 text-slate-300 font-medium">
                                    <div
                                        className="w-6 h-6 rounded-md bg-white/5 flex items-center justify-center text-white text-xs border border-white/10">
                                        3</div>
                                    WooCommerce & Third-Party APIs
                                </li>
                            </ul>
                        </div>
            
                        <div
                            className="lg:w-1/2 w-full relative h-[400px] flex items-center justify-center sync-visual will-change-transform">
            
                            <div
                                className="absolute z-20 w-32 h-32 bg-gradient-to-br from-[#18181b] to-[#0d0d12] border border-white/20 rounded-2xl flex flex-col items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.2)]">
                                <div className="w-8 h-8 rounded-full bg-orb shadow-[0_0_20px_rgba(168,83,186,0.4)] mb-2"></div>
                                <span className="text-white font-bold text-sm">Inzeedo</span>
                            </div>
            
                            <div
                                className="absolute z-10 left-0 lg:left-10 w-28 h-28 bg-[#121214] border border-[#95BF47]/30 rounded-2xl flex flex-col items-center justify-center transform -translate-y-16">
                                <span className="text-3xl mb-1 text-[#95BF47]">🛍️</span>
                                <span className="text-slate-300 font-semibold text-xs">Shopify</span>
                            </div>
            
                            <div
                                className="absolute z-10 right-0 lg:right-10 w-28 h-28 bg-[#121214] border border-purple-500/30 rounded-2xl flex flex-col items-center justify-center transform translate-y-16">
                                <span className="text-3xl mb-1 text-purple-400">💻</span>
                                <span className="text-slate-300 font-semibold text-xs">Custom Web</span>
                            </div>
            
                            <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none"
                                style={{ 'filter': 'drop-shadow(0 0 8px rgba(59,130,246,0.5))' }}>
                                <path d="M 120 120 L 250 200" stroke="rgba(149, 191, 71, 0.5)" strokeWidth="2"
                                    strokeDasharray="6,6" fill="none" className="animate-flow-reverse" />
                                <path d="M 100 140 L 230 220" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="2"
                                    strokeDasharray="6,6" fill="none" className="animate-flow" />
            
                                <path d="M 380 200 L 520 270" stroke="rgba(168, 83, 186, 0.5)" strokeWidth="2"
                                    strokeDasharray="6,6" fill="none" className="animate-flow" />
                                <path d="M 360 220 L 500 290" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="2"
                                    strokeDasharray="6,6" fill="none" className="animate-flow-reverse" />
                            </svg>
                        </div>
                    </div>
                </section>
        </>
    );
}