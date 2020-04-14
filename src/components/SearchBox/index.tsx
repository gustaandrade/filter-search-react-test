import React, { useState, useEffect } from "react";
import Select from "react-select";
import { FaMapMarkerAlt } from "react-icons/fa";
import useFetch from "../../hooks/fetch";

import Checkbox from "../Checkbox";

import { createSelectOptions } from "../../helpers";

import "./styles.css";

const SearchBox: React.FC = () => {
  const [brands, setBrands] = useState(null);
  const [models, setModels] = useState(null);
  const [versions, setVersions] = useState(null);

  const [chooseBrand, setChooseBrand] = useState<any>(null);
  const [chooseModel, setChooseModel] = useState<any>(null);
  const [chooseVersion, setChooseVersion] = useState<any>(null);

  const brandResult = useFetch(
    "http://desafioonline.webmotors.com.br/api/OnlineChallenge/Make"
  );
  const modelResult = useFetch(
    `http://desafioonline.webmotors.com.br/api/OnlineChallenge/Model?MakeID=${
      chooseBrand ? chooseBrand.value : 0
    }`
  );
  const versionResult = useFetch(
    `http://desafioonline.webmotors.com.br/api/OnlineChallenge/Version?ModelID=${
      chooseModel ? chooseModel.value : 0
    }`
  );

  useEffect(() => {
    setBrands(brandResult);
    setModels(modelResult);
    setVersions(versionResult);
  }, [brandResult, modelResult, versionResult]);

  const customSelectStyle = {
    indicatorSeparator: () => ({
      display: "none",
    }),
    option: (provided: any) => ({
      ...provided,
      backgroundColor: "#fff",
      color: "#000",
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
              value={chooseBrand}
              options={createSelectOptions(brands)}
              placeholder={
                <span>
                  Marca: <strong>Todas</strong>
                </span>
              }
              onChange={(chooseBrand) => setChooseBrand(chooseBrand)}
              styles={customSelectStyle}
            />
            <Select
              className="model-select"
              value={chooseModel}
              options={createSelectOptions(models)}
              placeholder={
                <span>
                  Modelo: <strong>Todos</strong>
                </span>
              }
              onChange={(chooseModel) => setChooseModel(chooseModel)}
              styles={customSelectStyle}
            />
          </div>

          <Select
            className="version-select"
            value={chooseVersion}
            options={createSelectOptions(versions)}
            placeholder={
              <span>
                Versão: <strong>Todas</strong>
              </span>
            }
            onChange={(chooseVersion) => setChooseVersion(chooseVersion)}
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
