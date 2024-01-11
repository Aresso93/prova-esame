import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CoatOfArms, Currencies, Languages } from "../model/country";

interface CardProps {
  name: string;
  flag: string;
  population: number;
  capital: string[];
  currencies: Currencies;
  languages: Languages;
  subregion: string;
  landlocked: boolean;
  timeZones: string[];
  coatOfArms: CoatOfArms
}

export default function ElementCard(props: CardProps) {

  const countryUrl = "https://en.wikipedia.org/wiki/" + props.name

  return (
    <Card sx={{ maxWidth: 404 }}>
      <CardMedia sx={{ height: 460 }} image={props.coatOfArms.png} title={props.name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name} {props.flag}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         <b>{props.name}</b> is a European country with a population of {props.population} citizens.<br></br>
         {props.name}'s capital is {props.capital} and the country is part of the {props.subregion} area.
         {props.landlocked ? "The country is landlocked." : "The country has access to the sea."}
        </Typography>
        <div>
        {/* <h5>Time Zones</h5>
        {props.timeZones.map((timeZone) => (
          <div className="timezones">
            <div>{timeZone}</div>
          </div>
        ))} */}
        </div>
      </CardContent>
      <CardActions>
        <div className="buttons">
        <a href={countryUrl} target="_blank">See on Wikipedia for more information</a>
        </div>
      </CardActions>
    </Card>
  );
}
