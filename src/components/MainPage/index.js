import React from "react";
import './style.css';

import Header from "../Header"
import OfferOfDay from "../Comps-Offer-Of-Day/OfferOfDay";

export default function MainPage (){
    return(
        <div>
            <Header />
            <OfferOfDay />
        </div>
    );
    
}
