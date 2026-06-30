
export default function Hero() {
    return (
        <>
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
                            className="relative inline-flex h-14 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#09090b] group transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3b82f6_0%,#09090b_50%,#a855f7_100%)] transition-all" />
                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#09090b] px-8 font-semibold text-white backdrop-blur-3xl group-hover:bg-[#121214] transition-colors">
                                Request System Access
                            </span>
                        </a>
                        <a href="#"
                            className="relative inline-flex h-14 overflow-hidden rounded-full p-[2px] focus:outline-none group transition-all duration-300 hover:scale-105">
                            <span className="absolute inset-0 bg-white/10 rounded-full transition-colors group-hover:bg-white/20" />
                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-transparent border border-white/10 px-8 font-semibold text-slate-300 backdrop-blur-3xl group-hover:text-white transition-colors z-10">
                                View Architecture
                            </span>
                        </a>
                    </div>
                </main>
        </>
    );
}