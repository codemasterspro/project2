import React, { useState } from "react";
import "./Card.css";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Container from "@material-ui/core/Container";
import PauseIcon from "@material-ui/icons/Pause";
import PlayIcon from "@material-ui/icons/PlayArrow";
import Sound from "react-sound";

const useStyles = makeStyles(theme => ({
  card: {
    width: 300,
    maxWidth: 375,
    marginTop: 10,
    marginBottom: 20,
    marginRight: 0
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));


const RecipeReviewCard = props => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const [playing, setPlaying] = useState(Sound.status.PAUSED);

  const playAudio = () => {
    setPlaying(Sound.status.PLAYING);
  };
  const pauseAudio = () => {
    setPlaying(Sound.status.PAUSED);

  };

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Container >
      <Card className={classes.card} id="card">
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              <img alt={props.artistName} src={props.artistImage} />
            </Avatar>
          }
          // action={
          //   <IconButton aria-label="Settings">
          //     <MoreVertIcon />
          //   </IconButton>
          // }
          title={props.songTitle}
          subheader={props.artistName}
        />
        <CardMedia
          className={classes.media}
          image={props.albumCover}
          title={props.songTitle}
        />
        {/* <CardContent> */}
        {/* <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography> */}
        {/* </CardContent> */}
        <CardActions disableSpacing>

          <IconButton aria-label="Play">
            <PlayIcon onClick={playAudio} />
          </IconButton>

          <IconButton aria-label="Pause">
            <PauseIcon onClick={pauseAudio} />
          </IconButton>

          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>

          {/* <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton> */}

          {/* Expandable Icon */}

          {/* <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Show more"
        >
          <ExpandMoreIcon />
        </IconButton> */}

        </CardActions>

        <Sound
          url={props.songPreview}
          playStatus={playing}
        />

        {/* Expandable Description */}

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          {/* <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent> */}
        </Collapse>
      </Card >
    </Container >
  );
};

export default RecipeReviewCard;