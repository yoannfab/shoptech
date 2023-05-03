import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import classNames from 'classnames'

const Product = ({ product }) => {
  const cardClasses = classNames('my-3', 'p-3', 'rounded', 'custom-card-class'); 

  return (
    <Card className={cardClasses} card-sm style={{ height: '500px' }}>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' className='custom-card-img' />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h3' style={{fontSize: '18px'}}>€{product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
