import React, { useState } from "react";
import { FaCarSide, FaMotorcycle } from "react-icons/fa";

import Logo from "../../assets/logo.svg";

import "./styles.css";

const Main: React.FC = () => {
  const [carActive, setCarActive] = useState(true);
  const [motorcycleActive, setMotorcycleActive] = useState(false);

  const onCarButtonClicked = () => {
    setCarActive(true);
    setMotorcycleActive(false);
  };

  const onMotorcycleButtonClicked = () => {
    setMotorcycleActive(true);
    setCarActive(false);
  };

  return (
    <>
      <div className="container">
        <div className="header">
          <img src={Logo} alt="Webmotors" />
        </div>

        <div className="tab-buttons">
          <div className="left-buttons">
            <button
              className={`car-button ${carActive ? "" : "inactive"}`}
              onClick={onCarButtonClicked}
            >
              <FaCarSide size={36} color={carActive ? "#C4242E" : "#A9A8B0"} />

              <div className="tab-button-text">
                <span>COMPRAR</span>
                <span>CARROS</span>
              </div>
            </button>
            <button
              className={`motorcycle-button ${
                motorcycleActive ? "" : "inactive"
              }`}
              onClick={onMotorcycleButtonClicked}
            >
              <FaMotorcycle
                size={36}
                color={motorcycleActive ? "#C4242E" : "#A9A8B0"}
              />

              <div className="tab-button-text">
                <span>COMPRAR</span>
                <span>MOTOS</span>
              </div>
            </button>
          </div>

          <div className="right-buttons">
            <button>Vender meu carro</button>
          </div>
        </div>

        <div className="search-box">
          <div className="checkbox-area">
            <input type="checkbox" id="new" defaultChecked />
            <label htmlFor="new">Novos</label>

            <input type="checkbox" id="used" defaultChecked />
            <label htmlFor="used">Usados</label>
          </div>

          <div className="input-area">
            <div className="left-area">
              <div className="double-area">
                <select className="city-input" />
                <select className="distance-select" />
              </div>

              <select className="year-select" />
              <select className="price-select" />

              <a href="#">> Busca Avançada</a>
            </div>

            <div className="right-area">
              <select className="brand-select" />
              <select className="model-select" />

              <select className="version-select" />

              <a href="#">Limpar Filtros</a>
              <button>VER OFERTAS</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
