
export default function Modules() {
    return (
        <>
            <section id="modules" className="py-24 relative z-20 bg-[#09090b]">
                    <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative items-start">
            
                            {/**/}
                            <div className="lg:w-1/3 lg:sticky top-32 z-10 module-text-container">
                                <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-4 block">Unified
                                    Operations</span>
                                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">Everything you need to run your business.</h2>
                                <p className="text-slate-400 text-lg mb-8">Stop switching between different apps. Our all-in-one software connects your physical store, online shop, and back office automatically.</p>
            
                                <div className="hidden lg:flex flex-col gap-4">
                                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                        <div className="h-full bg-blue-500 w-0 rounded-full scroll-progress"></div>
                                    </div>
                                    <p className="text-xs text-slate-500 font-medium uppercase tracking-widest">Scroll to explore
                                        modules</p>
                                </div>
                            </div>
            
                            {/**/}
                            <div className="lg:w-2/3 flex flex-col gap-12 md:gap-32 pb-24 module-cards-container perspective-1000">
            
                                {/**/}
                                <div
                                    className="module-card bg-gradient-to-br from-[#18181b] to-[#0d0d12] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group">
                                    <div
                                        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_40%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        <span
                                            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white">Web
                                            App</span>
                                        <span
                                            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white">Mobile
                                            App</span>
                                        <span
                                            className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-semibold">Barcode
                                            Printing</span>
                                    </div>
                                    <div
                                        className="w-14 h-14 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 text-2xl mb-6">
                                        🏪</div>
                                    <h3 className="text-3xl font-bold text-white mb-4">Fast Retail Point of Sale (POS)</h3>
                                    <p className="text-slate-400 text-lg leading-relaxed">Keep the line moving. Scan barcodes, print receipts, and accept payments in seconds. Works with your existing hardware, and inventory deductions sync globally instantly.</p>
                                </div>
            
                                {/**/}
                                <div
                                    className="module-card bg-gradient-to-br from-[#18181b] to-[#0d0d12] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group">
                                    <div
                                        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent_40%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        <span
                                            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white">Customer
                                            Sync</span>
                                        <span
                                            className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-semibold">Web
                                            Automation</span>
                                    </div>
                                    <div
                                        className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400 text-2xl mb-6">
                                        💬</div>
                                    <h3 className="text-3xl font-bold text-white mb-4">Automated Customer Relationships</h3>
                                    <p className="text-slate-400 text-lg leading-relaxed">Talk to customers where they are. Automatically send digital receipts, shipping updates, and follow-up offers directly to your customer's WhatsApp, building loyalty on autopilot.</p>
                                </div>
            
                                {/**/}
                                <div
                                    className="module-card bg-gradient-to-br from-[#18181b] to-[#0d0d12] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group">
                                    <div
                                        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,83,186,0.1),transparent_40%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        <span
                                            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white">General
                                            Ledger</span>
                                        <span
                                            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white">Tax
                                            Ready</span>
                                    </div>
                                    <div
                                        className="w-14 h-14 bg-purple-500/10 border border-purple-500/20 rounded-2xl flex items-center justify-center text-purple-400 text-2xl mb-6">
                                        📈</div>
                                    <h3 className="text-3xl font-bold text-white mb-4">Automated Accounting Software</h3>
                                    <p className="text-slate-400 text-lg leading-relaxed">No more manual data entry. Every sale, return, and inventory purchase is automatically recorded in your financial ledgers, making tax time easier than ever.</p>
                                </div>
            
                            </div>
                        </div>
                    </div>
                </section>
        </>
    );
}