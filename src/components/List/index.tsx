import React from "react";
import { connect } from "react-redux";

import { StoreInitialState } from "../../stores/reducers/types";
import { ListProps } from "../types";

import "./styles.css";

const List: React.FC<ListProps> = (props) => {
  return (
    <div className="list">
      {props.vehicles.map((v) => (
        <div className="vehicle">
          <div className="vehicle-img">
            <img className="vehicle-image" src={v.Image} alt={v.Version} />
          </div>

          <div className="vehicle-data">
            <span className="vehicle-id">
              <strong>ID: </strong>
              {v.ID}
            </span>
            <span className="vehicle-make">
              <strong>Make: </strong>
              {v.Make}
            </span>
            <span className="vehicle-model">
              <strong>Model: </strong>
              {v.Model}
            </span>
            <span className="vehicle-version">
              <strong>Version: </strong>
              {v.Version}
            </span>
            <span className="vehicle-km">
              <strong>KM: </strong>
              {v.KM}
            </span>
            <span className="vehicle-price">
              <strong>Price: </strong>
              {v.Price}
            </span>
            <span className="vehicle-year-model">
              <strong>YearModel: </strong>
              {v.YearModel}
            </span>
            <span className="vehicle-year-fab">
              <strong>YearFab: </strong>
              {v.YearFab}
            </span>
            <span className="vehicle-color">
              <strong>Color: </strong>
              {v.Color}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state: StoreInitialState) => ({
  vehicles: state.vehicles,
});

export default connect(mapStateToProps, null)(List);
