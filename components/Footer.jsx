
export default function Footer() {
    return (
        <>
            <footer id="premium-footer" className="relative bg-white rounded-t-[4rem] pt-24 pb-8 z-[999] text-slate-900">
            
                    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
            
                        <div
                            className="flex flex-col md:flex-row items-start md:items-center justify-between pb-16 border-b border-slate-200 footer-cta">
                            <div className="mb-8 md:mb-0">
                                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tighter mb-4">Ready to unify?</h2>
                                <p className="text-slate-600 text-lg max-w-md">Join visionary enterprises running their core operations
                                    on
                                    the Inzeedo ecosystem.</p>
                            </div>
                            <a href="#"
                                className="bg-black text-white px-8 py-4 rounded-full font-bold text-[15px] hover:scale-105 transition-transform duration-300 shadow-xl">Deploy
                                Now</a>
                        </div>
            
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 py-16 footer-grid">
            
                            <div className="lg:col-span-2 pr-0 lg:pr-12">
                                <a href="#" className="flex items-center gap-3 text-2xl font-bold text-slate-900 mb-6">
                                    <div className="w-6 h-6 rounded-full bg-blue-600"></div> Inzeedo ERP
                                </a>
                                <p className="text-slate-600 text-sm leading-relaxed mb-8">The complete point-of-sale and business management software. Build for retail, restaurants, manufacturing, and growing enterprises.</p>
                            </div>
            
                            <div>
                                <h4 className="text-slate-900 font-bold mb-6 tracking-widest uppercase text-xs">Modules</h4>
                                <ul className="space-y-4 text-sm text-slate-600">
                                    <li><a href="#" className="hover:text-blue-600 transition-all">Omnichannel POS</a></li>
                                    <li><a href="#" className="hover:text-blue-600 transition-all">Advanced Inventory & GRN</a></li>
                                    <li><a href="#" className="hover:text-blue-600 transition-all">Manufacturing & Recipes</a></li>
                                    <li><a href="#" className="hover:text-blue-600 transition-all">WhatsApp CRM</a></li>
                                </ul>
                            </div>
            
                            <div>
                                <h4 className="text-slate-900 font-bold mb-6 tracking-widest uppercase text-xs">Platform</h4>
                                <ul className="space-y-4 text-sm text-slate-600">
                                    <li><a href="#" className="hover:text-blue-600 transition-all">Hardware & QZ Tray</a></li>
                                    <li><a href="#" className="hover:text-blue-600 transition-all">Shopify Sync</a></li>
                                    <li><a href="#" className="hover:text-blue-600 transition-all">Shift Management</a></li>
                                </ul>
                            </div>
            
                            <div>
                                <h4 className="text-slate-900 font-bold mb-6 tracking-widest uppercase text-xs">Company</h4>
                                <ul className="space-y-4 text-sm text-slate-600">
                                    <li><a href="#" className="hover:text-blue-600 transition-all">About Us</a></li>
                                    <li><a href="#" className="hover:text-blue-600 transition-all">Privacy</a></li>
                                </ul>
                            </div>
                        </div>
            
                        <div
                            className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-200 text-slate-500 text-xs font-medium footer-bottom">
                            <p>&copy; 2026 Inzeedo Technologies. All rights reserved.</p>
                        </div>
                    </div>
            
                    <div className="w-full overflow-hidden mt-12 flex justify-center items-end opacity-5 pointer-events-none">
                        <h1 id="massive-footer-text"
                            className="text-[13vw] font-black text-slate-900 leading-[0.7] tracking-tighter translate-y-1/3">INZEEDO
                        </h1>
                    </div>
                </footer>
        </>
    );
}