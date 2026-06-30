
export default function RobustTrack() {
    return (
        <>
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
        </>
    );
}