import React from "react";
// import './style.css';

import SearchBarCartAera from "../SearchBarCartArea";
import MainNav from "../MainNav";
import DeliveryAddress from "../DeliveryAddress";

export default function Header (){
    return(
        <header>
            <SearchBarCartAera />
            <MainNav />
            <DeliveryAddress />
        </header>
    );
}