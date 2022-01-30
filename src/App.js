import "./App.css";
import NavigationBar from "./NavBar";
import SearchPage from "./SearchPage";
import Details from "./Details";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  let [Data, setData] = useState([]);
  useEffect(() => {
    async function APIcalling() {
      let response = await fetch("https://restcountries.com/v3.1/all");
      let data = await response.json();
      setData(data);
    }
    APIcalling();
  }, []);
 
  return (
    <>
      <NavigationBar />
      <Router>
        <Routes>
          <Route exact path={"/"} element={<SearchPage Data={Data} />} />
          <Route exact path="/country" element={<Details/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
