import React, { useState } from "react";
import List from "../List";
import Badge from "../Badge";

import add from "../../assets/img/add.svg";
import closeSvg from "../../assets/img/close.svg";
import "./AddButtonList.scss";

const AddButtonList = ({ colors }) => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [selectedColor, setSelectedColor] = useState(colors[0].id);
  const [inputValue, setInputValue] = useState("");

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
          <img
            onClick={() => setVisiblePopup(false)}
            src={closeSvg}
            alt="close button"
            className="add-list__popup-close-btn"
          />
          <input
            className="field"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            placeholder="Folder name"
          />
          <div className="add-list__popup-colors">
            {colors.map((color) => (
              <Badge
                onClick={() => setSelectedColor(color.id)}
                key={color.id}
                color={color.name}
                className={selectedColor === color.id && "active"}
              />
            ))}
          </div>
          <button className="button">Add</button>
        </div>
      )}
    </div>
  );
};

export default AddButtonList;
