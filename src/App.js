import './styles/reset.css'
import './styles/index.css'
import { useState } from 'react'
import Greengrocers from './components/Greengrocers'
import Cart from './components/Cart'
import Footer from './components/Footer'

import initialStoreItems from './store-items'

export default function App() {
  const [fruitAndVeg, setTasks] = useState(initialStoreItems)

 const [cartItems, setCart] = useState([])


 const addToCart = product => {
  let existingProduct = cartItems.find(item => item.id === product.id);
  if(existingProduct) {
    setCart(cartItems.map(item => item.id === product.id ? {...item, quantity: item.quantity+1} : item))
  } else {
    setCart([...cartItems, { ...product, quantity: 1 }]);
  }
}


  const decreseButton = product => {
    if (product.quantity <= 1) {
      cartItems.splice(cartItems.indexOf(product), 1)
      setCart([...cartItems])
      return
    } else {
      product.quantity--
      setCart([...cartItems])
    }
    
  }

  const incQuantity = (cartItem) => {
    cartItem.quantity++
    setCart([...cartItems])
  }

const totalPrice = () => {
  let total = 0

  cartItems.forEach(item => total += (item.quantity * item.price))

  let fixedToTwo = total.toFixed(2)

  return `£${fixedToTwo}`

}

  return (
    <>
      <Greengrocers foodList={fruitAndVeg} onAdd={addToCart} />
      <Cart cartItems={cartItems} minus={decreseButton} inc={incQuantity} calculateTotal = {totalPrice}  />
      <Footer />
    </>
  )
}
