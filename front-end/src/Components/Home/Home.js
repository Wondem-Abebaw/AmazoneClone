import React from "react";
import "../Home/Home.css";
import Product from "./Product/Product";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="home img"
        />

        <div className="home__row">
          <Product
            id="12321897"
            title="Tablet 10 Inch Android 11 2 in 1 Tablet with Keyboard 4GB RAM 64GB ROM 128GB Expansion, 13MP Camera, 5G WiFi, Bluetooth, Mouse, Stylus, FHD Display, 6000 mAh Battery"
            price={166}
            rating={3}
            image="https://m.media-amazon.com/images/I/61fb2UmHdxL._AC_UL320_.jpg"
          />

          <Product
            key="1232199"
            id="1232199"
            title="Lenovo 2022 Newest Ideapad 3 Laptop, 15.6 HD Touchscreen11th Gen Intel Core i3-1115G4 "
            price={1669}
            rating={5}
            image="https://m.media-amazon.com/images/I/61QGMX0Qy6L._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id="12321"
            title="Apple iPad (2018 Model) with Wi-Fi only 32GB Apple 9.7in iPad - Space Gray (Renewed)"
            price={1229}
            rating={5}
            image="https://m.media-amazon.com/images/I/61aeen0K1NL._AC_UL480_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="1232133"
            title="DealContent-module__truncate_sWbxETx42ZPStTc9jwySW Newair Wine Fridge Promotion"
            price={125}
            rating={5}
            image="https://m.media-amazon.com/images/I/41KEu7hvnJL._AC_UF452,452_FMjpg_.jpg"
          />
          <Product
            id="123211"
            title="
            AQUA CREST LT1000PC ADQ747935 Refrigerator Water Filter and Air Filter"
            price={102}
            rating={3}
            image="https://m.media-amazon.com/images/I/51dyEjG0X-L._AC_UF452,452_FMjpg_.jpg"
          />
          <Product
            id="4953809"
            title="GLACIER FRESH MWF Water Filters for GE Refrigerators, NSF 42 Replacement for SmartWater MWFP, MWFA, GWF, HDX FMG-1, WFC1201, RWF1060, 197D6321P006, Kenmore 9991, 3 Pack"
            price={159.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/41R968n7b1L._AC_UF452,452_FMjpg_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="123"
            title="Amazon eero Pro 6E mesh Wi-Fi"
            price={411}
            rating={5}
            image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/110tCCZolKL._AC_SY200_.jpg"
          />
          <Product
            id="4903850"
            title="DealContent-module__truncate_sWbxETx42ZPStTc9jwySW Midea Compact Refrigerator"
            price={10.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/31hJueuYdML._AC_UF452,452_FMjpg_.jpg"
          />
          <Product
            id="2390233"
            title="Foxemart Computer Desk 47” Modern Sturdy Office Desk PC Laptop Notebook Study Writing Table for Home Office Workstation, Black"
            price={78.95}
            rating={4}
            image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71jQYX9JNKS.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="322094"
            title="Livinia Canberra 47.2 Rectangular Wooden Dining Table/Mid Century Modern Malaysian Oak Kitchen Table (Natural-Oak) Table Only"
            price={179.99}
            rating={4}
            image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/91cPM7v47QL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          />
          <Product
            id="123210"
            title="Bestier L Shaped Desk with Shelves 86 Inch Reversible Corner Computer Desk or 2 Person Long Table for Home Office Large Gaming Writing Storage Workstation P2 Board with 3 Cable Holes, Carbon Fiber"
            price={166}
            rating={5}
            image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81-HT1MT7AL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
