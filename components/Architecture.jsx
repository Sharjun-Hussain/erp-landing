export default function Architecture() {
    
    const ArrowSVG = ({ id }) => (
        <div className="flex-shrink-0 w-12 lg:w-24 flex justify-center items-center opacity-80 arch-arrow-container mx-4 lg:mx-8">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20" className="w-full h-6 overflow-visible">
                <line x1="0" y1="10" x2="90" y2="10" stroke="rgba(255,255,255,0.15)" strokeWidth="3" strokeDasharray="6 6" />
                <polygon points="90,4 100,10 90,16" fill="rgba(255,255,255,0.15)" />
                <line x1="0" y1="10" x2="90" y2="10" stroke="#34d399" strokeWidth="3" strokeDasharray="100" strokeDashoffset="100" className={`arch-arrow-path-${id}`} strokeLinecap="round" />
                <polygon points="90,4 100,10 90,16" fill="#34d399" className={`arch-arrow-head-${id} opacity-0 drop-shadow-[0_0_12px_rgba(52,211,153,1)]`} />
            </svg>
        </div>
    );

    return (
        <section id="architecture" className="py-32 relative bg-[#0a0a0c] overflow-hidden border-t border-white/5">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05),transparent_60%)] pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-20 arch-text">
                    <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-4 block">Enterprise Architecture</span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">Secure data flow from edge to database.</h2>
                    <p className="text-slate-400 text-lg">Every request is routed through military-grade proxies before hitting our MERN stack and isolated tenant databases. Uncompromising speed and security.</p>
                </div>

                {/* Horizontal Network Flow - Single Line, No Wrap */}
                <div className="w-full overflow-x-auto hide-scrollbar pb-10">
                    <div className="flex flex-nowrap items-center justify-start lg:justify-center min-w-max mx-auto px-4 lg:px-0" id="network-flow">
                        
                        {/* Node 1: Client */}
                        <div className="network-node flex-shrink-0 w-[260px] flex flex-col items-center">
                            <div className="text-[12px] font-bold text-purple-400 tracking-wider mb-4 text-center">1. Client POS</div>
                            <div className="w-full bg-[#09090b]/80 backdrop-blur-sm border border-purple-500/30 rounded-2xl shadow-[0_15px_40px_rgba(168,83,186,0.2)] p-4 flex flex-col gap-3 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
                                <div className="flex gap-3 h-24">
                                    <div className="w-1/3 bg-white/5 rounded-lg flex flex-col gap-1.5 p-2">
                                        <div className="w-full h-1.5 bg-white/20 rounded-full"></div>
                                        <div className="w-3/4 h-1.5 bg-white/10 rounded-full"></div>
                                        <div className="w-full h-1.5 bg-white/10 rounded-full"></div>
                                    </div>
                                    <div className="w-2/3 bg-white/5 rounded-lg p-2 flex flex-wrap gap-1.5 content-start">
                                        <div className="w-[calc(50%-3px)] h-8 bg-purple-500/20 border border-purple-500/30 rounded"></div>
                                        <div className="w-[calc(50%-3px)] h-8 bg-white/10 rounded"></div>
                                        <div className="w-[calc(50%-3px)] h-8 bg-white/10 rounded"></div>
                                        <div className="w-[calc(50%-3px)] h-8 bg-white/10 rounded"></div>
                                    </div>
                                </div>
                                <div className="w-full h-10 bg-emerald-500/80 rounded-lg flex items-center justify-center mt-1">
                                    <div className="w-1/2 h-2 bg-white/50 rounded-full node-1-btn shadow-[0_0_12px_rgba(255,255,255,0.6)]"></div>
                                </div>
                            </div>
                        </div>

                        <ArrowSVG id="1" />

                        {/* Node 2: Forward Proxy */}
                        <div className="network-node flex-shrink-0 w-[240px] flex flex-col items-center">
                            <div className="text-[12px] font-bold text-blue-400 tracking-wider mb-4 text-center">2. Forward Proxy</div>
                            {/* Floating Shield */}
                            <div className="w-32 h-32 rounded-full border border-blue-500/30 bg-blue-500/5 shadow-[0_0_40px_rgba(59,130,246,0.2)] flex flex-col items-center justify-center relative backdrop-blur-md mb-4">
                                <div className="w-16 h-16 border-2 border-blue-400 rotate-45 node-2-shield rounded-md relative shadow-[0_0_20px_rgba(59,130,246,0.6)] overflow-hidden">
                                    <div className="absolute inset-0 bg-blue-400/20"></div>
                                </div>
                                <div className="absolute top-0 left-0 w-full h-[3px] bg-blue-300 node-2-scan shadow-[0_0_12px_#93c5fd] rounded-full"></div>
                            </div>
                            <div className="text-[11px] font-mono text-blue-300 bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded node-2-log opacity-0">WAF: SECURE</div>
                        </div>

                        <ArrowSVG id="2" />

                        {/* Node 3: Reverse Proxy */}
                        <div className="network-node flex-shrink-0 w-[260px] flex flex-col items-center">
                            <div className="text-[12px] font-bold text-amber-400 tracking-wider mb-4 text-center">3. Load Balancer</div>
                            <div className="w-full bg-[#09090b]/80 backdrop-blur-sm border border-amber-500/30 rounded-2xl shadow-[0_15px_40px_rgba(245,158,11,0.2)] p-5 relative">
                                 <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none rounded-t-2xl"></div>
                                
                                <div className="flex gap-3 items-center h-24">
                                    <div className="w-1/3 flex items-center justify-end pr-3 border-r border-amber-500/30 relative">
                                        <div className="w-full h-2 bg-amber-500/20 rounded-full overflow-hidden">
                                            <div className="h-full bg-amber-400 w-full node-3-incoming -translate-x-full shadow-[0_0_12px_#fbbf24]"></div>
                                        </div>
                                        {/* Center hub */}
                                        <div className="absolute right-[-5px] w-2.5 h-2.5 rounded-full bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.8)]"></div>
                                    </div>
                                    <div className="w-2/3 flex flex-col gap-4 pl-3">
                                        <div className="w-full h-2 bg-amber-500/20 rounded-full overflow-hidden"><div className="h-full bg-amber-400 w-full node-3-out-1 -translate-x-full shadow-[0_0_10px_#fbbf24]"></div></div>
                                        <div className="w-full h-2 bg-amber-500/20 rounded-full overflow-hidden"><div className="h-full bg-amber-400 w-full node-3-out-2 -translate-x-full shadow-[0_0_10px_#fbbf24]"></div></div>
                                        <div className="w-full h-2 bg-amber-500/20 rounded-full overflow-hidden"><div className="h-full bg-amber-400 w-full node-3-out-3 -translate-x-full shadow-[0_0_10px_#fbbf24]"></div></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ArrowSVG id="3" />

                        {/* Node 4: Application Server */}
                        <div className="network-node flex-shrink-0 w-[260px] flex flex-col items-center">
                            <div className="text-[12px] font-bold text-rose-400 tracking-wider mb-4 text-center">4. Node.js Server</div>
                            
                            <div className="w-full bg-[#050505] border border-rose-500/30 rounded-xl shadow-[0_15px_40px_rgba(244,63,94,0.2)] overflow-hidden">
                                {/* Mac style header */}
                                <div className="h-8 bg-[#121212] border-b border-rose-500/20 flex items-center px-3 gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80 shadow-[0_0_8px_rgba(244,63,94,0.6)]"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50"></div>
                                </div>
                                <div className="p-4 font-mono text-[11px] text-rose-200/60 flex flex-col gap-2 h-28 relative bg-black/50">
                                    <div className="node-4-log-1 translate-y-2 opacity-0 text-emerald-400 leading-tight border-l-2 border-emerald-400 pl-2">POST /api/orders</div>
                                    <div className="node-4-log-2 translate-y-2 opacity-0 text-slate-400 leading-tight">Validating payload...</div>
                                    <div className="node-4-log-3 translate-y-2 opacity-0 text-rose-400 leading-tight">Connecting DB pool...</div>
                                </div>
                            </div>
                        </div>

                        <ArrowSVG id="4" />

                        {/* Node 5: Isolated Database */}
                        <div className="network-node flex-shrink-0 w-[240px] flex flex-col items-center">
                            <div className="text-[12px] font-bold text-emerald-400 tracking-wider mb-4 text-center flex items-center justify-center gap-2">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full node-5-pulse shadow-[0_0_12px_rgba(16,185,129,0.8)]"></div> 
                                5. Tenant DB
                            </div>
                            
                            {/* 3D-ish Cylinder representation */}
                            <div className="relative w-32 h-40 flex flex-col items-center justify-center mt-2">
                                {/* Base Stack */}
                                <div className="w-full h-10 bg-emerald-950 border border-emerald-500/40 rounded-[50%] absolute bottom-0 shadow-[0_0_30px_rgba(16,185,129,0.3)]"></div>
                                <div className="w-full h-10 bg-emerald-900 border border-emerald-500/50 rounded-[50%] absolute bottom-6"></div>
                                <div className="w-full h-10 bg-emerald-800 border border-emerald-400/60 rounded-[50%] absolute bottom-12"></div>
                                
                                {/* Top lid with glowing data cells */}
                                <div className="w-full h-10 bg-[#09090b] border-2 border-emerald-400 rounded-[50%] absolute bottom-18 shadow-[inset_0_0_20px_rgba(16,185,129,0.4),0_0_30px_rgba(16,185,129,0.5)] flex items-center justify-center">
                                    <div className="flex gap-1.5 transform scale-y-50">
                                        <div className="w-3 h-3 bg-emerald-400/30 rounded-sm node-5-cell-1"></div>
                                        <div className="w-3 h-3 bg-emerald-400/30 rounded-sm node-5-cell-2"></div>
                                        <div className="w-3 h-3 bg-emerald-400/30 rounded-sm node-5-cell-3"></div>
                                    </div>
                                </div>
                                
                                {/* Connecting beam down the middle */}
                                <div className="absolute w-[3px] h-16 bg-emerald-400/50 blur-[2px] node-5-pulse bottom-4"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}