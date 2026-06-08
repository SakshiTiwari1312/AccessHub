import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Trustedandboardsection from "../components/Trustedandboardsection";
import Featurespotlightsection from "../components/Featurespotlightsection";
import TestimonialsSection from "../components/TestimonialsSection";
import IntegrationsSection from "../components/IntegrationsSection";
import Pricingsection from "../components/Pricingsection";
import Ctabannersection from "../components/Ctabannersection";
import Footersection from "../components/Footersection";
function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Trustedandboardsection />
      <Featurespotlightsection />
      <TestimonialsSection />
      <IntegrationsSection />
      <Pricingsection />
      <Ctabannersection />
      <Footersection />
    </>
  );
}

export default LandingPage;
