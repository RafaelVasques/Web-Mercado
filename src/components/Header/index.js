import React from "react";
// import './style.css';

import SearchBarCartAera from "../Comps-Header/SearchBarCartArea";
import MainNav from "../Comps-Header/MainNav"
import DeliveryAddress from "../Comps-Header/DeliveryAddress";

export default function Header (){
    return(
        <header>
            <SearchBarCartAera />
            <MainNav />
            <DeliveryAddress />
        </header>
    );
}