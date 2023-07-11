// import { useContext } from "react";
// import NavigationContext from "../context/navigation";

// function CountryShowPage() {
//   const contextValue = useContext(NavigationContext);

//   const handleBackClick = () => {
//     contextValue?.someFunction(false, "", "", "", 0, "", "", "", "", {}, "");
//   };

//   console.log(contextValue?.show, contextValue?.datas);
import { useLocation } from "react-router-dom";

const CountryShowPage: React.FC = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>CountryShowPage{location.state.country}</div>
    // <main>
    //   <button onClick={handleBackClick}>Back</button>
    //   <div>
    //     <img src={contextValue?.datas.flags} />
    //     <div>
    //       <h2>{contextValue?.datas.path}</h2>
    //       <div>
    //         <p>
    //           Native Name: <span>{contextValue?.datas.nativeName}</span>
    //         </p>
    //         <p>
    //           Population:{" "}
    //           <span>{contextValue?.datas.population.toLocaleString()}</span>
    //         </p>
    //         <p>
    //           Region: <span>{contextValue?.datas.region}</span>
    //         </p>
    //         <p>
    //           Sub Region: <span>{contextValue?.datas.subRegion}</span>
    //         </p>
    //         <p>
    //           Capital: <span>{contextValue?.datas.capital}</span>
    //         </p>
    //       </div>
    //       <div>
    //         <p>
    //           Top Level Domain: <span>{contextValue?.datas.tld}</span>
    //         </p>
    //         <p>
    //           Currencies:{" "}
    //           <span>{contextValue?.datas.currencies.propName.name}</span>
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </main>
  );
};

export default CountryShowPage;
