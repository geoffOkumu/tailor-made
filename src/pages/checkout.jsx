import React from 'react'
import { navigate } from 'gatsby'
import Container from '../components/widgets/Container'

const Checkout = ({ location }) => {
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
        navigate('/cart')
      )}
    </Container>
  )
}

export default Checkout
