import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = ({product, handleAddToCart}) => {
    // const {product, handleAddToCart}= props;
    const {name, img, price, saller, ratings} = product;
    return (
        <div className="product">
            <img src={img} alt="" />
                    <div className="product-info">
                            <p className="products-name">Name: {name}</p>
                            <p>Price: ${price}</p>
                            <p><small>Saller: {saller}</small></p>
                            <p><small>Ratings: {ratings} starts</small></p>
                    </div>
                    <button className="btn-cart" onClick={() => handleAddToCart(product)}>
                        <p className="btn-text">Add to Cart</p>
                        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                    </button>
        </div>
    );
};

export default Product;