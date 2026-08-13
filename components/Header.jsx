'use client';
import { useTranslations, useLocale } from 'next-intl';

export default function Header() {
    const t = useTranslations('Header');
    const locale = useLocale();

    const switchLanguage = (newLocale) => {
        // Simple language switch logic since we don't have next-intl routing fully set up for client components
        const currentPath = window.location.pathname;
        const newPath = currentPath.replace(`/${locale}`, `/${newLocale}`);
        window.location.href = newPath === currentPath ? `/${newLocale}` : newPath;
    };

    return (
        <>
            <div id="mobile-overlay"
                    className="fixed inset-0 bg-[#09090b]/80 backdrop-blur-sm z-[900] hidden opacity-0 will-change-transform"></div>
            
            <header className="fixed top-4 lg:top-6 left-0 right-0 mx-auto w-[95%] max-w-[1200px] z-[1000] border border-white/10 rounded-2xl bg-[#09090b]/70 backdrop-blur-md shadow-xl transition-colors duration-300 transform-gpu">
                    <nav className="w-full pl-6 pr-6 lg:pl-8 lg:pr-12 h-16 flex items-center justify-between relative">
                        <a href="#"
                            className="brand-logo flex items-center gap-3 text-lg font-bold text-slate-50 tracking-tight will-change-transform z-50">
                            <div className="w-6 h-6 rounded-lg bg-orb shadow-[0_0_20px_rgba(168,83,186,0.4)]"></div>
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
                            className="mobile-nav fixed lg:static top-0 right-0 w-[85%] sm:w-[350px] lg:flex-1 h-screen lg:h-full bg-[#121214] border-l border-white/5 lg:border-none lg:bg-transparent flex flex-col lg:flex-row items-start lg:items-center justify-end pt-28 lg:pt-0 px-8 lg:px-0 gap-6 lg:gap-10 translate-x-full lg:translate-x-0 overflow-y-auto lg:overflow-visible z-40">
                            
                            {/* Centered Navigation Links on Desktop */}
                            <div className="flex flex-col lg:flex-row lg:absolute lg:left-1/2 lg:-translate-x-1/2 items-start lg:items-center gap-6 lg:gap-8 w-full lg:w-auto">
                                <div className="nav-item mobile-stagger will-change-transform w-full lg:w-auto">
                                    <a href="#modules"
                                        className="text-slate-400 hover:text-white font-medium text-[16px] lg:text-[14px] transition-colors block py-2 lg:py-0">{t('modules')}</a>
                                </div>
                                <div className="nav-item mobile-stagger has-mega-menu relative will-change-transform w-full lg:w-auto">
                                    <a href="#architecture" id="mega-trigger-btn"
                                        className="nav-link text-slate-400 hover:text-white font-medium text-[16px] lg:text-[14px] flex items-center justify-between lg:justify-start gap-1.5 transition-colors cursor-pointer py-2 lg:py-0 w-full">
                                        {t('architecture')} <svg className="chevron transition-transform duration-300" width="12" height="12"
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
                                                        {t('mainFeatures')}</h4>
                                                    <a href="#"
                                                        className="mega-link-card flex items-start gap-4 p-2.5 lg:p-3 lg:-ml-3 rounded-xl hover:bg-white/5 transition-colors">
                                                        <div
                                                            className="w-10 h-10 flex items-center justify-center rounded-lg bg-purple-500/15 text-purple-400 text-lg shrink-0">
                                                            📦</div>
                                                        <div>
                                                            <h5 className="text-white text-[15px] font-medium mb-0.5">{t('advancedInventory')}</h5>
                                                            <p className="text-slate-400 text-xs leading-relaxed hidden lg:block">{t('trackStock')}</p>
                                                        </div>
                                                    </a>
                                                    <a href="#"
                                                        className="mega-link-card flex items-start gap-4 p-2.5 lg:p-3 lg:-ml-3 rounded-xl hover:bg-white/5 transition-colors">
                                                        <div
                                                            className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-500/15 text-blue-400 text-lg shrink-0">
                                                            🖨️</div>
                                                        <div>
                                                            <h5 className="text-white text-[15px] font-medium mb-0.5">{t('hardwareReady')}</h5>
                                                            <p className="text-slate-400 text-xs leading-relaxed hidden lg:block">{t('qzTray')}</p>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="flex flex-col gap-1">
                                                    <h4
                                                        className="mega-title hidden lg:block text-xs uppercase tracking-widest text-slate-500 mb-2">
                                                        {t('growthProduction')}</h4>
                                                    <a href="#"
                                                        className="mega-link-card flex items-start gap-4 p-2.5 lg:p-3 lg:-ml-3 rounded-xl hover:bg-white/5 transition-colors">
                                                        <div
                                                            className="w-10 h-10 flex items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400 text-lg shrink-0">
                                                            🤖</div>
                                                        <div>
                                                            <h5 className="text-white text-[15px] font-medium mb-0.5">{t('whatsappCrm')}</h5>
                                                            <p className="text-slate-400 text-xs leading-relaxed hidden lg:block">{t('sendSms')}</p>
                                                        </div>
                                                    </a>
                                                    <a href="#"
                                                        className="mega-link-card flex items-start gap-4 p-2.5 lg:p-3 lg:-ml-3 rounded-xl hover:bg-white/5 transition-colors">
                                                        <div
                                                            className="w-10 h-10 flex items-center justify-center rounded-lg bg-amber-500/15 text-amber-400 text-lg shrink-0">
                                                            🏭</div>
                                                        <div>
                                                            <h5 className="text-white text-[15px] font-medium mb-0.5">{t('productionBom')}</h5>
                                                            <p className="text-slate-400 text-xs leading-relaxed hidden lg:block">{t('trackRecipes')}</p>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="hidden lg:block">
                                                    <div
                                                        className="mega-promo bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/5 rounded-xl p-6 h-full flex flex-col items-start">
                                                        <span
                                                            className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-[11px] font-bold mb-4">Inzeedo
                                                            ERP</span>
                                                        <h4 className="text-lg font-semibold text-white mb-2">{t('systemV2')}</h4>
                                                        <p className="text-slate-400 text-sm mb-6 leading-relaxed">{t('experienceNextGen')}</p>
                                                        <button
                                                            className="mt-auto bg-white text-black px-4 py-2 rounded-lg font-semibold text-sm hover:bg-slate-200 transition-colors w-full">{t('exploreNow')}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="nav-item mobile-stagger will-change-transform w-full lg:w-auto">
                                    <a href="#pricing"
                                        className="text-slate-400 hover:text-white font-medium text-[16px] lg:text-[14px] transition-colors block py-2 lg:py-0">{t('pricing')}</a>
                                </div>
                            </div>
 
                            {/* Actions on the Right */}
                            <div
                                className="nav-actions flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6 w-full lg:w-auto mt-6 lg:mt-0 pt-6 lg:pt-0 border-t border-white/10 lg:border-none lg:ml-auto">
                                <select 
                                    className="bg-[#18181b] text-white border border-white/10 rounded-md px-2 py-1 text-sm outline-none cursor-pointer hover:border-white/20"
                                    value={locale}
                                    onChange={(e) => switchLanguage(e.target.value)}
                                >
                                    <option value="en">EN</option>
                                    <option value="ar">AR</option>
                                    <option value="si">SI</option>
                                </select>
                                <a href="#login"
                                    className="mobile-stagger text-white font-medium text-[16px] lg:text-[14px] will-change-transform w-full lg:w-auto text-left py-2 lg:py-0 hover:text-slate-300 transition-colors">{t('clientLogin')}</a>
                                <a href="#demo"
                                    className="mobile-stagger relative inline-flex h-9 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#09090b] group transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] w-full lg:w-auto text-center">
                                    <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3b82f6_0%,#09090b_50%,#a855f7_100%)] transition-all" />
                                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#09090b] px-5 py-2 font-medium text-[13px] text-white backdrop-blur-3xl group-hover:bg-[#121214] transition-colors">
                                        {t('bookDemo')}
                                    </span>
                                </a>
                            </div>
                        </div>
                    </nav>
                </header>
        </>
    );
}