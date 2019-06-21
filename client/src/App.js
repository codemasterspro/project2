import React, { Component } from "react";
import PrimarySearchAppBar from "./components/navbar";
import RecipeReviewCard from "./components/Card";
import cards from "./cards.json";

class App extends Component {
  state = {
    cards
  }

  componentDidMount() {

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=eminem")
      .then(response => response.json())
      .then(responsejson => {
        this.setState({
          cards: responsejson.data
        });
      });
  }

  render() {
  
    return (
      <div>
        <PrimarySearchAppBar />
        <br />
        {this.state.cards.map(card => {
          let artistImage;
          if(card.artist)
          {
            artistImage = card.artist.picture;
          } else {
            artistImage = card.artistPicture;
          }
          return <RecipeReviewCard
            id={card.id}
            artistImage={artistImage}
            artistName={card.artistName}
            songTitle={card.title}  
            albumTitle={card.albumName}
            albumCover={card.albumCover}
          />;
        })}

          
      </div>
    );
  }
}
export default App;
