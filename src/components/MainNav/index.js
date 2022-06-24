import React from "react";
import "./style.css";

export default function MainNav (){
    return(
        <nav className="Main-Nav">
            <ul>
                <li><a href="#">Item menu1</a></li>
                <li className="Menu-Dropdown">
                    <span className="Dropdown-Button">Item menu2</span>
                    <ul className="Dropdown-Content">
                        <li><a href="#">Sub Item 1</a></li>
                        <li><a href="#">Sub Item 2</a></li>
                        <li><a href="#">Sub Item 3</a></li>
                    </ul>
                </li>
                <li><a href="#">Item menu3</a></li>
                <li><a href="#">Item menu4</a></li>
                <li><a href="#">Item menu5</a></li>
            </ul>
        </nav>
    );
}