import React, { useState, useEffect } from "react";
import "./Home.css";
// import Carousel from "./Carousel";
import HeroSection from "./HeroSection";
import Section from "./Section";
import beerBottel from "../assets/beer.png";
import wine from "../assets/wine.png";
import champagne from "../assets/champagne.png";
import whiskey from "../assets/whiskey.png";
import drinks from "../assets/drinks.jpg";
import WelcomeBaner from "./WelcomeBaner";
import StepsBlock from "./StepsBlock";

function Home() {
  const sectionsData = [
    {
      title: (
        <>
          Beer <br /> & Cider
        </>
      ),
      img: beerBottel,
      backgroundColor: "#fff",
      color: "#000",
      link: "./BeerCider",
    },
    {
      title: "Wine",
      img: wine,
      backgroundColor: "#610000",
      color: "#fff",
      link: "./Wine",
    },
    {
      title: "Champagne",
      img: champagne,
      backgroundColor: "#fff",
      color: "#000",
      link: "./Champagne",
    },
    {
      title: (
        <>
          Whiskey <br /> & Spirits
        </>
      ),
      img: whiskey,
      backgroundColor: "#610000",
      color: "#fff",
      link: "./WhiskeySpirits",
    },
    {
      title: <>Drinks</>,
      img: drinks,
      backgroundColor: "#fff",
      color: "#000",
      link: "./Drinks",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const [isWelcomeBanerOpen, setWelcomeBanerOpen] = useState(true);
  // const toggleWelcomeBaner = () => {
  //   setWelcomeBanerOpen(!isWelcomeBanerOpen);
  // };

  const [isWelcomeBanerOpen, setWelcomeBanerOpen] = useState(false);

  useEffect(() => {
    // Проверяем, был ли баннер уже открыт (вызывался useEffect при предыдущих монтированиях)
    const isBannerOpened = localStorage.getItem("isWelcomeBanerOpen");

    if (!isBannerOpened) {
      // Если баннер еще не открывался, открываем его и сохраняем это в localStorage
      setWelcomeBanerOpen(true);
      localStorage.setItem("isWelcomeBanerOpen", "true");
    }
  }, []); // Пустой массив зависимостей гарантирует выполнение эффекта только при монтировании

  const toggleWelcomeBaner = () => {
    setWelcomeBanerOpen(false);
  };

  return (
    <div>
      {isWelcomeBanerOpen ? (
        <WelcomeBaner toggleWelcomeBaner={() => toggleWelcomeBaner()} />
      ) : undefined}

      {/* <Carousel /> */}
      <HeroSection />
      <StepsBlock />

      {sectionsData.map((section, index) => (
        <Section
          key={index}
          title={section.title}
          img={section.img}
          backgroundColor={section.backgroundColor}
          color={section.color}
          link={section.link}
        />
      ))}
    </div>
  );
}

export default Home;
