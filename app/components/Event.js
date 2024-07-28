"use client";
import * as React from "react";
import { useRouter } from "next/navigation"; // Import the useRouter hook
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Event() {
  const [isFavorited, setIsFavorited] = React.useState(false);

  // Using Next.js useRouter hook
  const router = useRouter();

  // Function to toggle favorite state
  const handleFavoriteClick = (event) => {
    event.stopPropagation(); // Prevent click event from bubbling to the card
    setIsFavorited(!isFavorited);
  };

  // Function to handle share icon click
  const handleShareClick = (event) => {
    event.stopPropagation(); // Prevent click event from bubbling to the card
    // Perform share action (e.g., open share dialog)
    console.log("Share icon clicked");
  };

  // Function to handle card click
  const handleCardClick = () => {
    router.push("/event"); // Redirect to the desired page
  };

  return (
    <Card sx={{ maxWidth: 345 }} onClick={handleCardClick}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" onClick={(event) => event.stopPropagation()}>
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=2210&quality=70"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleFavoriteClick}>
          <FavoriteIcon style={{ color: isFavorited ? "red" : "inherit" }} />
        </IconButton>
        <IconButton aria-label="share" onClick={handleShareClick}>
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
