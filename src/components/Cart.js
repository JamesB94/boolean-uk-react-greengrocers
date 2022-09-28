const CartShopping = props => {
  const { cartItems, minus, inc } = props
  return (
    <main id="cart">
      <h2>Your Cart</h2>
      <div className="cart--item-list-container">
        <ul className="item-list cart--item-list">
          {/* {cartItems.length === 0 && <div>Cart Is Empty</div> }
                {cartItems.length === 1 && <div>You have an item</div> } */}

          {cartItems.map(item => (
            <li className="cart--item-list li" key={item.id}>
              <div className="cart--item-icon">
                <img src={`./assets/icons/${item.id}.svg`} />
              </div>

              <div className="center">{item.name}</div>
              <button
                className="remove-btn"
                onClick={clickEvent => {
                  minus(item)
                }}
              >
                -
              </button>
              <button className="quantity-btn">{item.quantity}</button>
              <button
                className="add-btn"
                onClick={clickEvent => {
                  inc(item)
                }}
              >
                +
              </button>
              {/* <button onClick={Product.quantity++}>+</button> */}
            </li>
          ))}
        </ul>
      </div>
      <div className="total-section">
        <div>
          <h3>Total</h3>
        </div>
        <div>
          <span className="total-number">£0.00</span>
        </div>
      </div>
    </main>
  )
}

export default CartShopping

/*
<main id="cart">
<h2>Your Cart</h2>
<div className="cart--item-list-container">
  <ul className="item-list cart--item-list">
    // { Wrtite some code here... }
  </ul>
</div>
<div className="total-section">
  <div>
    <h3>Total</h3>
  </div>
  <div>
    <span className="total-number">£0.00</span>
  </div>
</div>
</main> */
