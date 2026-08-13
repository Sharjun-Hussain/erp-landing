'use client';
import { useTranslations } from 'next-intl';

export default function AllFeatures() {
    const t = useTranslations('AllFeatures');
    const features = [
        { name: "Point of Sale", icon: "🛒", color: "from-blue-500/20 to-transparent", border: "group-hover:border-blue-500/50" },
        { name: "Inventory Management", icon: "📦", color: "from-amber-500/20 to-transparent", border: "group-hover:border-amber-500/50" },
        { name: "Multi-Branch Management", icon: "🏢", color: "from-purple-500/20 to-transparent", border: "group-hover:border-purple-500/50" },
        { name: "Customer Loyalty", icon: "❤️", color: "from-pink-500/20 to-transparent", border: "group-hover:border-pink-500/50" },
        { name: "Finance", icon: "💰", color: "from-emerald-500/20 to-transparent", border: "group-hover:border-emerald-500/50" },
        { name: "Advanced Business Analytics", icon: "📊", color: "from-blue-400/20 to-transparent", border: "group-hover:border-blue-400/50" },
        { name: "Sales Forecasting", icon: "📈", color: "from-rose-500/20 to-transparent", border: "group-hover:border-rose-500/50" },
        { name: "Customer Insights", icon: "🎯", color: "from-indigo-500/20 to-transparent", border: "group-hover:border-indigo-500/50" },
        { name: "Security & Access", icon: "🔐", color: "from-slate-400/20 to-transparent", border: "group-hover:border-slate-400/50" },
        { name: "Modern Architecture", icon: "⚡", color: "from-yellow-400/20 to-transparent", border: "group-hover:border-yellow-400/50" },
        { name: "Purchasing & Suppliers", icon: "🤝", color: "from-teal-500/20 to-transparent", border: "group-hover:border-teal-500/50" },
        { name: "Purchase Returns", icon: "↩️", color: "from-orange-500/20 to-transparent", border: "group-hover:border-orange-500/50" },
        { name: "Promotions & Pricing", icon: "🏷️", color: "from-fuchsia-500/20 to-transparent", border: "group-hover:border-fuchsia-500/50" },
        { name: "Returns & Exchanges", icon: "🔄", color: "from-cyan-500/20 to-transparent", border: "group-hover:border-cyan-500/50" },
        { name: "Barcode & Label Printing", icon: "🖨️", color: "from-gray-400/20 to-transparent", border: "group-hover:border-gray-400/50" },
        { name: "Wholesale & B2B Billing", icon: "💼", color: "from-sky-500/20 to-transparent", border: "group-hover:border-sky-500/50" },
        { name: "Orders & Delivery Desk", icon: "🚚", color: "from-red-500/20 to-transparent", border: "group-hover:border-red-500/50" },
        { name: "Tax & Compliance Tools", icon: "⚖️", color: "from-lime-500/20 to-transparent", border: "group-hover:border-lime-500/50" },
    ];

    return (
        <section id="all-features" className="py-24 relative z-20 bg-[#09090b]">
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05),transparent_70%)] pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 all-features-header">
                    <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-4 block">
                        The Complete Ecosystem
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                        Everything Your Retail Business Needs.
                    </h2>
                    <p className="text-slate-400 text-lg">
                        18 powerful modules working together in perfect harmony. No external plugins required.
                    </p>
                </div>

                {/* Dense Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 all-features-grid">
                    {features.map((feature, idx) => (
                        <div 
                            key={idx}
                            className={`feature-pill group relative bg-[#121214] border border-white/10 rounded-2xl p-5 flex flex-col items-center justify-center text-center gap-3 cursor-default overflow-hidden transition-all duration-300 ${feature.border} hover:shadow-lg hover:-translate-y-1`}
                        >
                            {/* Hover Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-b ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                            
                            <div className="text-3xl relative z-10 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-sm font-semibold text-slate-300 group-hover:text-white relative z-10 leading-tight">
                                {feature.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
