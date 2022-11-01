import React from 'react'

import './ProductsItem.css'

function ProductsItem({
    key,
    title,
    oldPrice,
    price,
    img
})


{
    return (
        <div className='item-container' >
            <img src={img} />
            <div className='item-info'>
                <div className='item-title'>
                    {title}
                </div>
                <div className='item-footer'>
                    <div className='item-old-price'>
                        ${oldPrice}
                    </div>
                    <div className='item-price'>
                        ${price}
                    </div>
                </div>
                <div className='item-footer-btn '>
                    <button className='item-card-btn btn-secondary' >
                        Add to CART
                    </button>

                </div>
            </div>
        </div>
    )
}

export default ProductsItem