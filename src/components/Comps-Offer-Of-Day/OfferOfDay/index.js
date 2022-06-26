import React from "react";
import "./style.css"

import SeeMoreProducts from "../../SeeMoreProducts";

export default function OfferOfDay (){
    return(
        <div className="Offer-Of-Day">
            <h1>OFERTAS DO DIA</h1>
            <div className="Cards-Area"></div>
            <SeeMoreProducts />
        </div>
    );
}
