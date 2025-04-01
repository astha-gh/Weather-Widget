import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const HOT =
    "https://images.unsplash.com/photo-1489610368847-c0d1dea29b4a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdWRzJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D";

  const Rain =
    "https://plus.unsplash.com/premium_photo-1666726664307-707a74015ca4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
  const cold =
    "https://images.unsplash.com/photo-1564314968303-86c5df2b9a4c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  return (
    <>
      <div className="InfoBox">
        <div className="CardContainer">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={info.humidity > 80 ? Rain : info.temp > 15 ? HOT : cold}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {info.city}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary" }}
                component={"span"}
              >
                <div>Temperature = {info.temp}&deg;C</div>
                <p>Humiditiy = {info.humidity}</p>
                <p>Temperature Max = {info.tempMax}&deg;C</p>
                <p>Temperature Min = {info.tempMin}&deg;C</p>
                <p>
                  Weather can be described as <i>{info.weather}</i> and feels
                  like {info.feels_like}&deg; C
                </p>
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
