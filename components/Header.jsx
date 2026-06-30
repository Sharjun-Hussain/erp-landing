
export default function Header() {
    return (
        <>
            <div id="mobile-overlay"
                    className="fixed inset-0 bg-[#09090b]/80 backdrop-blur-sm z-[900] hidden opacity-0 will-change-transform"></div>
            
            <header className="fixed top-0 left-0 w-full z-[1000] border-b border-white/5">
                    <div className="header-bg absolute inset-0 bg-[#09090b] -z-10 will-change-transform"></div>
                    <nav className="max-w-[1400px] mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
                        <a href="#"
                            className="brand-logo flex items-center gap-3 text-xl font-bold text-slate-50 tracking-tight will-change-transform z-50">
                            <div className="w-7 h-7 rounded-full bg-orb shadow-[0_0_20px_rgba(168,83,186,0.4)]"></div>
                            Inzeedo
                        </a>
            
                        <button id="mobile-toggle"
                            className="lg:hidden text-white z-50 p-2 focus:outline-none relative w-8 h-8 flex items-center justify-center">
                            <span
                                className="hamburger-line absolute w-6 h-[2px] bg-white rounded transition-transform duration-300 -translate-y-2"></span>
                            <span
                                className="hamburger-line absolute w-6 h-[2px] bg-white rounded transition-opacity duration-300"></span>
                            <span
                                className="hamburger-line absolute w-6 h-[2px] bg-white rounded transition-transform duration-300 translate-y-2"></span>
                        </button>
            
                        <div id="nav-menu"
                            className="mobile-nav fixed lg:static top-0 right-0 w-[85%] sm:w-[350px] lg:w-auto h-screen lg:h-full bg-[#121214] border-l border-white/5 lg:border-none lg:bg-transparent flex flex-col lg:flex-row items-start lg:items-center pt-28 lg:pt-0 px-8 lg:px-0 gap-6 lg:gap-10 translate-x-full lg:translate-x-0 overflow-y-auto lg:overflow-visible z-40">
                            <div className="nav-item mobile-stagger will-change-transform w-full lg:w-auto"><a href="#modules"
                                    className="text-slate-400 hover:text-white font-medium text-[16px] lg:text-[15px] transition-colors block py-2 lg:py-0">Modules</a>
                            </div>
                            <div className="nav-item mobile-stagger has-mega-menu relative will-change-transform w-full lg:w-auto">
                                <a href="#architecture" id="mega-trigger-btn"
                                    className="nav-link text-slate-400 hover:text-white font-medium text-[16px] lg:text-[15px] flex items-center justify-between lg:justify-start gap-1.5 transition-colors cursor-pointer py-2 lg:py-0 w-full">
                                    Architecture <svg className="chevron transition-transform duration-300" width="12" height="12"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </a>
                                <div
                                    className="mega-menu lg:absolute top-full lg:left-1/2 lg:-translate-x-1/2 w-full lg:w-[800px] lg:pt-6 hidden perspective-[1000px] z-50">
                                    <div
                                        className="mega-menu-inner bg-[#18181b] lg:border border-white/5 lg:rounded-2xl lg:p-8 pt-4 pb-2 lg:shadow-[0_20px_40px_rgba(0,0,0,0.4),inset_0_0_0_1px_rgba(255,255,255,0.05)] origin-top">
                                        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1.2fr] gap-6 lg:gap-8">
                                            <div className="flex flex-col gap-1">
                                                <h4
                                                    className="mega-title hidden lg:block text-xs uppercase tracking-widest text-slate-500 mb-2">
                                                    Core Operations</h4>
                                                <a href="#"
                                                    className="mega-link-card flex items-start gap-4 p-2.5 lg:p-3 lg:-ml-3 rounded-xl hover:bg-white/5 transition-colors">
                                                    <div
                                                        className="w-10 h-10 flex items-center justify-center rounded-lg bg-purple-500/15 text-purple-400 text-lg shrink-0">
                                                        📦</div>
                                                    <div>
                                                        <h5 className="text-white text-[15px] font-medium mb-0.5">Advanced Inventory</h5>
                                                        <p className="text-slate-400 text-xs leading-relaxed hidden lg:block">GRN & multi-branch transfers.</p>
                                                    </div>
                                                </a>
                                                <a href="#"
                                                    className="mega-link-card flex items-start gap-4 p-2.5 lg:p-3 lg:-ml-3 rounded-xl hover:bg-white/5 transition-colors">
                                                    <div
                                                        className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-500/15 text-blue-400 text-lg shrink-0">
                                                        🖨️</div>
                                                    <div>
                                                        <h5 className="text-white text-[15px] font-medium mb-0.5">Hardware Ready</h5>
                                                        <p className="text-slate-400 text-xs leading-relaxed hidden lg:block">QZ Tray receipt & drawer support.</p>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <h4
                                                    className="mega-title hidden lg:block text-xs uppercase tracking-widest text-slate-500 mb-2">
                                                    Growth & Manufacturing</h4>
                                                <a href="#"
                                                    className="mega-link-card flex items-start gap-4 p-2.5 lg:p-3 lg:-ml-3 rounded-xl hover:bg-white/5 transition-colors">
                                                    <div
                                                        className="w-10 h-10 flex items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400 text-lg shrink-0">
                                                        🤖</div>
                                                    <div>
                                                        <h5 className="text-white text-[15px] font-medium mb-0.5">WhatsApp CRM</h5>
                                                        <p className="text-slate-400 text-xs leading-relaxed hidden lg:block">Automated SMS & Campaigns.</p>
                                                    </div>
                                                </a>
                                                <a href="#"
                                                    className="mega-link-card flex items-start gap-4 p-2.5 lg:p-3 lg:-ml-3 rounded-xl hover:bg-white/5 transition-colors">
                                                    <div
                                                        className="w-10 h-10 flex items-center justify-center rounded-lg bg-amber-500/15 text-amber-400 text-lg shrink-0">
                                                        🏭</div>
                                                    <div>
                                                        <h5 className="text-white text-[15px] font-medium mb-0.5">Production BOM</h5>
                                                        <p className="text-slate-400 text-xs leading-relaxed hidden lg:block">Recipes & raw material tracking.</p>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="hidden lg:block">
                                                <div
                                                    className="mega-promo bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/5 rounded-xl p-6 h-full flex flex-col items-start">
                                                    <span
                                                        className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-[11px] font-bold mb-4">Inzeedo
                                                        ERP</span>
                                                    <h4 className="text-lg font-semibold text-white mb-2">System v2.0</h4>
                                                    <p className="text-slate-400 text-sm mb-6 leading-relaxed">Experience the next
                                                        generation of enterprise resource planning.</p>
                                                    <button
                                                        className="mt-auto bg-white text-black px-4 py-2 rounded-lg font-semibold text-sm hover:bg-slate-200 transition-colors w-full">Explore
                                                        Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="nav-item mobile-stagger will-change-transform w-full lg:w-auto"><a href="#pricing"
                                    className="text-slate-400 hover:text-white font-medium text-[16px] lg:text-[15px] transition-colors block py-2 lg:py-0">Pricing</a>
                            </div>
                            <div
                                className="nav-actions flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6 w-full lg:w-auto mt-6 lg:mt-0 pt-6 lg:pt-0 border-t border-white/10 lg:border-none">
                                <a href="#login"
                                    className="mobile-stagger text-white font-medium text-[16px] lg:text-[15px] will-change-transform w-full lg:w-auto text-left py-2 lg:py-0 hover:text-slate-300 transition-colors">Client
                                    Login</a>
                                <a href="#demo"
                                    className="mobile-stagger bg-white text-black px-6 py-3 lg:py-2.5 rounded-lg font-semibold text-[16px] lg:text-[15px] will-change-transform hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(255,255,255,0.1)] transition-transform transition-shadow duration-300 w-full lg:w-auto text-center">Book
                                    Demo</a>
                            </div>
                        </div>
                    </nav>
                </header>
        </>
    );
}