import React from "react";
import "./App.css";
import Header from "./Components/header";
import Hompeage from "./Components/Homepage";
import Footer from "./Components/footer";
import "./assets/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>

      <div style={{ margintop: "5px" }}>
        <Hompeage />
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
