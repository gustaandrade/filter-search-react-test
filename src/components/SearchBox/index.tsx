import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Select from "react-select";
import { FaMapMarkerAlt } from "react-icons/fa";
import useFetch from "../../hooks/fetch";

import Checkbox from "../Checkbox";

import {
  createSelectOptions,
  placeSelectArray,
  yearSelectArray,
  priceSelectArray,
  distanceSelectArray,
} from "../../helpers";

import "./styles.css";
import { StoreActions } from "../../stores/actions/types";
import { setVehicles } from "../../stores/actions";

import { Vehicle } from "../../types";
import { SearchBoxProps } from "../types";

const SearchBox: React.FC<SearchBoxProps> = (props) => {
  const [brands, setBrands] = useState(null);
  const [models, setModels] = useState(null);
  const [versions, setVersions] = useState(null);

  const [choosePlace, setChoosePlace] = useState<any>(null);
  const [chooseDistance, setChooseDistance] = useState<any>(null);
  const [chooseYear, setChooseYear] = useState<any>(null);
  const [choosePrice, setChoosePrice] = useState<any>(null);

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
  const vehiclesResult: Vehicle[] | null = useFetch(
    `http://desafioonline.webmotors.com.br/api/OnlineChallenge/Vehicles?Page=1`
  );

  useEffect(() => {
    setBrands(brandResult);
    setModels(modelResult);
    setVersions(versionResult);
  }, [brandResult, modelResult, versionResult]);

  const clearAllFilters = () => {
    setChoosePlace(null);
    setChooseDistance(null);
    setChooseYear(null);
    setChoosePrice(null);

    setChooseBrand(null);
    setChooseModel(null);
    setChooseVersion(null);
  };

  const searchOffers = () => {
    props.setVehicles([]);

    props.setVehicles(
      vehiclesResult!.filter(
        (v) =>
          v.YearFab === chooseYear?.value ||
          v.YearModel === chooseYear?.value ||
          parseInt(v.Price, 10) <= choosePrice?.value ||
          v.Make === chooseBrand?.label ||
          v.Model === chooseModel?.label ||
          v.Version === chooseVersion?.label
      )
    );
  };

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
              value={choosePlace}
              options={placeSelectArray}
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
              onChange={(choosePlace) => setChoosePlace(choosePlace)}
              styles={customSelectStyle}
            />

            <Select
              className="distance-select"
              value={chooseDistance}
              options={distanceSelectArray}
              placeholder={
                <span>
                  Raio: <strong>100km</strong>
                </span>
              }
              isSearchable
              isClearable
              onChange={(chooseDistance) => setChooseDistance(chooseDistance)}
              styles={customSelectStyle}
            />
          </div>

          <Select
            className="year-select"
            value={chooseYear}
            options={yearSelectArray}
            placeholder="Ano Desejado"
            onChange={(chooseYear) => setChooseYear(chooseYear)}
            styles={customSelectStyle}
          />
          <Select
            className="price-select"
            value={choosePrice}
            options={priceSelectArray}
            placeholder="Faixa de Preço"
            onChange={(choosePrice) => setChoosePrice(choosePrice)}
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

          <a href="" onClick={() => clearAllFilters()}>
            Limpar Filtros
          </a>
          <button className="offers-button" onClick={() => searchOffers()}>
            VER OFERTAS
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: (dispatch: StoreActions) => void) => ({
  setVehicles: (vehicles: Vehicle[]) => dispatch(setVehicles(vehicles)),
});

export default connect(null, mapDispatchToProps)(SearchBox);
