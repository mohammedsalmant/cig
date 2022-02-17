import React from 'react'
import Card from '../Card/Card'
import './ProductList.css'

const ProductList = (props) => {
console.log(props);
  const product =[1,2,3,4,5,6]
  return (
    <div className='productList'>
        <div className="grid-container">
            {product.map(item=>(
                <Card />
            ))}
        </div>
    </div>
  )
}

export default ProductList