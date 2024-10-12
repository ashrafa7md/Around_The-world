
import ShowMessage from './../components/ShowMessage';
import SearchInput from './../components/SearchInput';
import RegionMenu from './../components/RegionMenu';
import CountryList from '../components/CountryList';
import { useFetchData } from '../useFetchData';
const Home = () => {
    const {result,filterCountries,setFilterCountries,isLoading,isError } = useFetchData();
 
    return <>
        {isError &&<ShowMessage message="Something went wrong!"/>}
        {isLoading && <ShowMessage message="Loading countries data...!"/>}
        {!isError && !isLoading && (
          <>
            <div className="flex flex-col justify-between gap-10 md:h-14 md:flex-row md:gap-0">
              <SearchInput
                countriesList={result}
                filterCountriesList={setFilterCountries}
              />
              <RegionMenu
                countriesList={result}
                filterCountriesList={setFilterCountries}
              />
            </div>
            <CountryList data={filterCountries } />
          </>
        )}
        </>
    
}
export default Home;