import React, { Component } from "react";
import logo from "../../images/logo.png";
import "./Header.css";

// export default class Header extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>This is header</h1>
//             </div>
//         );
//     }
// }

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Review</a>
                <a href="/inventory">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;
