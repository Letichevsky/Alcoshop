import React, { useEffect } from "react";
import "./ProductsSection.css";
import "./BeerCider.css";
import ProductItem from "./ProductItem";

function BeerCider({ onAddToCart }) {
  const products = [
    {
      img: "SolBottels6x33cl.png",
      name: "SOL BOTTLES 6 X 33CL",
      price: 40.0,
      id: 7777,
      count: 0,
    },
    {
      img: "ESTRELLADAMMBOTTLES6X33CL.png",
      name: "ESTRELLA DAMM BOTTLES 6 X 33CL",
      price: 55.0,
      id: 7778,
      count: 0,
    },
    {
      img: "HEINEKENBOTTLE12X35CL.png",
      name: "HEINEKEN BOTTLE 12 X 35.3CL",
      price: 85.25,
      id: 7779,
      count: 0,
    },
    {
      img: "CORONAEXTRABOTTLE6X355C.png",
      name: "CORONA EXTRA BOTTLE 6 X 35.5C",
      price: 50.0,
      id: 7780,
      count: 0,
    },
    {
      img: "KINGFISHEREXTRASTRONGBOTTLES12X65CL.png",
      name: "KINGFISHER EXTRA STRONG BOTTLES 12 X 65CL",
      price: 89.0,
      id: 7781,
      count: 0,
    },
    {
      img: "AMSTELCANS24X33CL.png",
      name: "AMSTEL CANS 24 X 33CL",
      price: 120.0,
      id: 7782,
      count: 0,
    },
    {
      img: "HEINEKENCANS24X33CL.png",
      name: "HEINEKEN CANS 24 X 33CL",
      price: 140.0,
      id: 7783,
      count: 0,
    },
    {
      img: "BECKSCANS24X33CL.png",
      name: "BECK’S CANS 24 X 33CL",
      price: 152.0,
      id: 7784,
      count: 0,
    },
    {
      img: "BULMERSORIGINALCIDERBOTTLE12X50CL.png",
      name: "BULMERS ORIGINAL CIDER BOTTLE 12 X 50CL",
      price: 152.0,
      id: 7785,
      count: 0,
    },
    {
      img: "SAVANNALIGHTCIDER24X33CL.png",
      name: "SAVANNA LIGHT CIDER 24 X 33CL",
      price: 147.0,
      id: 7786,
      count: 0,
    },
    {
      img: "THATCHERSGOLD12X50CL.png",
      name: "THATCHERS GOLD 12 X 50CL",
      price: 155.0,
      id: 7787,
      count: 0,
    },
    {
      img: "BOWDRYS24X33CL.png",
      name: "STRONGBOW DRY BOTTLES 24 X 33CL",
      price: 172.0,
      id: 7788,
      count: 0,
    },
    {
      img: "STRONGBOWCANS24X50CL.png",
      name: "STRONGBOW CANS 24 X 50C",
      price: 279.0,
      id: 7789,
      count: 0,
    },
    {
      img: "SAVANNADRYCIDER24X33CL.png",
      name: "SAVANNA DRY CIDER 24 X 33CL",
      price: 200.0,
      id: 7790,
      count: 0,
    },
    {
      img: "KOPPARBERG50CL.png",
      name: "KOPPARBERG MIXED BERRY 15 X 50CL",
      price: 200.0,
      id: 7791,
      count: 0,
    },
    {
      img: "dub.png",
      name: "KOPPARBERGS STRAWBERRY LIME 15 X 50C",
      price: 200.0,
      id: 7792,
      count: 0,
    },
    {
      img: "THATCHERSROSECAN24X44CL.png",
      name: "THATCHERS ROSÉ CAN 24 X 44CL",
      price: 317.0,
      id: 7793,
      count: 0,
    },
    {
      img: "LOUDYLEMONCAN24X44CL.png",
      name: "THATCHERS CLOUDY LEMON CAN 24 X 44CL",
      price: 317.0,
      id: 7794,
      count: 0,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="beerCider">
      <h1 className="products_section_title">Beer & Cider</h1>
      <div className="products_section">
        {products.map((products, id) => (
          <ProductItem key={id} product={products} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
}

export default BeerCider;
