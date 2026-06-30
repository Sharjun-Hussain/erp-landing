import GSAPAnimations from "@/components/GSAPAnimations";
import FAQSection from "@/components/FAQSection";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Modules from "@/components/Modules";
import Architecture from "@/components/Architecture";
import Clients from "@/components/Clients";
import BusinessTypes from "@/components/BusinessTypes";
import SyncAddons from "@/components/SyncAddons";
import RobustTrack from "@/components/RobustTrack";
import MobileCards from "@/components/MobileCards";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main>
            <Header />
            <Hero />
            <Marquee />
            <Modules />
            <Architecture />
            <Clients />
            <BusinessTypes />
            <SyncAddons />
            <RobustTrack />
            <MobileCards />
            <FAQSection />
            <Footer />
            <GSAPAnimations />
        </main>
    );
}
