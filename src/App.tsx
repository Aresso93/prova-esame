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
    <Header/>
      
      <ElementList countries={api.states.data}></ElementList>
    </>
  );
}

export default App;
