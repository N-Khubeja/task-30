import React from 'react'
import { Icard } from '../../interface/Card.interface'
import SimpleCard from './SimpleCard'


interface IproductCard extends Icard {
  price:string
  img:string
}

const ProductCard:React.FC<IproductCard> = ({price,img,...rest}) => {
  return (
    <div>
      <h3>{price}</h3>
      <img src={img} alt={img} />
      <SimpleCard {...rest}/>
    </div>
  )
}

export default ProductCard