import { useEffect } from "react";
import "./App.css";
import ElementList from "./components/list";
import { useApi } from "./services/api";
import Header from "./components/header";

function App() {
  const api = useApi();
  useEffect(() => {
    api.actions.getData();
  }, []);
  return (
    <>
    <div
        style={{
          backgroundImage: "url(/pattern.png)"
        }}
      >
    <Header/>
      <div>
        Sort countries by:
        <div className="sortButtons">
          <button className="sortBtn"
          >Population
          </button>
          <button className="sortBtn"
          >Name
          </button>
        </div>
      </div>
      <ElementList countries={api.states.data}></ElementList>
      </div>
    </>
  );
}

export default App;
