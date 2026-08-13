'use client';
import { useTranslations } from 'next-intl';


export default function Marquee() {
    const t = useTranslations('Marquee');
    return (
        <>
            <div
                    className="py-10 border-y border-white/5 overflow-hidden bg-[#0a0a0c] relative z-20 flex whitespace-nowrap marquee-container">
                    <div
                        className="marquee-content animate-marquee text-4xl md:text-6xl font-black text-slate-400 capitalize tracking-tight flex gap-24 items-center will-change-transform pr-24">
                        <span>{t('omnichannel')}</span>
                        <span>{t('cloud')}</span>
                        <span>{t('b2b')}</span>
                        <span>{t('multi')}</span>
                        <span>{t('manufacturing')}</span>
                        <span>{t('supermarket')}</span>
                        {/* Repeat for seamless loop */}
                        <span>{t('omnichannel')}</span>
                        <span>{t('cloud')}</span>
                        <span>{t('b2b')}</span>
                        <span>{t('multi')}</span>
                        <span>{t('manufacturing')}</span>
                        <span>{t('supermarket')}</span>
                    </div>
                </div>
        </>
    );
}