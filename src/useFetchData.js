import { useEffect, useState } from 'react';
export const useFetchData = (country) => {
    const [result, setResult] = useState([]);
  const [filterCountries, setFilterCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
    useEffect(() => {
        if (country) {
            fetchDatafromApi();
        } else {
            fetchDatafromLocalStorage(); 
        }
    }, [])
    const fetchDatafromApi = () => {
        let url = "https://restcountries.com/v3.1/all";
        setIsLoading(true);
        if (country) {
            url = `https://restcountries.com/v3.1/name/${country}`;
        }
        
    fetch(url)
      .then((response) => response.json())
        .then((data) => {
            if (country) {
              setResult(data[0]);
            } else {

                setResult(data)
                setFilterCountries(data);
                localStorage.setItem("countries",JSON.stringify(data));
          }
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
    }
    const fetchDatafromLocalStorage = () => {
        const data = JSON.parse(localStorage.getItem("countries"));
        if (data) {
                setResult(data)
                setFilterCountries(data);
        } else {
            fetchDatafromApi();
        }
     }
  return {result,isLoading,isError ,filterCountries,setFilterCountries}
}