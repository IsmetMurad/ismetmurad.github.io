import '../Product/Product.css'
import { ProductInterface } from '../types'

type Props = {}

const Product = ({img, name, description} : ProductInterface ) => {
  return (
    <>
    <div className='product-card-wrapper'>

        <img className='card-img' src={img} alt="" />
        <h2>{name}</h2>
        <span>{description}</span>

    </div>
    
    </>
  )
}

export default Product