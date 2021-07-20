import List from "./components/List";
import listSvg from "./assets/img/list.svg";

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
            },
            { color: "green", name: "Frontend" },
            { color: "blue", name: "Daily basis" },
            { color: "pink", name: "Movies and series" }
          ]}
        />
      </div>
      <div className="todo__tasks"></div>
    </div>
  );
}

export default App;
