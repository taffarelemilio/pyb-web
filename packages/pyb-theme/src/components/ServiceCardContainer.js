import React from "react";
import { connect, styled } from "frontity";
import ServiceCards from "./ServiceCards";
import GrabacionImage from "../assets/grabacion.jpg";
import ProduccionImage from "../assets/produccion.jpg";
import MezclaImage from "../assets/mezcla.jpg";
import MasteringImage from "../assets/mastering.jpg";
import Auris from "../assets/auris.png";
import Grabadora from "../assets/grabadora.png";
import Faders from "../assets/faders.png";
import Master from "../assets/master.png";
import Cuerdas from "../assets/cuerdas.png";
import SoundWave from "../assets/backwave.png";

const GridCardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;

  background: linear-gradient(
    176deg,
    rgba(3, 3, 3, 1) 0%,
    rgba(52, 52, 52, 1) 100%
  );
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 40px;
  width: 90%;
  justify-items: center;
  overflow: hidden;
  background: url(${Cuerdas});
  background-position: center 110%;
  background-size: 80%;

  @media (max-width: 1025px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  @media (max-width: 426px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    height: 100%;
    width: 100%;
  }
`;

const StyledText = styled.h2`
  font-size: 2rem;
  color: #39847e;
  letter-spacing: 1rem;
  text-align: center;
  display: flex;
  justify-content: center;
  margin: 20px auto 40px;
  font-family: "Hikou Regular";
  text-shadow: -3px 1px 2px black;
  z-index: 50;
  @media (max-width: 425px) {
    font-size: 1.4rem;
    width: 70%;
    letter-spacing: 0.5rem;
    line-height: 2rem;
  }
`;

const StyledWave = styled.img`
  width: 50px;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  margin-bottom: 0px;
`;

const ServiceCardContainer = () => {
  return (
    <>
      <StyledWave src={SoundWave}></StyledWave>
      <StyledText>
        Conocé
        <br />
        nuestros servicios
      </StyledText>
      <GridCardsContainer>
        <CardsGrid>
          <ServiceCards
            title="Producción"
            description="Escuchá nuestras producciones"
            background={ProduccionImage}
            icono={Auris}
            link="/realizado/produccion"
          />
          <ServiceCards
            title="Grabación"
            description="Escuchá nuestras grabaciones"
            background={GrabacionImage}
            icono={Grabadora}
            link="/realizado/grabacion"
          />
          <ServiceCards
            title="Mezcla"
            description="Escuchá nuestras mezclas"
            background={MezclaImage}
            icono={Faders}
            link="/realizado/mezcla"
          />
          <ServiceCards
            title="Mastering"
            description="Escuchá nuestros masters"
            background={MasteringImage}
            icono={Master}
            link="/realizado/master"
          />
        </CardsGrid>
      </GridCardsContainer>
    </>
  );
};

export default connect(ServiceCardContainer);
