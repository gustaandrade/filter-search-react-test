import React, { useState, useEffect } from "react";
import Select from "react-select";
import { FaMapMarkerAlt } from "react-icons/fa";

import Checkbox from "../Checkbox";

import useFetch from "../../hooks/fetch";

import "./styles.css";
import { createSelectOptions } from "../../helpers";

const SearchBox: React.FC = () => {
  const [brands, setBrands] = useState(null);
  const brandResult = useFetch(
    "http://desafioonline.webmotors.com.br/api/OnlineChallenge/Make"
  );
  useEffect(() => {
    setBrands(brandResult);
  }, [brandResult]);

  const customSelectStyle = {
    indicatorSeparator: () => ({
      display: "none",
    }),
  };

  return (
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
          <div className="double-area">
            <Select
              className="brand-select"
              value={null}
              options={createSelectOptions(brands)}
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
          </div>

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
  );
};

export default SearchBox;
