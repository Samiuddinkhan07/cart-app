import React from "react";
import CartItems from "./cartItems"



class Cart extends React.Component{
     render(){
        return(
            <>
            <div className="Header-Main">Your Cart</div>
            <div className="body-element"> 
            <CartItems />
            <CartItems />
            <CartItems />
            </div>
            
            </>
        )
     }
}
export default Cart;