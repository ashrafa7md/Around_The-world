import { Link, useParams } from "react-router-dom";
import { useFetchData } from "../useFetchData";
import ShowMessage from './../components/ShowMessage';

const Country = () => {
    const {country} = useParams();
    const { isLoading, isError, result} = useFetchData(country);

    return (
        <>
            {isError &&<ShowMessage message="Something went wrong!"/>}
            {isLoading && <ShowMessage message="Loading countries data...!"/>}
            {!isError && !isLoading && (
                <>
                    <div>
                        <Link to="/" className="mb-16 inline-block rounded-md bg-white p-3 md:mb-20">
                            <svg
                                width="19"
                                height="19"
                                viewBox="0 0 19 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_2005_992)">
                                    <rect x="19" y="10" width="19" height="19" rx="6" fill="white" />
                                </g>
                                <path fillRule="evenodd" clipRule="evenodd" d="M31.8927 22.5355L33.0712 23.714L29.1821 27.6031L44.0314 27.6031L44.0314 29.253L29.1821 29.253L33.0712 33.1421L31.8927 34.3206L26.0001 28.4281L31.8927 22.5355Z" fill="#111827" />
                                <defs>
                                    <filter id="filter0_d_2005_992" x="0" y="0" width="70" height="68" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="6" />
                                        <feGaussianBlur stdDeviation="7" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2005_992" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2005_992" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                        </Link>
                        <div className="grid gap-11 lg:grid-cols-2 lg:gap-36">
                            <img className="w-full"
                                src={result?.flags?.svg}
                                alt={result?.flags?.alt}
                            />
                            <div>
                                <h1 className="mb-4 text-3xl font-extrabold lg:mb-7">
                                    {result?.name?.common}
                                </h1>
                                <div className="flex flex-col gap-8 md:gap-40 lg:flex-row">
                                    <div className="flex flex-col gap-5">
                                        <p>
                                            <span className="font-semibold">Population : </span>
                                            <span className="font-light">{
                                                parseInt(result?.population).toLocaleString()
                                            }</span>
                                        </p>
                                        <p>
                                            <span className="font-semibold">Region : </span>
                                            <span >{result?.region}</span>
                                        </p>
                                        <p>
                                            <span className="font-semibold">Sub Region : </span>
                                            <span >{result?.subregion}</span>
                                        </p>
                                        <p>
                                            <span className="font-semibold">Capital : </span>
                                            <span >{result?.capital}</span>
                                        </p>
                                        </div>
                                        <div className="flex flex-col gap-5">
                                        <p>
                                            <span className="font-semibold">Top level Domain : </span>
                                            <span>{result?.tld?.join(",")}
                                            </span>
                                            </p>
                                        <p>
                                            <span className="font-semibold">Currencies : </span>
                                            <span className="font-thin">{result?.currencies &&
                                                Object.keys(result.currencies).map((currency)=>`${currency}`).join(",")}
                                            </span>
                                            </p>
                                            <p>
                                            <span className="font-semibold">Languages : </span>
                                            <span className="font-thin">{result?.languages &&
                                                Object.values(result.languages).map((lang)=>`${lang}`).join(",")}
                                            </span>
                                            </p>
                                        </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
        
    );
}
export default Country;