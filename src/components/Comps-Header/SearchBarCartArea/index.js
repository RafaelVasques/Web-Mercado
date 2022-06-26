import React from "react";
import './style.css';

export default function SearchBarCartAera (){
    return(
        <div className="SearchBar-Cart-Area">
            <div className="Sandwich-Menu"></div>
            <div className="Logo">LOGO ÁREA</div>
            <div className="Login-Message">Olá, Rafael</div>
            <a href="#" className="Cart-Button">
                <div>Carrinho</div>
                <div>
                    <span>85</span>
                    <span />
                </div>
            </a>
            <div className="Search-Bar">
                <input type="text" placeholder="Pesquise um produto"/>
                <img src="/assets/mag-glass.svg" />
            </div>
        </div>
    );
}