import React from "react";
import "./App.css";
import Header from "./Components/header";
import Hompeage from "./Components/Homepage";
import SingleRecord from "./Components/SingleRecord";

import Footer from "./Components/footer";
import "./assets/css/bootstrap.css";
import "./assets/css/fontawesome.min.css";

import { HashRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <HashRouter>
        <div>
          <Route path="/" exact component={Hompeage} />
          <Route path="/Record" component={SingleRecord} />
        </div>
      </HashRouter>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
