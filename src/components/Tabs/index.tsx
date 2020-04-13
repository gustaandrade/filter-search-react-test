import React, { useState } from "react";
import { FaCarSide, FaMotorcycle } from "react-icons/fa";

import "./styles.css";

const Tabs: React.FC = () => {
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
          className={`motorcycle-button ${motorcycleActive ? "" : "inactive"}`}
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
  );
};

export default Tabs;
