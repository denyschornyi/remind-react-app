import React, { useState } from "react";
import List from "../List";
import add from "../../assets/img/add.svg";

import "./AddButtonList.scss";

const AddButtonList = () => {
  const [visiblePopup, setVisiblePopup] = useState(true);
  return (
    <div className="add-list">
      <List
        onClick={() => setVisiblePopup(!visiblePopup)}
        items={[
          {
            className: "list__add-button",
            icon: <img src={add} alt="Add folder" />,
            name: "Add folder"
          }
        ]}
      />
      {visiblePopup && (
        <div className="add-list__popup">
          <input className="field" type="text" placeholder="Folder name" />
          <button className="button">Add</button>
        </div>
      )}
    </div>
  );
};

export default AddButtonList;
