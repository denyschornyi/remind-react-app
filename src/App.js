import React, { useState } from "react";
import List from "./components/List";
import listSvg from "./assets/img/list.svg";
import AddButtonList from "./components/AddButtonList";

import DB from "./assets/db.json";

function App() {
  const [lists, setLists] = useState(
    DB.lists.map((item) => {
      item.color = DB.colors.filter(
        (color) => color.id === item.colorId
      )[0].name;
      return item;
    })
  );
  console.log(lists);
  console.log(lists.length);
  return (
    <div className="todo">
      <div className="todo__sidebar">
        {lists && lists.length > 1 && (
          <List
            items={[
              {
                icon: <img src={listSvg} alt="All tasks" />,
                name: "All tasks",
                active: true
              }
            ]}
          />
        )}
        <List items={lists} isRemovable />
        <AddButtonList colors={DB.colors} />
      </div>
      <div className="todo__tasks"></div>
    </div>
  );
}

export default App;
