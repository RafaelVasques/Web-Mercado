import React from "react";
import './style.css';

import Header from "../Header"
import OfferOfDay from "../Comps-Offer-Of-Day/OfferOfDay";
import PersonalProductSection from "../Comp-Personal-Products-Section/PersonalProductsSection";

export default function MainPage (){
    return(
        <div>
            <Header />
            <OfferOfDay />
            <PersonalProductSection />
        </div>
    );
}
