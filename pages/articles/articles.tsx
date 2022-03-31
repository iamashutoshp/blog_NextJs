import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, Paper } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

const Article = () => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        bgcolor: "text.secondary",
        color: "background.paper",
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image="/images/profile.jpg"
        alt="Vengeance"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          I am Vengeance
        </Typography>
        <Typography variant="body2" color="text.primary">
          Hello there, Lizards are a widespread group of squamate reptiles, with
          over 6,000 species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" style={{ color: "#b7b7e4", fontWeight: "bold" }}>
          Share
        </Button>
        <Button size="small" style={{ color: "#b7b7e4", fontWeight: "bold" }}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
export default function Articles() {
  return (
    <>
      <Grid
        container
        spacing={2}
        style={{ marginLeft: "30px", marginRight: "30px" }}
      >
        <Grid item xs={4}>
          <Article />
        </Grid>
        <Grid item xs={4}>
          <Article />
        </Grid>
        <Grid item xs={4}>
          <Article />
        </Grid>
      </Grid>
    </>
  );
}
