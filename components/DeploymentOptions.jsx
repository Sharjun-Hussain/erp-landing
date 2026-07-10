export default function DeploymentOptions() {
    return (
        <section id="deployment-options" className="py-24 relative z-20 bg-[#09090b] border-t border-white/5">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                <div className="text-center max-w-3xl mx-auto mb-20 deployment-header will-change-transform">
                    <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-4 block">
                        Limitless Architecture
                    </span>
                    <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white mb-6">
                        Deploy Anywhere. Run Anyway.
                    </h2>
                    <p className="text-slate-400 text-lg md:text-xl">
                        A massive, multi-platform ecosystem built to adapt to your specific operational needs. Choose the cloud for agility, or run offline for iron-clad reliability.
                    </p>
                </div>

                {/* Bento Box Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[340px]">
                    
                    {/* 1. Cloud Web App (Large Horizontal) */}
                    <div className="deployment-card lg:col-span-3 lg:row-span-1 relative bg-gradient-to-br from-[#121214] to-black border border-white/5 rounded-[2rem] p-8 hover:border-blue-500/30 transition-colors duration-500 group overflow-hidden will-change-transform flex flex-col justify-between">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* CSS Art: Safari Browser */}
                        <div className="relative h-36 w-[80%] max-w-[400px] ml-auto bg-[#09090b]/80 backdrop-blur-md rounded-t-xl border border-white/10 overflow-hidden mb-6 flex flex-col group-hover:-translate-y-2 transition-transform duration-500 shadow-2xl">
                            <div className="h-8 bg-[#1a1a1c] border-b border-white/10 flex items-center px-4 gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                                <div className="ml-4 h-4 w-32 bg-white/5 rounded-md"></div>
                            </div>
                            <div className="flex-1 p-2 flex gap-2 overflow-hidden">
                                {/* POS Sidebar */}
                                <div className="w-10 bg-white/5 rounded-lg border border-white/5 flex flex-col items-center py-2 gap-2 shrink-0">
                                    <div className="w-5 h-5 rounded bg-blue-500/30 border border-blue-500/20 group-hover:bg-blue-500/60 transition-colors duration-500"></div>
                                    <div className="w-5 h-5 rounded bg-white/5 group-hover:bg-white/20 transition-colors duration-500 delay-100"></div>
                                    <div className="w-5 h-5 rounded bg-white/5 group-hover:bg-white/20 transition-colors duration-500 delay-200"></div>
                                    <div className="w-5 h-5 rounded bg-white/5 group-hover:bg-white/20 transition-colors duration-500 delay-300"></div>
                                </div>
                                
                                {/* POS Product Grid */}
                                <div className="flex-1 grid grid-cols-3 gap-2">
                                    <div className="bg-white/5 rounded-lg border border-white/5 flex flex-col p-1.5 gap-1.5 group-hover:scale-[1.05] group-hover:bg-white/10 transition-all duration-300">
                                        <div className="flex-1 bg-white/10 rounded-md group-hover:bg-blue-500/30 transition-colors duration-300"></div>
                                        <div className="h-1 w-3/4 bg-white/20 rounded-full"></div>
                                    </div>
                                    <div className="bg-white/5 rounded-lg border border-white/5 flex flex-col p-1.5 gap-1.5 group-hover:scale-[1.05] group-hover:bg-white/10 transition-all duration-300 delay-75">
                                        <div className="flex-1 bg-white/10 rounded-md"></div>
                                        <div className="h-1 w-1/2 bg-white/20 rounded-full"></div>
                                    </div>
                                    <div className="bg-white/5 rounded-lg border border-white/5 flex flex-col p-1.5 gap-1.5 group-hover:scale-[1.05] group-hover:bg-white/10 transition-all duration-300 delay-150">
                                        <div className="flex-1 bg-white/10 rounded-md"></div>
                                        <div className="h-1 w-2/3 bg-white/20 rounded-full"></div>
                                    </div>
                                    <div className="bg-white/5 rounded-lg border border-white/5 flex flex-col p-1.5 gap-1.5 group-hover:scale-[1.05] group-hover:bg-white/10 transition-all duration-300 delay-[225ms]">
                                        <div className="flex-1 bg-white/10 rounded-md"></div>
                                        <div className="h-1 w-3/4 bg-white/20 rounded-full"></div>
                                    </div>
                                    <div className="bg-white/5 rounded-lg border border-white/5 flex flex-col p-1.5 gap-1.5 group-hover:scale-[1.05] group-hover:bg-white/10 transition-all duration-300 delay-300">
                                        <div className="flex-1 bg-white/10 rounded-md"></div>
                                        <div className="h-1 w-full bg-white/20 rounded-full"></div>
                                    </div>
                                    <div className="bg-white/5 rounded-lg border border-white/5 flex flex-col p-1.5 gap-1.5 group-hover:scale-[1.05] group-hover:bg-white/10 transition-all duration-300 delay-[375ms]">
                                        <div className="flex-1 bg-white/10 rounded-md"></div>
                                        <div className="h-1 w-1/2 bg-white/20 rounded-full"></div>
                                    </div>
                                </div>

                                {/* POS Cart / Receipt */}
                                <div className="w-24 bg-[#121214] rounded-lg border border-white/10 p-2 flex flex-col shadow-inner relative overflow-hidden shrink-0">
                                    <div className="h-1.5 w-1/2 bg-white/30 rounded-full mb-2"></div>
                                    <div className="flex-1 flex flex-col gap-1.5 border-b border-white/5 mb-1.5 pb-1.5">
                                        <div className="flex justify-between items-center transform group-hover:translate-x-0 -translate-x-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                            <div className="h-1 w-2/3 bg-blue-400/50 rounded-full"></div>
                                            <div className="h-1 w-3 bg-white/20 rounded-full"></div>
                                        </div>
                                        <div className="flex justify-between items-center transform group-hover:translate-x-0 -translate-x-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                                            <div className="h-1 w-1/2 bg-white/10 rounded-full"></div>
                                            <div className="h-1 w-3 bg-white/20 rounded-full"></div>
                                        </div>
                                        <div className="flex justify-between items-center transform group-hover:translate-x-0 -translate-x-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300">
                                            <div className="h-1 w-3/4 bg-white/10 rounded-full"></div>
                                            <div className="h-1 w-3 bg-white/20 rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center mb-2">
                                        <div className="h-1.5 w-6 bg-white/40 rounded-full"></div>
                                        <div className="h-1.5 w-5 bg-emerald-400 rounded-full group-hover:scale-110 transition-transform duration-500 delay-500"></div>
                                    </div>
                                    <div className="h-5 w-full bg-emerald-500/20 border border-emerald-500/30 rounded flex items-center justify-center shadow-[0_0_5px_rgba(16,185,129,0.3)] group-hover:bg-emerald-500/40 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-500 delay-500">
                                        <div className="h-1 w-1/2 bg-emerald-400 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-white mb-2">Cloud Web App</h3>
                            <p className="text-slate-400 text-sm">Access your global command center from any browser. Real-time data sync across all branches.</p>
                        </div>
                    </div>

                    {/* 2. Cloud Mobile App (Vertical Tall) */}
                    <div className="deployment-card lg:col-span-1 lg:row-span-2 relative bg-gradient-to-b from-[#121214] to-black border border-white/5 rounded-[2rem] p-8 hover:border-purple-500/30 transition-colors duration-500 group overflow-hidden will-change-transform flex flex-col justify-between">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,83,186,0.15),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* CSS Art: GSAP Animated Mobile POS */}
                        <div className="mobile-anim-container relative h-[460px] w-[245px] mx-auto bg-[#000000] rounded-[2.5rem] border-[5px] border-[#27272a] overflow-hidden mb-6 flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#27272a] rounded-b-2xl z-40"></div>
                            
                            {/* Status Bar */}
                            <div className="flex justify-between items-center px-5 pt-2 pb-1 w-full absolute top-0 z-20 bg-gradient-to-b from-black/90 to-transparent">
                                <div className="text-[9px] font-semibold text-white tracking-widest">9:41</div>
                                <div className="flex gap-1.5 items-end">
                                    <div className="w-2.5 h-2 bg-white rounded-[1px]"></div>
                                    <div className="w-4 h-2 bg-white rounded-[1px]"></div>
                                </div>
                            </div>

                            {/* Mobile Waiter Layout */}
                            <div className="flex-1 overflow-hidden pt-10 bg-[#09090b] relative">
                                <div className="flex flex-col gap-4 px-4">
                                    
                                    {/* Waiter Header */}
                                    <div className="flex justify-between items-center mt-2">
                                        <div className="flex items-center gap-2.5">
                                            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center text-[14px]">👤</div>
                                            <div>
                                                <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Table 4</div>
                                                <div className="text-sm font-black text-white leading-none">New Order</div>
                                            </div>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-xs">🔍</div>
                                    </div>

                                    {/* Categories Horizontal */}
                                    <div className="flex gap-2.5 overflow-hidden py-1">
                                        <div className="px-4 py-2 bg-blue-600 rounded-full text-[10px] font-bold text-white shrink-0 shadow-[0_0_10px_rgba(37,99,235,0.4)]">Burgers</div>
                                        <div className="px-4 py-2 bg-white/10 rounded-full text-[10px] font-bold text-slate-300 shrink-0">Drinks</div>
                                        <div className="px-4 py-2 bg-white/10 rounded-full text-[10px] font-bold text-slate-300 shrink-0">Sides</div>
                                    </div>
                                    {/* Product Grid */}
                                    <div className="grid grid-cols-2 gap-3 pb-8">
                                        {/* Target Item 1 */}
                                        <div className="target-product-1 bg-white/5 rounded-2xl border border-white/5 p-2 flex flex-col gap-2 relative overflow-hidden">
                                            <div className="mobile-scanner-line-1 absolute top-0 left-0 w-full h-[2px] bg-red-500 shadow-[0_0_15px_rgba(239,68,68,1)] z-10 opacity-0"></div>
                                            <div className="mobile-add-badge-1 absolute -top-1.5 -right-1.5 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center text-[9px] text-white font-black border-[3px] border-[#09090b] opacity-0 scale-0 z-20">1</div>
                                            <div className="h-20 w-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl"></div>
                                            <div className="h-2 w-3/4 bg-white/30 rounded-full ml-1"></div>
                                        </div>
                                        {/* Target Item 2 */}
                                        <div className="target-product-2 bg-white/5 rounded-2xl border border-white/5 p-2 flex flex-col gap-2 relative overflow-hidden">
                                            <div className="mobile-scanner-line-2 absolute top-0 left-0 w-full h-[2px] bg-red-500 shadow-[0_0_15px_rgba(239,68,68,1)] z-10 opacity-0"></div>
                                            <div className="mobile-add-badge-2 absolute -top-1.5 -right-1.5 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center text-[9px] text-white font-black border-[3px] border-[#09090b] opacity-0 scale-0 z-20">1</div>
                                            <div className="h-20 w-full bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-xl"></div>
                                            <div className="h-2 w-2/3 bg-white/30 rounded-full ml-1"></div>
                                        </div>
                                        {/* Target Item 3 */}
                                        <div className="target-product-3 bg-white/5 rounded-2xl border border-white/5 p-2 flex flex-col gap-2 relative overflow-hidden">
                                            <div className="mobile-scanner-line-3 absolute top-0 left-0 w-full h-[2px] bg-red-500 shadow-[0_0_15px_rgba(239,68,68,1)] z-10 opacity-0"></div>
                                            <div className="mobile-add-badge-3 absolute -top-1.5 -right-1.5 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center text-[9px] text-white font-black border-[3px] border-[#09090b] opacity-0 scale-0 z-20">1</div>
                                            <div className="h-20 w-full bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-xl"></div>
                                            <div className="h-2 w-full bg-white/30 rounded-full ml-1"></div>
                                        </div>
                                        {/* Static Item 4 */}
                                        <div className="bg-white/5 rounded-2xl border border-white/5 p-2 flex flex-col gap-2">
                                            <div className="h-20 w-full bg-gradient-to-br from-rose-500/10 to-red-500/10 rounded-xl"></div>
                                            <div className="h-2 w-1/2 bg-white/30 rounded-full ml-1"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Order Button */}
                            <div className="checkout-btn absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] h-12 bg-blue-600 rounded-xl flex justify-between items-center px-4 z-20 shadow-[0_10px_20px_rgba(37,99,235,0.4)]">
                                <div className="checkout-count w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-[10px] font-black text-white border border-white/30">0</div>
                                <div className="text-[10px] font-bold text-white uppercase tracking-wider">View Order</div>
                                <div className="checkout-price text-[11px] font-black text-white">LKR 0</div>
                            </div>

                            {/* Printed Receipt Overlay */}
                            <div className="receipt-overlay absolute inset-0 bg-white z-50 flex flex-col items-center pt-12 pb-6 px-6 translate-y-full">
                                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-500 text-2xl mb-4 shadow-sm">✓</div>
                                <div className="text-black font-black text-lg mb-1">Payment Success</div>
                                <div className="text-slate-500 text-[10px] mb-4 uppercase tracking-widest font-bold">Receipt #8492</div>
                                
                                <div className="w-full border-t-2 border-dashed border-slate-300 my-2"></div>
                                <div className="w-full flex justify-between text-[10px] font-bold text-slate-700 my-1">
                                    <span>1x Burger Menu</span>
                                    <span>LKR 1,200</span>
                                </div>
                                <div className="w-full flex justify-between text-[10px] font-bold text-slate-700 my-1">
                                    <span>1x Iced Cola</span>
                                    <span>LKR 450</span>
                                </div>
                                <div className="w-full flex justify-between text-[10px] font-bold text-slate-700 my-1">
                                    <span>1x Fries</span>
                                    <span>LKR 650</span>
                                </div>
                                <div className="w-full border-t-2 border-dashed border-slate-300 my-2"></div>
                                
                                <div className="w-full flex justify-between text-sm font-black text-black mt-2">
                                    <span>Total</span>
                                    <span>LKR 2,300</span>
                                </div>
                                
                                {/* Fake Barcode */}
                                <div className="w-full h-10 mt-auto flex justify-between gap-[2px] opacity-70">
                                    <div className="w-1.5 h-full bg-black"></div>
                                    <div className="w-2.5 h-full bg-black"></div>
                                    <div className="w-1 h-full bg-black"></div>
                                    <div className="w-[1px] h-full bg-black"></div>
                                    <div className="w-2 h-full bg-black"></div>
                                    <div className="w-[1px] h-full bg-black"></div>
                                    <div className="w-1.5 h-full bg-black"></div>
                                    <div className="w-3.5 h-full bg-black"></div>
                                    <div className="w-[1px] h-full bg-black"></div>
                                    <div className="w-2 h-full bg-black"></div>
                                    <div className="w-1 h-full bg-black"></div>
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10 text-center">
                            <h3 className="text-2xl font-bold text-white mb-2">Native Mobile</h3>
                            <p className="text-slate-400 text-sm">iOS and Android apps for waiters, managers, and warehouse staff on the go.</p>
                        </div>
                    </div>



                    {/* 4. Windows Offline (Large Horizontal) */}
                    <div className="deployment-card lg:col-span-3 lg:row-span-1 relative bg-gradient-to-bl from-[#121214] to-black border border-white/5 rounded-[2rem] p-8 hover:border-slate-400/30 transition-colors duration-500 group overflow-hidden will-change-transform flex flex-col md:flex-row items-center gap-8">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div className="flex-1 relative z-10 order-2 md:order-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-slate-300 uppercase tracking-widest mb-4">
                                <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Maximum Reliability
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-4">Windows Native</h3>
                            <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                                Never worry about internet outages again. Run your core operations entirely offline with our lightning-fast native Windows software.
                            </p>
                        </div>

                        {/* CSS Art: GSAP Animated Windows POS Sequence */}
                        <div className="windows-anim-container relative h-56 w-full md:w-[400px] bg-[#050505] rounded-2xl border border-white/5 overflow-hidden order-1 md:order-2 shadow-2xl shrink-0 flex items-center justify-center perspective-[1000px]">
                            
                            {/* Fake Mouse Cursor */}
                            <svg className="fake-mouse absolute z-[60] w-6 h-6 drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] text-white" style={{ left: '50%', top: '50%' }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86c.15-.15.35-.23.56-.23h6.46c.45 0 .67-.54.35-.85L6.35 2.86c-.31-.31-.85-.09-.85.35z" fill="currentColor" stroke="black" strokeWidth="1"/>
                            </svg>

                            {/* LAUNCHER WINDOW */}
                            <div className="windows-launcher absolute z-10 w-48 bg-[#121214]/90 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl flex flex-col p-4 items-center gap-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center text-white text-xl shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                                    🛒
                                </div>
                                <div className="text-white text-sm font-bold tracking-wide">Inzeedo POS</div>
                                <div className="install-btn relative w-full h-8 mt-2 bg-blue-600 rounded-lg overflow-hidden flex items-center justify-center border border-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.6)]">
                                    <div className="loading-bar absolute left-0 top-0 h-full bg-emerald-500 w-0"></div>
                                    <div className="install-text absolute z-10 text-[10px] font-bold text-white uppercase tracking-widest">Install POS</div>
                                    <div className="loading-text-container absolute z-10 text-[10px] font-bold text-white uppercase tracking-widest opacity-0 flex items-center gap-2">
                                        Installing <span className="loading-text">0%</span>
                                    </div>
                                </div>
                            </div>

                            {/* MAIN POS WINDOW */}
                            <div className="windows-pos absolute inset-2 bg-[#09090b]/95 backdrop-blur-xl rounded-xl border border-white/10 flex flex-col opacity-0 scale-90 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] z-20">
                                {/* Windows Title Bar */}
                                <div className="h-8 bg-[#1a1a1c] border-b border-white/10 flex items-center justify-between px-3 shrink-0">
                                    <div className="text-[9px] text-slate-400 font-semibold flex items-center gap-2">
                                        <div className="w-3 h-3 bg-blue-600 rounded-sm"></div> Inzeedo POS - Local Node
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-[1px] bg-slate-500"></div>
                                        <div className="w-2.5 h-2.5 border border-slate-500"></div>
                                        <div className="w-3 h-3 flex items-center justify-center text-slate-500 text-[10px]">✕</div>
                                    </div>
                                </div>
                                
                                {/* Native POS Layout */}
                                <div className="flex-1 flex overflow-hidden p-2 gap-2">
                                    {/* Sidebar */}
                                    <div className="w-12 bg-white/5 rounded-lg border border-white/5 flex flex-col items-center py-3 gap-3 shrink-0">
                                        <div className="relative w-6 h-6 rounded bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
                                        </div>
                                        <div className="w-6 h-6 rounded bg-white/5"></div>
                                        <div className="w-6 h-6 rounded bg-white/5"></div>
                                        <div className="w-6 h-6 rounded bg-white/5"></div>
                                    </div>

                                    {/* POS Grid */}
                                    <div className="flex-1 grid grid-cols-2 gap-2">
                                        <div className="bg-white/5 rounded-lg border border-white/5 p-2 flex flex-col gap-1.5">
                                            <div className="flex-1 bg-white/10 rounded"></div>
                                            <div className="h-1.5 w-1/2 bg-white/20 rounded-full"></div>
                                        </div>
                                        <div className="bg-white/5 rounded-lg border border-white/5 p-2 flex flex-col gap-1.5">
                                            <div className="flex-1 bg-white/10 rounded"></div>
                                            <div className="h-1.5 w-2/3 bg-white/20 rounded-full"></div>
                                        </div>
                                        <div className="bg-white/5 rounded-lg border border-white/5 p-2 flex flex-col gap-1.5">
                                            <div className="flex-1 bg-white/10 rounded"></div>
                                            <div className="h-1.5 w-1/3 bg-white/20 rounded-full"></div>
                                        </div>
                                        <div className="bg-white/5 rounded-lg border border-white/5 p-2 flex flex-col gap-1.5">
                                            <div className="flex-1 bg-white/10 rounded"></div>
                                            <div className="h-1.5 w-3/4 bg-white/20 rounded-full"></div>
                                        </div>
                                    </div>

                                    {/* Cart Pane */}
                                    <div className="w-28 bg-[#121214] rounded-lg border border-white/10 p-2 flex flex-col shrink-0">
                                        <div className="h-1.5 w-1/2 bg-white/30 rounded-full mb-3"></div>
                                        <div className="flex-1 flex flex-col gap-2.5">
                                            <div className="flex justify-between items-center"><div className="h-1.5 w-1/2 bg-white/10 rounded-full"></div><div className="h-1.5 w-4 bg-white/20 rounded-full"></div></div>
                                            <div className="flex justify-between items-center"><div className="h-1.5 w-2/3 bg-white/10 rounded-full"></div><div className="h-1.5 w-4 bg-white/20 rounded-full"></div></div>
                                            <div className="flex justify-between items-center"><div className="h-1.5 w-3/4 bg-white/10 rounded-full"></div><div className="h-1.5 w-4 bg-white/20 rounded-full"></div></div>
                                        </div>
                                        <div className="h-7 w-full bg-blue-600/20 border border-blue-500/30 rounded mt-auto flex items-center justify-center">
                                            <div className="h-1.5 w-1/2 bg-blue-400 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
