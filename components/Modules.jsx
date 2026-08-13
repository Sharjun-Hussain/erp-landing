'use client';
import { useTranslations } from 'next-intl';


export default function Modules() {
    const t = useTranslations('Modules');
    return (
        <>
            <section id="modules" className="py-24 relative z-20 bg-[#09090b]">
                    <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative items-start">
            
                            {/**/}
                            <div className="lg:w-1/3 lg:sticky top-32 z-10 module-text-container">
                                <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-4 block">{t('allInOne')}</span>
                                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">{t('everything')}</h2>
                                <p className="text-slate-400 text-lg mb-8">{t('stopUsing')}</p>
            
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
            
                                {/* Card 1: Sales & POS */}
                                <div
                                    className="module-card bg-[#09090b] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] transition-all duration-500">
                                    <div
                                        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.2),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                                        <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white group-hover:border-blue-500/30 transition-colors">Touch UI Support</span>
                                        <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white group-hover:border-blue-500/30 transition-colors">2 Sales UIs</span>
                                        <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white group-hover:border-blue-500/30 transition-colors">No Limits</span>
                                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-semibold">Unlimited Invoices</span>
                                    </div>
                                    <div
                                        className="w-14 h-14 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 text-3xl mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all relative z-10">
                                        🏪</div>
                                    <h3 className="text-3xl font-bold text-white mb-4 relative z-10">{t('salesPos')}</h3>
                                    <p className="text-slate-400 text-lg leading-relaxed group-hover:text-slate-300 transition-colors relative z-10 mb-6">{t('beautifulPos')}</p>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-400 text-sm relative z-10">
                                        <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> {t('creditSales')}</li>
                                        <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> {t('customBarcode')}</li>
                                        <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Unlimited Products</li>
                                        <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Lifetime Access (No Expiry)</li>
                                    </ul>
                                </div>
            
                                {/* Card 2: Supplier Management */}
                                <div
                                    className="module-card bg-[#09090b] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group hover:border-amber-500/50 hover:shadow-[0_0_40px_rgba(245,158,11,0.3)] transition-all duration-500">
                                    <div
                                        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.2),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                                        <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white group-hover:border-amber-500/30 transition-colors">Multi-Branch</span>
                                        <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white group-hover:border-amber-500/30 transition-colors">Purchase Orders</span>
                                        <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-xs font-semibold">GRN Tracking</span>
                                    </div>
                                    <div
                                        className="w-14 h-14 bg-amber-500/10 border border-amber-500/20 rounded-2xl flex items-center justify-center text-amber-400 text-3xl mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.5)] transition-all relative z-10">
                                        📦</div>
                                    <h3 className="text-3xl font-bold text-white mb-4 relative z-10">{t('supplierControl')}</h3>
                                    <p className="text-slate-400 text-lg leading-relaxed group-hover:text-slate-300 transition-colors relative z-10 mb-6">{t('manageSuppliers')}</p>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-400 text-sm relative z-10">
                                        <li className="flex items-center gap-2"><span className="text-amber-500">✓</span> {t('supplierDir')}</li>
                                        <li className="flex items-center gap-2"><span className="text-amber-500">✓</span> {t('supplierLedgers')}</li>
                                        <li className="flex items-center gap-2"><span className="text-amber-500">✓</span> Automated Purchase Orders</li>
                                        <li className="flex items-center gap-2"><span className="text-amber-500">✓</span> Detailed Supplier Reports</li>
                                    </ul>
                                </div>

                                {/* Card 3: Accounting */}
                                <div
                                    className="module-card bg-[#09090b] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group hover:border-purple-500/50 hover:shadow-[0_0_40px_rgba(168,83,186,0.3)] transition-all duration-500">
                                    <div
                                        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,83,186,0.2),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                                        <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white group-hover:border-purple-500/30 transition-colors">{t('chartAcc')}</span>
                                        <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-semibold">{t('generalLedger')}</span>
                                    </div>
                                    <div
                                        className="w-14 h-14 bg-purple-500/10 border border-purple-500/20 rounded-2xl flex items-center justify-center text-purple-400 text-3xl mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(168,83,186,0.5)] transition-all relative z-10">
                                        📈</div>
                                    <h3 className="text-3xl font-bold text-white mb-4 relative z-10">{t('completeAcc')}</h3>
                                    <p className="text-slate-400 text-lg leading-relaxed group-hover:text-slate-300 transition-colors relative z-10 mb-6">{t('noManual')}</p>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-400 text-sm relative z-10">
                                        <li className="flex items-center gap-2"><span className="text-purple-500">✓</span> {t('chartAcc')}</li>
                                        <li className="flex items-center gap-2"><span className="text-purple-500">✓</span> {t('accReports')}</li>
                                        <li className="flex items-center gap-2"><span className="text-purple-500">✓</span> Income & Expense Tracking</li>
                                        <li className="flex items-center gap-2"><span className="text-purple-500">✓</span> {t('balanceSheet')}s</li>
                                    </ul>
                                </div>

                                {/* Card 4: Customer CRM & Comms */}
                                <div
                                    className="module-card bg-[#09090b] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group hover:border-pink-500/50 hover:shadow-[0_0_40px_rgba(236,72,153,0.3)] transition-all duration-500">
                                    <div
                                        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(236,72,153,0.2),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                                        <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white group-hover:border-pink-500/30 transition-colors">SMS Ready</span>
                                        <span className="px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-xs font-semibold">Email Automation</span>
                                    </div>
                                    <div
                                        className="w-14 h-14 bg-pink-500/10 border border-pink-500/20 rounded-2xl flex items-center justify-center text-pink-400 text-3xl mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] transition-all relative z-10">
                                        ✉️</div>
                                    <h3 className="text-3xl font-bold text-white mb-4 relative z-10">{t('customerMgmt')}</h3>
                                    <p className="text-slate-400 text-lg leading-relaxed group-hover:text-slate-300 transition-colors relative z-10 mb-6">{t('keepCustomers')}</p>
                                    <ul className="grid grid-cols-1 gap-3 text-slate-400 text-sm relative z-10">
                                        <li className="flex items-center gap-2"><span className="text-pink-500">✓</span> {t('customerProfiles')}</li>
                                        <li className="flex items-center gap-2"><span className="text-pink-500">✓</span> {t('emailNotifs')}</li>
                                        <li className="flex items-center gap-2"><span className="text-pink-500">✓</span> Integrated SMS Alerts</li>
                                    </ul>
                                </div>

                                {/* Card 5: Security & AI */}
                                <div
                                    className="module-card bg-[#09090b] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group hover:border-emerald-500/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.3)] transition-all duration-500">
                                    <div
                                        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.2),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                                        <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white group-hover:border-emerald-500/30 transition-colors">256-Bit Encrypted</span>
                                        <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white group-hover:border-emerald-500/30 transition-colors">AI Ready</span>
                                        <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-semibold">Role-Based Access (RBAC)</span>
                                    </div>
                                    <div
                                        className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400 text-3xl mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all relative z-10">
                                        🛡️</div>
                                    <h3 className="text-3xl font-bold text-white mb-4 relative z-10">{t('highSec')}</h3>
                                    <p className="text-slate-400 text-lg leading-relaxed group-hover:text-slate-300 transition-colors relative z-10 mb-6">{t('dataSafe')}</p>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-400 text-sm relative z-10">
                                        <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> {t('rbac')}</li>
                                        <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> {t('salesAlerts')}</li>
                                        <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> 256-Bit Secure Algorithm</li>
                                        <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Future AI Capabilities Integrated</li>
                                    </ul>
                                </div>
            
                            </div>
                        </div>
                    </div>
                </section>
        </>
    );
}