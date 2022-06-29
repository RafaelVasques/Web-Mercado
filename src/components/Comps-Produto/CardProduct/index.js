import React from "react";
import "./style.css";

export default function CardProduct () {
    return(
<div>
    <div className="Offer-Label">
        -19% de desc. <span>R$13,50</span>
    </div>
    <div className="Card-Product">
        <div className="Product-Img-Container">    
            <img  src="/productimages/papelHigienico.png" />
        </div>
        <p className="Product-Descripton">
            Papel Higiênico Ultra Folha Dupla <br/>
            Dualette Elite Pacote 8 Unidades
        </p>
        <div className="Quantity-Unity-Value-Container">
            <div className="Product-Quantity-Container">
                <button className="Minus-Product-Button">-</button>
                <div className="Product-Quantity">1</div>
                <button className="Plus-Product-Button">+</button>
            </div>
            <span className="Unity-Value">{"("}aprox. R$1,37/unidade{")"}</span>
        </div>
        <button className="Add-Product-To-Cart-Button">Adicionar no carrinho R$ 10,90</button>
        <div className="Product-On-Cart-Label">Produto no carrinho</div>
    </div>
</div>
    );
}