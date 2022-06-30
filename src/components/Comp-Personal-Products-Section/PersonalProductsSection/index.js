import React from "react";
import "./style.css";

import CardProduct from "../../Comps-Produto/CardProduct";
import SeeMoreProducts from "../../SeeMoreProducts";

export default function PersonalProductSection () {
    return(
        <div className="Personal-Product-Section">
            <h1>BEBIDAS DE ATÉ R$ 5,90</h1>
            <div className="Cards-Area">
                <CardProduct />
                <CardProduct />
                <CardProduct />
            </div>
            <SeeMoreProducts />
        </div>
    );
}