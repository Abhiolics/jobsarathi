import EarningCalculator from "@/components/landingpage/earningcalculator";
import Header from "@/components/landingpage/header";
import HowItWorksStepper from "@/components/landingpage/howitworks";
import ImpactSection from "@/components/landingpage/vision";
import AboutUs from "@/components/shadcn-space/blocks/about-us-01/about-us";
import CTA from "@/components/shadcn-space/blocks/cta-01/cta";
import Faq from "@/components/shadcn-space/blocks/faq-01/faq";
import Feature from "@/components/shadcn-space/blocks/feature-02/feature";
import Footer from "@/components/shadcn-space/blocks/footer-01/footer";
import Pricing from "@/components/shadcn-space/blocks/pricing-02/pricing";
import Team from "@/components/shadcn-space/blocks/team-02/team";
import { Rocket, Users, Star } from "lucide-react";




export default function Home() {
  return (
  <>
  <Header/>
  <AboutUs />
  <EarningCalculator/>
  <Feature/>
  <Pricing/>
  <HowItWorksStepper/>
  <Team/>
  <ImpactSection/>
  <Faq/>
  <CTA/>
  <Footer/>
  </>
  );
}
