import React from "react";

export default function Renderdata(props) {
  return (
    <div>
      <p className="info">{props.value}</p>
      <h3 className="note">
        NOTE: Here should be the text related to selected {props.name} option.
      </h3>
    </div>
  );
}
