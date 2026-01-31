import './productCard.css'

const ProductCard = ({
  image = '/product1.svg',
  title = 'Palma Vita Oil',
  description = 'Daily cooking made easy.',
  price = 'N2500',
  alt = 'Product image'
}) => {
  return (
    <div className="product-card">
      <img className="product-image" src={image} alt={alt} srcSet="" />
      <div className="product-details">
        <h3 className="product-title">{title}</h3>
        <p className="product-desc">{description}</p>
        <h3 className="product-price">{price}</h3>
      </div>
    </div>
  )
}

export default ProductCard