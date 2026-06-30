
import GSAPAnimations from "@/components/GSAPAnimations";

export default function Home() {

    return (
        <main>
            

    <div id="mobile-overlay"
        className="fixed inset-0 bg-[#09090b]/80 backdrop-blur-sm z-[900] hidden opacity-0 will-change-transform"></div>

    {/**/}
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

    {/**/}
    <main
        className="min-h-[90vh] flex flex-col items-center justify-center relative overflow-hidden px-6 pt-32 text-center z-10 pb-20">
        <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_70%)] -z-10 pointer-events-none">
        </div>
        <div
            className="border border-white/10 rounded-full px-4 py-1.5 mb-8 bg-white/5 backdrop-blur-sm text-sm font-medium text-slate-300 will-change-transform hero-badge">
            <span className="w-2 h-2 rounded-full bg-blue-500 inline-block mr-2 animate-pulse"></span> Inzeedo ERP v2.0 is
            now live
        </div>
        <h1
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter text-white will-change-transform leading-tight">
            Run Your Entire Business <br className="hidden md:block" />
            <span className="text-gradient">From One Place.</span>
        </h1>
        <p className="mt-8 text-slate-400 text-lg md:text-xl max-w-3xl mx-auto will-change-transform" id="hero-sub">
            A complete, easy-to-use software that combines your Point of Sale, Inventory, Customer Relationships, and Accounting. Stop juggling multiple apps and start scaling.
        </p>
        <div
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4 hero-btns will-change-transform w-full sm:w-auto">
            <a href="#"
                className="bg-white text-black px-8 py-4 rounded-full font-semibold text-[15px] hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(255,255,255,0.1)] transition-transform transition-shadow duration-300">Request
                System Access</a>
            <a href="#"
                className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-semibold text-[15px] hover:bg-white/10 transition-colors duration-300 backdrop-blur-md">View
                Architecture</a>
        </div>
    </main>

    {/**/}
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

    {/**/}
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

    {/**/}
    <section id="architecture" className="py-32 relative bg-[#0a0a0c] overflow-hidden border-t border-white/5">
        <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05),transparent_60%)] pointer-events-none">
        </div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center gap-16">

            <div className="lg:w-1/2 arch-text">
                <span
                    className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-4 block">Infrastructure</span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">Secure, fast, and reliable cloud platform.</h2>
                <p className="text-slate-400 text-lg mb-6">Unlike other platforms where your data is mixed with thousands of others, we give you a dedicated, isolated private database for maximum security and speed. Always online, never slow.</p>

                <ul className="space-y-4 mt-8">
                    <li className="flex items-center gap-3 text-slate-300">
                        <div
                            className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs">
                            ✓</div>
                        MERN Stack with Retrieval-Augmented Generation (RAG)
                    </li>
                    <li className="flex items-center gap-3 text-slate-300">
                        <div
                            className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs">
                            ✓</div>
                        Isolated database architectures per tenant
                    </li>
                </ul>
            </div>

            {/**/}
            <div className="lg:w-1/2 w-full h-[500px] relative perspective-1000 flex items-center justify-center"
                id="stack-container">

                {/**/}
                <div className="stack-layer layer-1 absolute w-3/4 max-w-[400px] h-48 bg-[#09090b] border border-emerald-500/30 rounded-2xl shadow-[0_20px_50px_rgba(16,185,129,0.1)] flex flex-col items-center justify-center transform preserve-3d"
                    style={{ 'transform': 'rotateX(60deg) rotateZ(-45deg) translateZ(-100px)' }}>
                    <div className="text-emerald-400 font-bold text-xl mb-1">Private Secure Database</div>
                    <div className="text-emerald-500/50 text-sm">Your Data, Isolated</div>
                </div>

                {/**/}
                <div className="stack-layer layer-2 absolute w-3/4 max-w-[400px] h-48 bg-[#09090b] border border-blue-500/30 rounded-2xl shadow-[0_20px_50px_rgba(59,130,246,0.15)] flex flex-col items-center justify-center transform preserve-3d"
                    style={{ 'transform': 'rotateX(60deg) rotateZ(-45deg) translateZ(0px)' }}>
                    <div className="text-blue-400 font-bold text-xl mb-1">Fast Cloud Server</div>
                    <div className="text-blue-500/50 text-sm">Always Online</div>
                </div>

                {/**/}
                <div className="stack-layer layer-3 absolute w-3/4 max-w-[400px] h-48 bg-[#09090b] border border-purple-500/30 rounded-2xl shadow-[0_30px_60px_rgba(168,83,186,0.2)] flex flex-col items-center justify-center transform preserve-3d backdrop-blur-md"
                    style={{ 'transform': 'rotateX(60deg) rotateZ(-45deg) translateZ(100px)' }}>
                    <div className="text-purple-400 font-bold text-xl mb-1">React Client Applications</div>
                    <div className="text-purple-500/50 text-sm">Web POS & Admin Dashboard</div>
                </div>

            </div>
        </div>
    </section>

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

    <section id="business-types" className="py-24 relative z-20 bg-[#09090b] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto mb-16 biz-header will-change-transform">
                <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-4 block">Scalable
                    Adaptability</span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">Built for Retail, Wholesale, and Manufacturing.
                </h2>
                <p className="text-slate-400 text-lg">Whether you are running a single growing retail store or a high-volume warehouse, our software adapts to your exact business needs.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div
                    className="biz-card bg-[#121214] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.02] hover:border-white/20 transition-all duration-300 group will-change-transform">
                    <div
                        className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 text-xl mb-6 group-hover:scale-110 transition-transform">
                        🛍️</div>
                    <h3 className="text-xl font-bold text-white mb-3">Retail & Franchises</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">Centralized control for multi-branch retail. Push
                        price updates and track branch-level inventory instantly.</p>
                </div>

                <div
                    className="biz-card bg-[#121214] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.02] hover:border-white/20 transition-all duration-300 group will-change-transform">
                    <div
                        className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 text-xl mb-6 group-hover:scale-110 transition-transform">
                        📦</div>
                    <h3 className="text-xl font-bold text-white mb-3">B2B Wholesale</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">Custom pricing tiers, bulk order processing, and
                        automated invoicing designed for high-volume B2B distribution.</p>
                </div>

                <div
                    className="biz-card bg-[#121214] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.02] hover:border-white/20 transition-all duration-300 group will-change-transform">
                    <div
                        className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 text-xl mb-6 group-hover:scale-110 transition-transform">
                        🏭</div>
                    <h3 className="text-xl font-bold text-white mb-3">Manufacturing</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">Track raw materials, manage bills of materials
                        (BOM),
                        and monitor production costs in real-time.</p>
                </div>

                <div
                    className="biz-card bg-[#121214] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.02] hover:border-white/20 transition-all duration-300 group will-change-transform">
                    <div
                        className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-400 text-xl mb-6 group-hover:scale-110 transition-transform">
                        🛒</div>
                    <h3 className="text-xl font-bold text-white mb-3">Supermarkets</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">Lightning-fast barcode scanning, perishable goods
                        tracking, and direct thermal printer integrations.</p>
                </div>
            </div>
        </div>
    </section>

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

    <section id="robust-horizontal"
        className="relative h-screen bg-transparent overflow-hidden hidden md:block border-t border-white/5">

        <div id="robust-track" className="flex items-center h-full w-fit px-[10vw] will-change-transform">

            <h2
                className="text-[12vw] font-black text-white uppercase tracking-tighter whitespace-nowrap flex items-center gap-12 leading-none">

                <span className="text-outline jump-text">MANAGE</span>
                <span className="jump-text">YOUR</span>

                <div
                    className="robust-card w-[28vw] h-[50vh] bg-gradient-to-br from-[#121214] to-black border border-blue-500/30 rounded-[2rem] shadow-[0_20px_50px_rgba(59,130,246,0.15)] flex flex-col justify-end p-8 whitespace-normal relative overflow-hidden group shrink-0 tracking-normal normal-case">
                    <div
                        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.2),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    </div>
                    <div
                        className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 text-3xl mb-6 relative z-10">
                        🌐</div>
                    <p className="text-xl  text-white mb-2 relative z-10">Web Dashboard</p>
                    <p className="text-slate-400 text-lg font-medium tracking-normal relative z-10">Global command center
                        for
                        full business control.</p>
                </div>

                <span className="text-outline text-purple-500 jump-text">STORE.</span>
                <span className="jump-text">SELL</span>

                <div
                    className="robust-card w-[28vw] h-[50vh] bg-gradient-to-br from-[#121214] to-black border border-purple-500/30 rounded-[2rem] shadow-[0_20px_50px_rgba(168,83,186,0.15)] flex flex-col justify-end p-8 whitespace-normal relative overflow-hidden group shrink-0 tracking-normal normal-case">
                    <div
                        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,83,186,0.2),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    </div>
                    <div
                        className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center text-purple-400 text-3xl mb-6 relative z-10">
                        📱</div>
                    <h4 className="text-3xl font-bold text-white mb-2 relative z-10">Mobile Apps</h4>
                    <p className="text-slate-400 text-lg font-medium tracking-normal relative z-10">Walk the floor, scan barcodes, and serve customers anywhere.</p>
                </div>

                <span className="text-outline text-emerald-500 jump-text">ONLINE.</span>
                <span className="jump-text">GROW</span>

                <div
                    className="robust-card w-[35vw] h-[50vh] bg-gradient-to-br from-[#121214] to-black border border-emerald-500/40 rounded-[2rem] shadow-[0_0_50px_rgba(16,185,129,0.15)] flex flex-col justify-end p-8 whitespace-normal relative overflow-hidden group shrink-0 tracking-normal normal-case">
                    <div
                        className="absolute top-8 right-8 flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                        <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase">Optimized</span>
                    </div>
                    <div
                        className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400 text-3xl mb-6 relative z-10">
                        💻</div>
                    <h4 className="text-4xl font-bold text-white mb-2 relative z-10">Fast Desktop Setup</h4>
                    <p className="text-slate-400 text-lg font-medium tracking-normal relative z-10">Connect receipt printers, cash drawers, and barcode scanners instantly.</p>
                </div>

                <span className="text-outline jump-text">FASTER.</span>
                <span className="jump-text">WITH US.</span>
            </h2>
        </div>
    </section>

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



    {/**/}
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
    <GSAPAnimations />
    

        </main>
    );
}
