import "./App.css";
import NavigationBar from "./NavBar";
import SearchPage from "./SearchPage";
import Details from "./Details";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";



const label = { inputProps: { 'aria-label': 'Switch demo' } };
function App() {
  let [Data, setData] = useState([]);

  const [theme, setTheme] = useLocalStorage('theme'?"dark":"light");
  useEffect(() => {
    async function APIcalling() {
      let response = await fetch("https://restcountries.com/v3.1/all");
      let data = await response.json();
      setData(data);
    }
    APIcalling();
  }, []);
 
  const switchTheme=()=>{
    const newTheme=theme==='light'?'dark':'light';
    setTheme(newTheme)
  }

  return (
    <div className="app" data-theme={theme}>
      <div className="navbar-container"><NavigationBar /></div>
      
    <button className="button" id="switch-button"onClick={switchTheme}>switch Theme</button>
      
      <Router>
        <Routes>
          <Route exact path={"/"} element={<SearchPage Data={Data} />} />
          <Route exact path="/country" element={<Details/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
