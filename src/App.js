import React, { useEffect } from "react";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import Searchbar from "./components/layout/Searchbar";
import Logs from "./components/logs/Logs";
import AddBtn from "./components/layout/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddTechModal from "./components/techs/AddTechModal";
import TechListModal from "./components/techs/TechListModal";

import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  useEffect(() => {
    // Int Materialize JS
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      <div className="App">
        <Searchbar />
        <div className="container">
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <Logs />
        </div>
      </div>
    </Provider>
  );
};

export default App;
