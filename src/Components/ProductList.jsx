import React from 'react'
import Product from '../Components/Product'
import  data  from '../Data'

function ProductList() {

  return (
    <div className='sm:grid mt-[220px] sm:mt-2   ml-10 sm:ml-0   sm:grid-cols-[400px_400px_400px] sm:justify-evenly'>
        {
            data.map( (item) =>{
                return <Product  product={item} />
            })
            
        }
    </div>
  )
}

export default ProductList
