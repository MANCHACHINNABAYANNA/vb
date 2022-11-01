import React from 'react'
import './Products.css'
import ProductsItem from './ProdutsItem'

const recommendationData =[
    {
        title: 'Apple iPhone 12 (64GB) -  RED',
        price: 47999,
        oldPrice: 65999,
        img: 'https://m.media-amazon.com/images/I/417PwBC+iEL._SX342_SY445_.jpg'
    },
    {
        title: 'Apple iPhone 13 Pro (256GB) - Silver',
        price: 109900,
        oldPrice: 129900,
        img: 'https://m.media-amazon.com/images/I/617FFRO3vcL._SX679_.jpg'
    },
    {
        title: 'New Apple AirTag',
        price: 2990,
        oldPrice: 3190,
        img: 'https://m.media-amazon.com/images/I/71L5lSfJIPS._SX679_.jpg'
    },
    {
        title: 'Apple MagSafe Battery Pack',
        price: 10900,
        oldPrice: 10900,
        img: 'https://m.media-amazon.com/images/I/41tbRWAJfES._SX679_.jpg'
    },
    {   
        title: 'Apple AirPods Pro (2nd Generation)',
        price: 16900,
        oldPrice: 26900,
        img: 'https://m.media-amazon.com/images/I/61SUj2aKoEL._SX679_.jpg'
    },
    {
        title: 'Apple Lightning to 3.5 mm Headphone Jack Adapter',
        price: 749,
        oldPrice: 900,
        img: 'https://m.media-amazon.com/images/I/413zwUVL+1L._SX679_.jpg'
    },
    {
        title: 'Apple EarPods with 3.5mm Headphone Plug​​​​​​​​​​​​​​',
        price: 16900,
        oldPrice: 26900,
        img: 'https://m.media-amazon.com/images/I/41YDDVjblsL._SX679_.jpg'
    },
    {
        title: 'Apple Pencil (2nd Generation)​​​​​​​​​​​​​​',
        price: 8990,
        oldPrice: 10990,
        img: 'https://m.media-amazon.com/images/I/21bn7AjfSnS._SX679_.jpg'
    },
    
]

function Recommendation() {
  return (
    <div className='recommendation-container'>
        <div className='recommendation-header'>
            Product
        </div>
        <div className='recommendation-list'>
            {
                recommendationData.map( item => 
                    <ProductsItem 
                    title={item.title}  
                    price={item.price}
                    oldPrice={item.oldPrice}
                    img={item.img}
                    /> 
                )
            }
        </div>
    </div>
  )
}

export default Recommendation