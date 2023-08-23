import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '../Redux/CartSlice'


const CartPage = () => {

  const cartItems = useSelector((store)=>store.cart.items)
  const dispatch = useDispatch()
  const handleClearCart = ()=>{
    dispatch(clearCart())
  }
  return (
    <div className='cart-container'>
      <h1>Cart Item - {cartItems.length}</h1>
      {
        cartItems.map((item)=>{
          console.log(item)
          return <div>
              <span>{item?.card?.info?.name}</span>
          </div>
        })
      }
      <button onClick={handleClearCart}>Clear</button>
    </div>
  )
}

export default CartPage