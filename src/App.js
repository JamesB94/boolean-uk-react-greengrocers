import './styles/reset.css'
import './styles/index.css'
import { useState } from 'react'
import Greengrocers from './components/Greengrocers'
import Cart from './components/Cart'
import Footer from './components/Footer'

import initialStoreItems from './store-items'
//import CartShopping from './components/Cart';

export default function App() {
  const [fruitAndVeg, setTasks] = useState(initialStoreItems)

  const [cartItems, setCart] = useState([])

  const addToCart = product => {
    const cartItem = { ...product }
    cartItem.quantity = 1
    console.log('it works', product)
    setCart([...cartItems, cartItem])
  }

  function decrementQuantity(cartItem) {
    console.log('the minus btn got to APP.js', cartItem.name, cartItem.quantity)
    // setCart(cartItem.quantity - 1)

    if(cartItem.quantity > 1) {
      cartItem.quantity--
      setCart([...cartItems])
    } else {
      cartItem.filter(item => item.length < 1)
      setCart([...cartItems])
    }
    // if cartItem.quantity is > 1 
    //   cartItem.quantity-- 
    //   setCart([...cartItems])  // update stae for React
    // else
    //   remove cartItem from cart 
  }

  function incQuantity(cartItem) {
    cartItem.quantity++
    setCart([...cartItems])
  }
  console.log('rendering app', cartItems)
  //console.log(fruitAndVeg)
  return (
    <>
      <Greengrocers foodList={fruitAndVeg} onAdd={addToCart} />
      <Cart cartItems={cartItems} minus={decrementQuantity} inc={incQuantity} />
      <Footer />
    </>
  )
}

/*
Here's what a store item should look like
{
  id: '001-beetroot',
  name: 'beetroot',
  price: 0.35
}

What should a cart item look like? 🤔
*/

//console.log(initialStoreItems)
