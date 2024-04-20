import React from 'react';
import './Product.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StarRateIcon from '@mui/icons-material/StarRate';
import { Link } from 'react-router-dom';
const Product = () => {
    return (
        <div className='our-product'>
            <div className='title-product'>
                <h1>Our products</h1>
            </div>
            <div className='our-product-content'>
                <div className='product-wrapper'>
                    <div className='our-product-title'>
                        <p className='title'>Top-rated extensions</p>
                        <button>
                            <Link>View More <ArrowForwardIcon /></Link>
                        </button>
                    </div>
                    <div className='list-product'>
                        <ul className='product-list-items'>
                            <li className='item-product'>
                                <div className='product-item-info'>
                                    <img src={require('../../../assets/images/[Product] Image.png')} alt='banner' />
                                    <span>hot</span>
                                    <div className='product-detail'>
                                        <div className='product-review'>
                                            <div className='rating'>
                                                <StarRateIcon /><StarRateIcon /><StarRateIcon /><StarRateIcon /><StarRateIcon />
                                            </div>
                                            <div className='review-action'>
                                                5(2)
                                            </div>
                                        </div>
                                        <div className='product-name'>
                                            <p>Shopware 6 - Product attachment</p>
                                        </div>
                                        <div className='product-price'>
                                            $8.90 <span>$45.25</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className='item-product'>
                                <div className='product-item-info'>
                                    <img src={require('../../../assets/images/[Product2] Image.png')} alt='banner' />
                                    <span>hot</span>
                                    <div className='product-detail'>
                                        <div className='product-review'>
                                            <div className='rating'>
                                                <StarRateIcon /><StarRateIcon /><StarRateIcon /><StarRateIcon /><StarRateIcon />
                                            </div>
                                            <div className='review-action'>
                                                5(2)
                                            </div>
                                        </div>
                                        <div className='product-name'>
                                            <p>Magento 2 Product Labels</p>
                                        </div>
                                        <div className='product-price'>
                                            $8.90 <span>$45.25</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className='item-product'>
                                <div className='product-item-info'>
                                    <img src={require('../../../assets/images/[Product3] Image.png')} alt='banner' />
                                    <span>hot</span>
                                    <div className='product-detail'>
                                        <div className='product-review'>
                                            <div className='rating'>
                                                <StarRateIcon /><StarRateIcon /><StarRateIcon /><StarRateIcon /><StarRateIcon />
                                            </div>
                                            <div className='review-action'>
                                                5(2)
                                            </div>
                                        </div>
                                        <div className='product-name'>
                                            <p>Shopware 6 Testimonial Management</p>
                                        </div>
                                        <div className='product-price'>
                                            $8.90 <span>$45.25</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='product-wrapper'>
                    <div className='our-product-title'>
                        <p className='title'>Magento 2 extensions</p>
                        <button>
                            <Link>View More <ArrowForwardIcon /></Link>
                        </button>
                    </div>
                    <div className='list-product'>
                        <ul className='product-list-items'>
                            <li className='item-product'>
                                <div className='product-item-info'>
                                    <img src={require('../../../assets/images/[Product4] Image.png')} alt='banner' />
                                    <span>hot</span>
                                    <div className='product-detail'>
                                        <div className='product-review'>
                                            <div className='rating'>
                                                <StarRateIcon /><StarRateIcon /><StarRateIcon /><StarRateIcon /><StarRateIcon />
                                            </div>
                                            <div className='review-action'>
                                                5(2)
                                            </div>
                                        </div>
                                        <div className='product-name'>
                                            <p>Magento 2 Product Attachments</p>
                                        </div>
                                        <div className='product-price'>
                                            $8.90 <span>$45.25</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className='item-product'>
                                <div className='product-item-info'>
                                    <img src={require('../../../assets/images/[Product5] Image.png')} alt='banner' />
                                    <span>hot</span>
                                    <div className='product-detail'>
                                        <div className='product-review'>
                                            <div className='rating'>
                                                <StarRateIcon /><StarRateIcon /><StarRateIcon /><StarRateIcon /><StarRateIcon />
                                            </div>
                                            <div className='review-action'>
                                                5(2)
                                            </div>
                                        </div>
                                        <div className='product-name'>
                                            <p>Magento 2 Guest To Customer</p>
                                        </div>
                                        <div className='product-price'>
                                            $8.90 <span>$45.25</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className='item-product'>
                                <div className='product-item-info'>
                                    <img src={require('../../../assets/images/[Product6] Image.png')} alt='banner' />
                                    <span>hot</span>
                                    <div className='product-detail'>
                                        <div className='product-review'>
                                            <div className='rating'>
                                                <StarRateIcon /><StarRateIcon /><StarRateIcon /><StarRateIcon /><StarRateIcon />
                                            </div>
                                            <div className='review-action'>
                                                5(2)
                                            </div>
                                        </div>
                                        <div className='product-name'>
                                            <p>Magento 2 Pro Slider</p>
                                        </div>
                                        <div className='product-price'>
                                            $8.90 <span>$45.25</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
