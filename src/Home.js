import { React, useState} from "react";
import Product from "./Product";
import "./Home.css";
import Banner1 from "./images/B1.jpg"
import Banner2 from "./images/B2.jpg"
import Banner3 from "./images/B3.jpg"
import Banner4 from "./images/B4.jpg"
import Banner5 from "./images/B5.jpg"
import Banner6 from "./images/B6.jpg"

function Home() {
  const banners = [Banner1, Banner2, Banner3, Banner4, Banner5, Banner6];
  const [imageIndex, setImageIndex] = useState(0);
  var myvar = setTimeout(changeImage, 1500);
  function changeImage() {
    if (imageIndex + 1 < banners.length) {
      setImageIndex(imageIndex + 1);
    } else {
      setImageIndex(0);
    }
  }

  return (
    <div className="home">
      <img
        className="home__image"
        src={banners[imageIndex]}
        alt=""
      />
      <div className="home__row">
        <Product
          id="12332134"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback – 6 October 2011"
          price={1289}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
        />
        <Product
          id="12332135"
          title="Introducing Echo Show 8 – Smart display with Alexa - 8'' HD screen with stereo sound – Black"
          price={12999}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51UZ17lvVFL._SL1000_.jpg"
        />
        <Product
          id="12332189"
          title="Skullcandy Uproar Wireless On-Ear Headphone with Mic (Black)"
          price={2539}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/418kLMmZIYL.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12332136"
          title="Echo Dot (3rd Gen) - #1 smart speaker brand in India with Alexa (Black)"
          price={2799}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61WUqJd4dfS._SL1000_.jpg"
        />
        <Product
          id="12332137"
          title="HP OMEN i7 9th Gen 15.6-inch FHD Gaming Laptop (16GB/1TB HDD + 512GB SSD/Windows 10/NVIDIA RTX 2070 8GB Graphics/Shadow Black), 15-dh0138TX"
          price={189999}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/817CMIW9NsL._SL1500_.jpg"
        />
        <Product
          id="12332138"
          title="Harry Potter and the Half Blood Prince + Harry Potter and the Deathly Hallows (Harry Potter 7) (Set of 2 books)"
          price={929}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51zNvETzOHL._SY361_BO1,204,203,200_.jpg"
        />
        </div>
        <div className="home__row">
          <Product
            id="244425"
            title="Sony Bravia 139 cm (55 inches) 4K HDR Certified Android OLED TV 55A8H (Black)"
            image="https://images-na.ssl-images-amazon.com/images/I/81CTYcbYHzL._SX679_.jpg"
            rating={5}
            price={170990}
          />
          </div>
        <div className="home__row">
          <Product
            id="244425"
            title="Roku Streaming Stick+ | HD/4K/HDR Streaming Device with Long-range Wireless and Voice Remote with TV Controls"
            image="https://images-na.ssl-images-amazon.com/images/I/41C4EsdONdL.jpg"
            rating={4}
            price={4799}
          />
          <Product
            id="244426"
            title="Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PS4, & Xbox - 1-Year Rescue Service (STGX2000400)"
            image="https://images-na.ssl-images-amazon.com/images/I/31jBba7+ySL.jpg"
            rating={5}
            price={4999}
          />
          <Product
            id="244430"
            title="Dell XPS 7390 13.3-inch (33.78 cms) UHD Display Thin & Light Laptop "
            image="https://images-eu.ssl-images-amazon.com/images/I/41-Zsy0JmXL._AC_SX184_.jpg"
            rating={2}
            price={(164990)}
          />
        </div>
    </div>
  );
}

export default Home;
