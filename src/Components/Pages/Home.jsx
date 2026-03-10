import React from "react";
import { Divide } from "lucide-react";
import HeroHome from "../Home/HeroHome";
import ClientsSwiper from "../Home/ClientsSwiper";
import PremiumServices from "../Home/PremiumServices";
import StorySection from "../Home/StorySection";
import CareerSection from "../Home/CareerSection";
import ClientReviews from "../Home/ClientReviews";
import AuditSection from "../Home/AuditSection";
import WorkflowSection from "../Home/WorkflowSection";
import InvestmentSection from "../Home/InvestmentSection";
import PaymentSection from "../Home/PaymentSection";
import FAQSection from "../Home/FAQSection";
import FutureSection from "../Home/FutureSection";

const Home = () => {
    return (
        <div>
            <HeroHome />
            <ClientsSwiper />
            <PremiumServices />
            <StorySection />
            <CareerSection />
            <ClientReviews />
            <AuditSection />
            <WorkflowSection/>
            <InvestmentSection/>
            <PaymentSection/>
            <FAQSection/>
            <FutureSection/>

        </div>
    );
};

export default Home;