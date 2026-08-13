import FAQSection from "@/components/FAQSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingCards from "@/components/PricingCards";

export const metadata = {
    title: "Pricing | Inzeedo ERP",
    description: "Simple, transparent pricing for growing retail or manufacturing businesses.",
};

export default function PricingPage() {
    return (
        <main className="bg-[#09090b] min-h-screen">
            <Header />
            <PricingCards />
            <FAQSection />
            <Footer />
        </main>
    );
}
