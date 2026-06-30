
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
                            className="bg-white text-black px-8 py-4 rounded-full font-semibold text-[15px] hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(255,255,255,0.1)] transition-transform transition-shadow duration-300">Request
                            System Access</a>
                        <a href="#"
                            className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-semibold text-[15px] hover:bg-white/10 transition-colors duration-300 backdrop-blur-md">View
                            Architecture</a>
                    </div>
                </main>
        </>
    );
}