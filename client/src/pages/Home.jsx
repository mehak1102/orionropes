// import Navbar from "../components/layout/Navbar";
// import Footer from "../components/layout/Footer";
// import FloatingActions from "../components/layout/FloatingActions";

// import Hero from "../components/home/Hero";
// import Stats from "../components/home/Stats";
// import TrustStrip from "../components/home/TrustStrip";
// import ProductShowcase from "../components/home/ProductShowcase";
// import Industries from "../components/home/Industries";
// import ClientsSection from "../components/home/ClientsSection";
// import QualitySection from "../components/home/QualitySection";
// import WhyChooseUs from "../components/home/WhyChooseUs";
// import CTASection from "../components/home/CTASection";

// export default function Home() {
//   return (
//     <div className="min-h-screen overflow-x-hidden bg-[#06111f] text-white">
//       <Navbar />
//       <FloatingActions />
//       <Hero />
//       <TrustStrip />
//       <Stats />
//       <ProductShowcase />
//       <Industries />
//       <ClientsSection />
//       <QualitySection />
//       <WhyChooseUs />
//       <CTASection />
//       <Footer />
//     </div>
//   );
// }

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import FloatingActions from "../components/layout/FloatingActions";

import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import TrustStrip from "../components/home/TrustStrip";
import Industries from "../components/home/Industries";
import ClientsSection from "../components/home/ClientsSection";
import QualitySection from "../components/home/QualitySection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import CTASection from "../components/home/CTASection";
import VisionMissionSection from "../components/home/VisionMissionSection";
import MarketPresenceSection from "../components/home/MarketPresenceSection";
import ApplicationIndustries from "../components/home/ApplicationIndustries";
// import ContactSection from "../components/home/ContactForm";
import ContactSection from "../components/home/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#06111f] text-white">
      <Navbar />
      <FloatingActions />
      <Hero />
      <TrustStrip />
      <Stats />
        <QualitySection />
      <WhyChooseUs />
      <ApplicationIndustries />
      <VisionMissionSection />
<MarketPresenceSection />
{/* <ApplicationIndustries /> */}

      <ClientsSection />
   
      <CTASection />
       <ContactSection />
      <Footer />
    </div>
  );
}

