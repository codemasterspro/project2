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
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";
import CloseIcon from "@material-ui/icons/Close";
import { amber, green } from "@material-ui/core/colors";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import WarningIcon from "@material-ui/icons/Warning";

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
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

const variantIcon = {
  success: CheckCircleIcon
};

const useStyles1 = makeStyles(theme => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.main,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: "flex",
    alignItems: "center",
  },
}));

function MySnackbarContentWrapper(props) {
  const classes = useStyles1();
  const { className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton key="close" aria-label="Close" color="inherit" onClick={onClose}>
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
      {...other}
    />
  );
}

MySnackbarContentWrapper.propTypes = {
  className: PropTypes.string,
  message: PropTypes.node,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(["success", "warning", "error", "info"]).isRequired,
};

const useStyles2 = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
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

  const classesLike = useStyles2();
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen(true);
  }

  function handleClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  }

  return (
    <Container>
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

          <IconButton
            aria-label="Add to favorites"
            variant="outlined"
            className={classesLike.margin}
            onClick={handleClick}
          >
            <Snackbar
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
            >
              <MySnackbarContentWrapper
                onClose={handleClose}
                variant="success"
                message="Was saved to your library!"
              />
            </Snackbar>
            <FavoriteIcon />
          </IconButton>
        </CardActions>

        <Sound url={props.songPreview} playStatus={playing} />

        <Collapse in={expanded} timeout="auto" unmountOnExit />
      </Card>
    </Container>
  );
};

export default RecipeReviewCard;
