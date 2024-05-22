import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

import "./InfoBox.css";

export default function InfoBox({ info }) {
  const HOT_URL = import.meta.env.VITE_HOT_URL;
  const COLD_URL = import.meta.env.VITE_COLD_URL;
  const RAINY_URL = import.meta.env.VITE_RAINY_URL;

  return (
    <div className="InfoBox">
      <div className="CardBox">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAINY_URL
                : info.temp > 25
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
              {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp > 25 ? (
                <WbSunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography variant="body2" color="text.secondary" component="span">
              <p>
                <b>Temperature: </b>
                {info.temp}&deg;C
              </p>
              <p>
                <b>Minimum Tempearture: </b>
                {info.tempMin}&deg;C
              </p>
              <p>
                <b>Maximum Temperature: </b>
                {info.tempMax}&deg;C
              </p>
              <p>
                <b>Humidity: </b>
                {info.humidity}
              </p>
              <p>
                Weather seems to have {info.weather} and feels like{" "}
                {info.fellsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
