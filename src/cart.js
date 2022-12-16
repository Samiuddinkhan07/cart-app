import React from "react";
import CartItems from "./cartItems"



class Cart extends React.Component{
    constructor(){
        super();
        this.state={
            products:[
                {
                    title:'Mobile Phone',
                    price: 200,
                    qty : 1,
                    image:'',
                },
                {
                    title:'Watch',
                    price: 500,
                    qty : 1,
                    image:'',
                },
                {
                    title:'Keys',
                    price: 569,
                    qty : 1,
                    image:'',
                },
               
            ]

        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);
    }
     render(){
        const {products} = this.state;
        return(
            <>
            <div className="Header-Main">Your Cart</div>
            <div className="body-element"> 
            {products.map((products) => {
                return <CartItems products={products}/>
            })}
            </div>
            
            </>
        )
     }
}
export default Cart;