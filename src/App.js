import List from "./components/List";
import listSvg from "./assets/img/list.svg";
import AddButtonList from "./components/AddButtonList";

import DB from "./assets/db.json";

function App() {
  return (
    <div className="todo">
      <div className="todo__sidebar">
        <List
          items={[
            {
              icon: <img src={listSvg} alt="All tasks" />,
              name: "All tasks",
              active: true
            }
          ]}
        />
        <List
          items={DB.lists.map((item) => {
            item.color = DB.colors.filter(
              (color) => color.id === item.colorId
            )[0].name;
            return item;
          })}
          isRemovable
        />
        <AddButtonList colors={DB.colors} />
      </div>
      <div className="todo__tasks"></div>
    </div>
  );
}

export default App;
