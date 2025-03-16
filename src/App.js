import "./App.css";
import NavigationBar from "./NavBar";
import SearchPage from "./SearchPage";
import Details from "./Details";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "./redux/countrySlice";
import { toggleTheme } from "./redux/themeSlice";

function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const countries = useSelector((state) => state.countries.data);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const switchTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className="app" data-theme={theme}>
      <NavigationBar switchTheme={switchTheme} />
      <Router>
        <Routes>
          <Route exact path="/" element={<SearchPage Data={countries} />} />
          <Route exact path="/country" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
