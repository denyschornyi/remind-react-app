import List from "./components/List";
import listSvg from "./assets/img/list.svg";
import add from "./assets/img/add.svg";

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
          items={[
            { color: "green", name: "Frontend" },
            { color: "blue", name: "Daily basis" },
            { color: "pink", name: "Movies and series" }
          ]}
          isRemovable
        />
        <List
          items={[
            {
              className: "list__add-button",
              icon: <img src={add} alt="Add folder" />,
              name: "Add folder"
            }
          ]}
        />
      </div>
      <div className="todo__tasks"></div>
    </div>
  );
}

export default App;
