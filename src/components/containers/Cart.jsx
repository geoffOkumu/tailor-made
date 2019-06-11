import React from 'react'

export const CartContext = React.createContext({
  items: [],
  addItem: () => {},
})

export default class CartProvider extends React.Component {
  constructor(props) {
    super(props)

    this.addItem = item => {
      this.setState(state => ({ items: [...state.items, item] }))
    }

    this.state = {
      items: [],
      addItem: this.addItem,
    }
  }

  render() {
    const { children } = this.props

    return (
      <CartContext.Provider value={this.state}>{children}</CartContext.Provider>
    )
  }
}
