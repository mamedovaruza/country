import axios from "axios";
import { useState, useEffect } from "react";
import CountryShow from "./CountryShow";

const CountryList: React.FC = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital,subregion,tld,currencies,languages,borders"
        );
        const sortedData = response.data.sort(
          (a: { name: { common: string } }, b: { name: { common: never } }) =>
            a.name.common.localeCompare(b.name.common)
        );
        setDatas(sortedData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const renderedDatas = datas.map((data, index) => {
    return <CountryShow key={index} data={data} />;
  });

  return (
    <section className="gap-20 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
      {renderedDatas}
    </section>
  );
};

export default CountryList;
