import { Link, useNavigate } from "react-router-dom";

type CountryShowType = {
  data: {
    borders: string[];
    capital: string[];
    currencies: {
      [propName: string]: {
        name: string;
        symbol: string;
      };
    };
    flags: {
      alt: string;
      png: string;
      svg: string;
    };
    languages: {
      [propName: string]: string;
    };
    name: {
      common: string;
      nativeName: {
        [propName: string]: {
          [propName: string]: {
            common: string;
            official: string;
          };
        };
      };
      official: string;
    };
    population: number;
    region: string;
    subregion: string;
    tld: string[];
  };
};

const CountryShow: React.FC<CountryShowType> = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/countries", {
      state: {
        country: data.name.common,
      },
    });
  };

  // console.log(data);
  return (
    <Link
      to="/countries"
      state={{
        country: data.name.common,
      }}
    >
      <article className="bg-[#2b3844] w-fit mx-auto block rounded drop-shadow-[0px_0px_7px_2px_rgba(0, 0, 0, 0.03)]">
        <div>
          <img
            onClick={handleClick}
            className="w-full h-2/4 object-cover rounded-[5px_5px_0px_0px]"
            alt={data.flags.alt}
            src={data.flags.png}
          />
        </div>
        <div className="leading-relaxed text-white text-base p-[24px_0px_46px_24px]">
          <h2 className="text-2xl leading-[2]">{data.name.common}</h2>
          <p>
            Population:
            <span> {data.population.toLocaleString()}</span>
          </p>
          <p>
            Region:
            <span> {data.region}</span>
          </p>
          <p>
            Capital:
            <span> {data.capital}</span>
          </p>
        </div>
      </article>
    </Link>
  );
};

export default CountryShow;
