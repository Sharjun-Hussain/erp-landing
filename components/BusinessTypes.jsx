'use client';
import { useTranslations } from 'next-intl';


export default function BusinessTypes() {
    const t = useTranslations('BusinessTypes');
    return (
        <>
            <section id="business-types" className="py-24 relative z-20 bg-[#09090b] border-t border-white/5">
                    <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                        <div className="text-center max-w-3xl mx-auto mb-16 biz-header will-change-transform">
                            <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-4 block">Grows With You</span>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">Built for Retail, Wholesale, and {t('manufacturing')}.
                            </h2>
                            <p className="text-slate-400 text-lg">Whether you have one retail shop or a large warehouse, our software changes to fit your exact needs.</p>
                        </div>
            
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div
                                className="biz-card bg-[#121214] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.02] hover:border-white/20 transition-colors duration-300 group will-change-transform">
                                <div
                                    className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 text-xl mb-6 group-hover:scale-110 transition-transform">
                                    🛍️</div>
                                <h3 className="text-xl font-bold text-white mb-3">Retail & Franchises</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{t('manageAllBranches')} Change prices and check stock for every store instantly.</p>
                            </div>
            
                            <div
                                className="biz-card bg-[#121214] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.02] hover:border-white/20 transition-colors duration-300 group will-change-transform">
                                <div
                                    className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 text-xl mb-6 group-hover:scale-110 transition-transform">
                                    📦</div>
                                <h3 className="text-xl font-bold text-white mb-3">B2B Wholesale</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">Set different prices for different customers, process large orders quickly, and create automatic invoices.</p>
                            </div>
            
                            <div
                                className="biz-card bg-[#121214] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.02] hover:border-white/20 transition-colors duration-300 group will-change-transform">
                                <div
                                    className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 text-xl mb-6 group-hover:scale-110 transition-transform">
                                    🏭</div>
                                <h3 className="text-xl font-bold text-white mb-3">{t('manufacturing')}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">Track your raw materials, manage your production lists, and see your manufacturing costs live.</p>
                            </div>
            
                            <div
                                className="biz-card bg-[#121214] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.02] hover:border-white/20 transition-colors duration-300 group will-change-transform">
                                <div
                                    className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-400 text-xl mb-6 group-hover:scale-110 transition-transform">
                                    🛒</div>
                                <h3 className="text-xl font-bold text-white mb-3">{t('supermarket')}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">Fast barcode scanning, track items with expiry dates, and connect directly to your receipt printers.</p>
                            </div>
                        </div>
                    </div>
                </section>
        </>
    );
}