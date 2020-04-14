import React from "react";
import { connect } from "react-redux";

import { StoreInitialState } from "../../stores/reducers/types";
import { ListProps } from "../types";

import "./styles.css";

const List: React.FC<ListProps> = (props) => {
  return (
    <div className="list">
      {props.vehicles.map((v) => (
        <>
          <span className="vehicle-id">{v.ID}</span>
          <span className="vehicle-make">{v.Make}</span>
          <span className="vehicle-model">{v.Model}</span>
          <span className="vehicle-version">{v.Version}</span>
          <img className="vehicle-image" src={v.Image} alt={v.Version} />
          <span className="vehicle-km">{v.KM}</span>
          <span className="vehicle-price">{v.Price}</span>
          <span className="vehicle-year-model">{v.YearModel}</span>
          <span className="vehicle-year-fab">{v.YearFab}</span>
          <span className="vehicle-color">{v.Color}</span>
        </>
      ))}
    </div>
  );
};

const mapStateToProps = (state: StoreInitialState) => ({
  vehicles: state.vehicles,
});

export default connect(mapStateToProps, null)(List);
