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
    <div>
      <h1>Cart Item - {cartItems.length}</h1>
      <button onClick={handleClearCart}>Clear</button>
      {
        cartItems.map((item)=>{
          console.log(item)
          return <div>
              <span>{item?.card?.info?.name}</span>
          </div>
        })
      }
    </div>
  )
}

export default CartPage