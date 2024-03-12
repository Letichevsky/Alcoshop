import React, { useEffect } from "react";
import "./ProductsSection.css";
import "./WhiskeySpirits.css";
import ProductItem from "./ProductItem";

function WhiskeySpirits({ onAddToCart }) {
  const products = [
    {
      img: "BALLANTINES1L.png",
      name: "BALLANTINES 1L",
      price: 89.0,
    },
    {
      img: "44.png",
      name: "BALLANTINES 12YO 75CL",
      price: 189.0,
    },
    {
      img: "DEADRABBIT75CL.png",
      name: "DEAD RABBIT 75CL",
      price: 154.0,
    },
    {
      img: "JBRARE1L.png",
      name: "J&B RARE 1L",
      price: 86.0,
    },
    {
      img: "JOHNNIEWALKERREDLABEL1L.png",
      name: "JOHNNIE WALKER RED LABEL 1L",
      price: 100.0,
    },
    {
      img: "ACKDANIELS375CL.png",
      name: "ACK DANIELS 37.5CL",
      price: 135.0,
    },
    {
      img: "JAMESON1L.png",
      name: "JAMESON 1L",
      price: 135.0,
    },
    {
      img: "CHIVASREGAL12YEARSOLD75CL.png",
      name: "CHIVAS REGAL 12 YEARS OLD 75CL",
      price: 152.0,
    },
    {
      img: "CLASSICSINGLEMALTWHISKY70CL.png",
      name: "GLEN MORAY ELGIN CLASSIC SINGLE MALT WHISKY 70CL",
      price: 154.0,
    },
    {
      img: "55.png",
      name: "LIBERTIES OAK DEVIL 75CL",
      price: 133.0,
    },
    {
      img: "CHIVASREGAL12YEAROLD1L.png",
      name: "CHIVAS REGAL 12 YEAR OLD 1L",
      price: 175.0,
    },
    {
      img: "JOHNNIEWALKERBLACKLABEL12YEAROLD1L.png",
      name: "JOHNNIE WALKER BLACK LABEL 12 YEAR OLD 1",
      price: 175.0,
    },
    {
      img: "JACKDANIELS1L.png",
      name: "JACK DANIELS 1L",
      price: 199.0,
    },
    {
      img: "JAMESONCASKMATE.png",
      name: "JAMESON CASKMATE",
      price: 214.0,
    },
    {
      img: "LEDAIG10YEAROLD70CL.png",
      name: "LEDAIG 10 YEAR OLD 70CL",
      price: 243.0,
    },
    {
      img: "JACKDANIELSTENNESSEEHONEY1L.png",
      name: "JACK DANIELS TENNESSEE HONEY 1L",
      price: 259.0,
    },
    {
      img: "CHIVASREGALEXTRA13YEAROLDBOURBON70CL.png",
      name: "CHIVAS REGAL EXTRA 13 YEAR OLD BOURBON 70CL",
      price: 269.0,
    },
    {
      img: "JACKDANIELSTENNESSEEFIRE1L.png",
      name: "JACK DANIELS TENNESSEE FIRE 1L",
      price: 259.0,
    },
    {
      img: "77.png",
      name: "WOODFORD RESERVE 1L",
      price: 289.0,
    },
    {
      img: "MALIBU1L.png",
      name: "MALIBU 1L",
      price: 120.0,
    },
    {
      img: "BACARDIBLACK.png",
      name: "BACARDI BLACK 1L",
      price: 180.0,
    },
    {
      img: "RONZACAPA23YEAROLD75CL.png",
      name: "RON ZACAPA 23 YEAR OLD 75CL",
      price: 706.0,
    },
    {
      img: "AVIONSILVER70CL.png",
      name: "AVIÓN SILVER 70CL",
      price: 236.0,
    },
    {
      img: "DELMAGUEYCREMADEMEZCAL70CL.png",
      name: "DEL MAGUEY CREMA DE MEZCAL 70CL",
      price: 140.0,
    },
    {
      img: "AVIONRESERVACRISTALINO70CL.png",
      name: "AVIÓN RESERVA CRISTALINO 70CL",
      price: 1825.0,
    },
    {
      img: "WHITLEYNEILLGINRASPBERRY1L.png",
      name: "WHITLEY NEILL GIN RASPBERRY 1L",
      price: 110.0,
    },
    {
      img: "88.png",
      name: "WHITLEY NEILL GIN RHUBARB AND GINGER 1",
      price: 110.0,
    },
    {
      img: "WHITLEYNEILLGINBLOODORANGE1L.png",
      name: "WHITLEY NEILL GIN BLOOD ORANGE 1L",
      price: 110.0,
    },
    {
      img: "WILLIAMSGREATBRITISHGIN70CL.png",
      name: "WILLIAMS GREAT BRITISH GIN 70CL",
      price: 180.0,
    },
    {
      img: "FINLANDIA1L.png",
      name: "FINLANDIA 1L",
      price: 60.0,
    },
    {
      img: "ABSOLUTBLUE1L.png",
      name: "ABSOLUT BLUE 1L",
      price: 90.0,
    },
    {
      img: "ABSOLUTLIME1L.png",
      name: "ABSOLUT LIME 1L",
      price: 140.0,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="whiskeySpirits">
      <h1 className="products_section_title">Whiskey & Spirits</h1>
      <div className="products_section">
        {products.map((products, index) => (
          <ProductItem
            key={index}
            product={products}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default WhiskeySpirits;
