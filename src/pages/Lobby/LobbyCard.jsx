import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import gameImage from "../../assets/images/game.jpg";

function LobbyCard({data}) {
  console.log("````` props :: ",data)
  const { amount, gameType, mode, commission } = data;
  console.log("````` amount :: ",amount)
  return (
    <Card sx={{ maxWidth: 345, maxHeight: 275, margin: 2 }}>
      <CardMedia sx={{ height: 140 }} image={gameImage} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Game Mode {mode} 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Game type is {gameType} and game commission is {commission} 
          - Amount : {amount}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default LobbyCard;
