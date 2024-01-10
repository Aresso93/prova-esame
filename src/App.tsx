import { useEffect } from "react";
import "./App.css";
import ElementList from "./components/list";
import { useApi } from "./services/api";

function App() {
  const api = useApi();
  useEffect(() => {
    api.actions.getData();
  }, []);
  return (
    <>
      <ElementList elements={api.states.data}></ElementList>
    </>
  );
}

export default App;
