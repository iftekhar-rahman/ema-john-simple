import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    console.log(props);
    const {img, name, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div className="">
                <img src={img} alt=""/>
            </div>
            <div className="">
                <h4 className="product-name">{name}</h4>
                <p><small>By: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stokc - order soon</small></p>
                <button className="main-btn"
                onClick={ () => props.handleAddProduct(props.product)}
                ><FontAwesomeIcon icon={faShoppingCart} /> Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;