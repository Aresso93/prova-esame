import { Country } from "../model/country";
import ElementCard from "./card";

interface ListProps {
  countries: Country[]
}

export default function ElementList(props: ListProps) {
  return (
    <div className="card-container">
      {props.countries.map((country) => (
        <div key={country.flag}>
        <ElementCard name={country.name.common} flag={country.flag} population={country.population} capital={country.capital} 
       />
       </div>
      ))}
    </div>
  );
}
