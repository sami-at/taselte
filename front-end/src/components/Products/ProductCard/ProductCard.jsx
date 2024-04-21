import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart, faRandom} from '@fortawesome/free-solid-svg-icons';



export function Products(props) {
    return (
        
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    <div className="product-grid">
                        <div className="product-image">
                            <a href="#" className="image">
                                <img className="pic-1" src="./image1.jpeg" alt="Product 1"/>
                            </a>
                            <span className="product-discount-label">-33%</span>
                            <ul className="product-links">
                                <li><a href="#" data-tip="Add to Wishlist"><FontAwesomeIcon icon={faHeart} /></a></li>
                                <li><a href="#" data-tip="Compare"><FontAwesomeIcon icon={faRandom} /></a></li>
                                {/* <li><a href="#" data-tip="Quick View"><FontAwesomeIcon icon={faSearch} /></a></li> */}
                            </ul>
                        </div>
                        <div className="product-content">
                            <ul className="rating">
                                <li className="fas fa-star"><FontAwesomeIcon icon={faStar} /></li>
                                <li className="fas fa-star"><FontAwesomeIcon icon={faStar} /></li>
                                <li className="fas fa-star"><FontAwesomeIcon icon={faStar} /></li>
                            </ul>
                            <h3 className="title"><a href="#">Men's Blazer</a></h3>
                            <div className="price"><span>$90.00</span> $66.00</div>
                            <a className="add-to-cart" href="#">add to cart</a>
                        </div>
                    </div>
                </div>
                
            </div>
        
    );
}
