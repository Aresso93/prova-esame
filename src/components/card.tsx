import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Currencies } from "../model/country";

interface CardProps {
  name: string;
  flag: string;
  population: number;
  capital: string;
  currency: Currencies
}

export default function ElementCard(props: CardProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* <CardMedia sx={{ height: 140 }} image={props.img} title={props.name} /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name} {props.flag}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {props.name} is a European country with a population of {props.population} citizens.<br></br>
         {props.name}'s capital is {props.capital}.
         
        </Typography>
      </CardContent>
      <CardActions>
        <div className="buttons">
        <Button size="small"
        onClick={() => {console.log(props.name)}}
        >
          See on Wikipedia
          </Button>
          <Button size="small"
        onClick={() => {console.log(props.name)}}
        >
          Don't See on Wikipedia
          </Button>

        </div>
      </CardActions>
    </Card>
  );
}
