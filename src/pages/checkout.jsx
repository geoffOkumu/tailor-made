import React from 'react'
import { Link, navigate } from 'gatsby'
import Container from '../components/widgets/Container'

const Checkout = ({ location }) => {
  if (!(location.state && location.state.products)) {
    if (typeof window !== 'undefined') navigate('/store')
  }
  return (
    <Container>
      {location.state && location.state.products ? (
        <div>
          <h1>
            Checkout {location.state.products.length} item(s) - Subtotal Ksh{' '}
            {location.state.subtotal}
          </h1>
          {location.state.products.map(i => (
            <div>
              <h3>{i.name}</h3>
              <span> - {i.price}</span>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h1>No products in cart</h1>
          <Link to="/store">Go to store</Link>
        </div>
      )}
    </Container>
  )
}

export default Checkout
