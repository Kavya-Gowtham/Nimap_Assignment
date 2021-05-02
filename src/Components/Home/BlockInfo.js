import React from "react";
import "./Home.css";
import Message from "./Message";

function BlockInfo(props) {
  function search(idToSearch) {
    return Message.filter((item) => {
      return item.id === idToSearch;
    })[0];
  }

  switch (props.value) {
    case "dropdown1":
      return (
        <div>
          <p className="info">{search(props.value).Passage}</p>
          <h3 className="note">
            NOTE: Here should be the text related to selected {props.value}{" "}
            option.
          </h3>
        </div>
      );
    case "dropdown2":
      return (
        <div>
          <p className="info">{search(props.value).Passage}</p>
          <h3 className="note">
            NOTE: Here should be the text related to selected {props.value}{" "}
            option.
          </h3>
        </div>
      );
    case "dropdown3":
      return (
        <div>
          <p className="info">{search(props.value).Passage}</p>
          <h3 className="note">
            NOTE: Here should be the text related to selected {props.value}{" "}
            option.
          </h3>
        </div>
      );
    default:
      return <p className="info">Select any dropdown</p>;
  }
}
export default BlockInfo;
