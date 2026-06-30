'use client';
import { useState } from 'react';

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            q: 'Does Inzeedo integrate with our existing Shopify store?',
            a: 'Yes, Inzeedo features a native, real-time two-way sync with Shopify. When a sale happens in your physical store, your Shopify stock drops instantly. No manual updates required.'
        },
        {
            q: 'Can we use our own receipt printers and cash drawers?',
            a: 'Absolutely. We integrate directly with QZ Tray, allowing seamless communication with USB and network receipt printers, cash drawers, and barcode scanners directly from the browser.'
        },
        {
            q: 'Is Inzeedo suitable for manufacturing and recipes?',
            a: 'Yes. Our production module allows you to build Recipes and Bills of Materials (BOM). When a finished good is produced, the system automatically calculates and deducts the correct amount of raw materials.'
        },
        {
            q: 'How does the WhatsApp CRM work?',
            a: 'We leverage the TextLk campaign integration to automatically send digital receipts, shipping updates, and targeted follow-up promotions directly to your customers\' WhatsApp numbers.'
        }
    ];

    return (
        <section id="faq" className="py-32 relative z-20 border-t border-white/5 bg-[#09090b]">
            <div className="max-w-4xl mx-auto px-6 lg:px-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
                        Got Questions?
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">Frequently Asked Questions</h2>
                    <p className="text-slate-400 text-lg">Everything you need to know about migrating your business to the Inzeedo ecosystem.</p>
                </div>
                
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-white/10 rounded-2xl overflow-hidden bg-[#121214] hover:border-white/20 transition-colors">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none"
                            >
                                <span className="text-white font-medium text-[17px]">{faq.q}</span>
                                <span className={`text-slate-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-white' : ''}`}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                </span>
                            </button>
                            <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <p className="text-slate-400 leading-relaxed text-sm md:text-base">{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
