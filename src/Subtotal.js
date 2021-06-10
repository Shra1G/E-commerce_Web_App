import React from "react";
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";


function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const amount = getBasketTotal(basket);
  return (
    <div className="subtotal">
      <h4><strong>Order Summary</strong></h4>
            <p>     
              ({basket.length} items): &nbsp;&nbsp;<strong>&#8377;{amount}</strong><br></br>
              Delivery Charges: &nbsp;&nbsp;<strong>&#8377; 20</strong><br></br><br></br>
              <hr></hr>
              <p className="subtotal__amount">Order Total:&nbsp;&nbsp;<strong>&#8377;{amount +20}</strong></p>
              <hr></hr>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>    
      <button>Proceed to Checkout</button><br></br>
      <p className="subtotal__tc">
          By placing your order, you agree to Amazon's <a target="_blank" href="https://www.amazon.in/gp/help/customer/display.html?nodeId=200522700&pop-up=1">privacy policies</a>{" "}
          and <a target="_blank" href="https://www.amazon.in/gp/help/customer/display.html?nodeId=200545940&pop-up=1">conditions of use</a>
        </p>
    </div>
  ); 
}

export default Subtotal;