import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import { Link } from 'react-router-dom';

const Product = (props) => {
    // console.log(props);
    const {img, name, seller, price, stock, key } = props.product;
    return (
        <div className="product">
            <div className="">
                <img src={img} alt=""/>
            </div>
            <div className="">
                <h4 className="product-name"><Link to={"/product/"+key}>{name}</Link></h4>
                <p><small>By: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stokc - order soon</small></p>
                
                { props.showAddToCart === true && <button className="main-btn"
                onClick={ () => props.handleAddProduct(props.product)}
                ><FontAwesomeIcon icon={faShoppingCart} /> Add To Cart</button>}
                
            </div>
        </div>
    );
};

export default Product;