/*eslint-disable*/
import { useEffect, useState } from "react"
import Layout from "./PAGES/Layout";
import Home from "./PAGES/Home";
import NoPage from "./PAGES/Nopage";
import { BrowserRouter, Routes,Route } from "react-router-dom"
import Country from "./PAGES/Country";

function App() {
  const [countryList, setCountryList] = useState([]);
  const [filterCountries, setFilterCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    fetchCountriesData();
  }, []);
  const fetchCountriesData = async () => { 
    setIsLoading(true);
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) =>{
        setCountryList(data)
        setFilterCountries(data);
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false)); 
  }
 
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=":country" element={<Country />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        </Routes>
    </BrowserRouter>
      )
}

export default App
