import React, { useState } from "react";
import { FaCarSide, FaMotorcycle, FaMapMarkerAlt } from "react-icons/fa";
import Select from "react-select";

import Checkbox from "../../components/checkbox";

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

  const customSelectStyle = {
    indicatorSeparator: () => ({
      display: "none",
    }),
    container: () => ({
      margin: "10px 0",
    }),
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
            <Checkbox label="Novos" defaultChecked />
            <Checkbox label="Usados" defaultChecked />
          </div>

          <div className="input-area">
            <div className="left-area">
              <div className="double-area">
                <Select
                  className="city-input"
                  value={null}
                  options={[]}
                  placeholder={
                    <span>
                      <FaMapMarkerAlt
                        size={14}
                        color="#C4242E"
                        style={{
                          paddingRight: "10px",
                        }}
                      />
                      Onde: <strong>São Paulo - SP</strong>
                    </span>
                  }
                  isSearchable
                  isClearable
                  styles={customSelectStyle}
                />

                <Select
                  className="distance-select"
                  value={null}
                  options={[]}
                  placeholder={
                    <span>
                      Raio: <strong>100km</strong>
                    </span>
                  }
                  styles={customSelectStyle}
                />
              </div>

              <Select
                className="year-select"
                value={null}
                options={[]}
                placeholder="Ano Desejado"
                styles={customSelectStyle}
              />
              <Select
                className="price-select"
                value={null}
                options={[]}
                placeholder="Faixa de Preço"
                styles={customSelectStyle}
              />

              <a href="#">> Busca Avançada</a>
            </div>

            <div className="right-area">
              <Select
                className="brand-select"
                value={null}
                options={[]}
                placeholder={
                  <span>
                    Marca: <strong>Todas</strong>
                  </span>
                }
                styles={customSelectStyle}
              />
              <Select
                className="model-select"
                value={null}
                options={[]}
                placeholder={
                  <span>
                    Modelo: <strong>Todos</strong>
                  </span>
                }
                styles={customSelectStyle}
              />

              <Select
                className="version-select"
                value={null}
                options={[]}
                placeholder={
                  <span>
                    Versão: <strong>Todas</strong>
                  </span>
                }
                styles={customSelectStyle}
              />

              <a href="#">Limpar Filtros</a>
              <button className="offers-button">VER OFERTAS</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
