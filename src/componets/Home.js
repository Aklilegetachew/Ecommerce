import { Slide } from "@mui/material";
import React from "react";
import "./home.css";
import Products from "./Products";

function Home() {
  const slider = [
    {
      id: 0,
      url: "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",
    },
    {
      id: 1,
      url: "https://hmloneonta.org/wp-content/uploads/2016/11/amazon-smile-slider.png",
    },
    {
      id: 2,
      url: "https://images.moneycontrol.com/static-mcnews/2021/07/amazon-prime-770x433.jpg",
    },
    {
      id: 3,
      url: "https://d2908q01vomqb2.cloudfront.net/77de68daecd823babbb58edb1c8e14d7106e83bb/2020/03/12/Deloitte-AWS-Partners-300x150.jpg",
    },
  ];

  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="Amazone background"
      />
      <div className="rowItem">
        <Products
          id="5676522"
          title="The lean startup"
          description="The Lean Startup: How Constant Innovation Creates Radically
            Successful Businesses Paperback"
          rating={3}
          imgurl="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          price={29.99}
        />
        <Products
          id="49538094"
          title="Kenwood kMix"
          description="Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
          price={239.0}
          rating={4}
          imgurl="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
        />
      </div>
      <div className="rowItem">
        <Products
          id="4903850"
          title="Samsung LC49RG90SSUXEN 49'"
          description=" Curved LED Gaming Monitor"
          price={199.99}
          rating={3}
          imgurl="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
        <Products
          id="23445930"
          title="Amazon Echo "
          description="(3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
          price={98.99}
          rating={5}
          imgurl="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        />
        <Products
          id="3254354345"
          title="New Apple iPad Pro"
          description=" (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
          price={598.99}
          rating={4}
          imgurl="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
        />
      </div>
      <div className="rowItem">
        <Products
          id="90829332"
          title="Samsung LC49RG90SSUXEN 49' "
          description="Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
          price={1094.98}
          rating={4}
          imgurl="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
        />
      </div>
      
    </div>
  );
}

export default Home;
