import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ClassNames } from "@emotion/react";

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Recipe = ({ title, calories, image, ingridient, int }) => {
  // const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Card sx={{ maxWidth: 345 }} style={{ margin: "10px" }}>
        <CardHeader title={title} subheader={calories} />
        <CardMedia component="img" image={image} />

        <CardActions disableSpacing>
          <div>Ingridients</div>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {ingridient.map((ingridient) => (
              <Typography paragraph>{ingridient}</Typography>
            ))}
          </CardContent>
        </Collapse>
      </Card>

      {/* <p>{title}</p>
      <p>{calories}</p>
      <img src={image} alt="" />
      <ol>
        {ingridient.map((ingridient) => {
          return <li>{ingridient}</li>;
        })}
      </ol> */}
    </div>
  );
};

export default Recipe;
