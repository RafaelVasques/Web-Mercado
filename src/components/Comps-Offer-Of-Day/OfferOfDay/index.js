import React from "react";
import "./style.css"

import SeeMoreProducts from "../../SeeMoreProducts";
import CardProduct from "../../Comps-Produto/CardProduct";

export default function OfferOfDay (){
    return(
        <div className="Offer-Of-Day">
            <h1>OFERTAS DO DIA</h1>
            <div className="Cards-Area">
                <CardProduct />
                <CardProduct />
                <CardProduct />
            </div>
            <SeeMoreProducts />
        </div>
    );
}
