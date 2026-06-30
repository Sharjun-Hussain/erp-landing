
export default function Architecture() {
    return (
        <>
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
        </>
    );
}