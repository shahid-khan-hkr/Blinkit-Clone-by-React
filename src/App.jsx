import React from "react";
import Header from "./Component/Header";
import HeroBanner from "./Component/HeroBanner";
import CallToAction from "./Component/CallToAction";
import Product from "./Component/Product";
import DairyBreadAndEggs from "./Component/DairyBreadAndEggs";
import RollingPaperAndTobacco from "./Component/RollingPaperAndTobacco";
import MobileFooterBanner from "./Component/MobileFooterBanner";
import HouseholdCleaningEssentials from "./Mobile Component/HouseholdCleaningEssentials"
import Footer from "./Component/Footer";
import SocialLinks from "./Component/SocialLinks";

export default function App() {
     return (
          <>
               <Header />
               <HeroBanner/>
               <CallToAction/>
               <Product/>
               <DairyBreadAndEggs/>
               <RollingPaperAndTobacco/>
               <HouseholdCleaningEssentials/>
               <MobileFooterBanner/>
               <Footer/>
               <SocialLinks/>
          </>
     )
}