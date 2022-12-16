import React from "react"
import './App.css'

class CartItems extends React.Component{
    //   nameChange = () =>{
    //     this.setState(() =>{
    //         return{
    //             title:'Hello im changed'
    //         }
    //     })
    //   }
    
    increaseQuantity = () =>{
        //Fonm 1
        // this.state.qty += 1
        // console.log('this.state', this.state);
        //Form 2
        // this.setState({
        //     qty: this.state.qty + 1
        // });
        this.setState((prevState) => {
            return{
                qty:prevState.qty +  1
            }
            
        });
    }
    decreaseQty = () => {
        const {qty} = this.state;
        if(qty === 0){
            return;
        }

        this.setState((prevState) => {
            return{
                qty:prevState.qty - 1

            }
            
        });
    }
   
     
    render(){
        console.log('this.prop',this.props)
        const {price,title,qty} = this.props.products;
        return(
            
        <div className="CartItems">
            <div className="leftItems">
                <img style={styles.image} />
            </div>
            <div className="rightItems">
                <div style={{fontSize: 25}}>{title}</div>
                <div style={{color: "#777"}}>Price: {price}</div>
                <div style={{color : "#777"}}>qty : {qty}</div>
                <div className="cartItemsAction">
                    {/* buttons */}
                    <img src="https://cdn-icons-png.flaticon.com/512/3303/3303893.png" className="actionIcons" alt="Increase" onClick={this.increaseQuantity}/>
                    <img src="https://cdn-icons-png.flaticon.com/512/992/992683.png" className="actionIcons" alt="Decrease" onClick={this.decreaseQty}/>
                    <img src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" className="actionIcons" alt="Delete"/>
                </div>
            </div>
        </div>
        );
    }
}
const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4, 
        background:'#ccc'
    }
}
export default CartItems;