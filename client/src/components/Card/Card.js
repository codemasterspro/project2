import React, { useState }  from 'react';
import "./Card.css";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PauseIcon from '@material-ui/icons/Pause';
import PlayIcon from '@material-ui/icons/PlayArrow'
import Sound from 'react-sound';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const RecipeReviewCard = props => {
  const classes = useStyles();

  const [playing, setPlaying] = useState(Sound.status.PAUSED);

  const playAudio = () => {
    setPlaying(Sound.status.PLAYING)
    };
  const pauseAudio = () => {
    setPlaying(Sound.status.PAUSED)

    };

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
            <img alt={props.artistName} src={props.artistImage} />
          </Avatar>
        }
        title={props.songTitle}
        subheader={props.artistName}
      />
      <CardMedia
        className={classes.media}
        image={props.albumCover}
        title={props.songTitle}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.genre}, {props.year}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Play">
          <PlayIcon onClick={playAudio}/>
        </IconButton>
        <IconButton aria-label="Pause">
          <PauseIcon onClick={pauseAudio}/>
        </IconButton>
      </CardActions>
      <Sound
        url={props.songPreview}
        playStatus={playing}
      />
    </Card>
  );
}

export default RecipeReviewCard