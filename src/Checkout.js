import{ React, useState} from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct"
import "./Checkout.css";
import Subtotal from "./Subtotal";
import Banner1 from "./images/B1.jpg"
import Banner2 from "./images/B2.jpg"
import Banner3 from "./images/B3.jpg"
import Banner4 from "./images/B4.jpg"
import Banner5 from "./images/B5.jpg"
import Banner6 from "./images/B6.jpg"


function Checkout() {
  const banners = [Banner1, Banner2, Banner3, Banner4, Banner5, Banner6];
  const [imageIndex, setImageIndex] = useState(0);
  const banner = banners[imageIndex];
  var myvar = setTimeout(changeImage, 1500);
  function changeImage() {
    if (imageIndex + 1 < banners.length) {
      setImageIndex(imageIndex + 1);
    } else {
      setImageIndex(0);
    }
  }

  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
          <div className="checkout__left">
      <img
        className="checkout__ad"
        src={banner}
      />
      {basket?.length === 0 ? (
        <div>
          <h2>Your Shopping Basket is empty</h2>
          <p>
            You have no items in your basket. To buy one or more items, click
            "Add to basket" next to the item.
          </p>
        </div>
      ) : (
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket?.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
          ))}
        </div>
      )}
      </div>
       {basket.length > 0 && (
         <div className="checkout__right">
           <Subtotal />
           </div>
       )}
    </div>
  );
}

export default Checkout;
