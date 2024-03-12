import React, { useEffect } from "react";
import "./ProductsSection.css";
import "./Wine.css";
import ProductItem from "./ProductItem";

function Wine({ onAddToCart }) {
  const products = [
    {
      img: "99.png",
      name: "MARTINI BIANCO VERMOUT 1L",
      price: 67.0,
    },
    {
      img: "MARTINIFIERO75CL.png",
      name: "MARTINI FIERO 75CL",
      price: 70.0,
    },
    {
      img: "MARTINIEXTRADRYVERMOUTH.png",
      name: "MARTINI EXTRA DRY VERMOUTH 1L",
      price: 80.0,
    },
    {
      img: "MARTINIROSATO1L.png",
      name: "MARTINI ROSATO 1L",
      price: 80.0,
    },
    {
      img: "MARTINIFIERO1L.png",
      name: "MARTINI FIERO 1L",
      price: 80.0,
    },
    {
      img: "MARTINIROSSOVERMOUTH1L.png",
      name: "MARTINI ROSSO VERMOUTH 1L",
      price: 100.0,
    },
    {
      img: "EMOTIVOITALIANWHITE75CL.png",
      name: "EMOTIVO ITALIAN WHITE 75CL",
      price: 50.0,
    },
    {
      img: "EMOTIVOITALIANRED75CL.png",
      name: "EMOTIVO ITALIAN RED 75CL",
      price: 50.0,
    },
    {
      img: "ROSEDELEOUBE75CL.png",
      name: "ROSÉ DE LÉOUBE 75CL",
      price: 120.0,
    },
    {
      img: "LAYLINEPINOTGRIS75CL.png",
      name: "LAYLINE PINOT GRIS 75CL",
      price: 130.0,
    },
    {
      img: "LAYLINEPINOTNOIR75CL.png",
      name: "LAYLINE PINOT NOIR 75CL",
      price: 130.0,
    },
    {
      img: "ROSEGOLDSPUMANTEBOTTEGA75CL.png",
      name: "ROSE GOLD SPUMANTE BOTTEGA 75 CL",
      price: 135.0,
    },
    {
      img: "BOTTEGAGOLDPROSECCO75CL.png",
      name: "BOTTEGA GOLD PROSECCO 75CL",
      price: 135.0,
    },
    {
      img: "ZUCCARDIPOLIGONOSALTAMIRACABERNETFRANC75CL.png",
      name: "ZUCCARDI POLIGONOS ALTAMIRA CABERNET FRANC 75CL",
      price: 152.0,
    },
    {
      img: "ZUCCARDIPOLIGONOSSEMILLON75CL.png",
      name: "ZUCCARDI POLIGONOS SEMILLON 75CL",
      price: 152.0,
    },
    {
      img: "ARCADIANMERLOT75CL.png",
      name: "ARCADIAN MERLOT 75CL",
      price: 33.0,
    },
    {
      img: "BAREFOOTMOSCATO75CL.png",
      name: "BAREFOOT MOSCATO 75CL",
      price: 60.0,
    },
    {
      img: "BAREFOOTPINKMOSCATO75CL.png",
      name: "BAREFOOT PINK MOSCATO 75CL",
      price: 60.0,
    },
    {
      img: "BAREFOOTMALBEC75CL.png",
      name: "BAREFOOT MALBEC 75CL",
      price: 60.0,
    },
    {
      img: "GALLERY12MALBECARGENTINA75CL.png",
      name: "GALLERY 12 MALBEC ARGENTINA 75C",
      price: 39.0,
    },
    {
      img: "GALLERY12CABERNETSAUVIGNON75CL.png",
      name: "GALLERY 12 CABERNET SAUVIGNON 75CL",
      price: 39.0,
    },
    {
      img: "BAREFOOTSAUVIGNONBLANC75CL.png",
      name: "BAREFOOT SAUVIGNON BLANC 75CL",
      price: 50.0,
    },
    {
      img: "BAREFOOTCHARDONNAY75CL.png",
      name: "BAREFOOT CHARDONNAY 75CL",
      price: 50.0,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="wine">
      <h1 className="products_section_title">Wine</h1>
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

export default Wine;
