import React, { Component } from "react";
import PrimarySearchAppBar from "./components/navbar";
import RecipeReviewCard from "./components/Card";
import cards from "./cards.json";

// -------- //

class App extends Component {


  state = {
    cards
  }

  // Deezer API Call //
  // Need to capture user's search input here and pass to API paramaters //

  componentDidMount() {

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=Nervo&index=0&limit=10")
      .then(response => response.json())
      .then(responsejson => {
        this.setState({
          cards: responsejson.data
        });
      });
  }

  // API call rendered results //

  render() {
    return (

      <div>
        <PrimarySearchAppBar />
        <br />

        {/* TO-DO: Update local JSON structure to match API response JSON structure */}

        {this.state.cards.map(card => {

          let artistImage;
          let artistName;
          let albumCover;
          let songTitle;
          let id;

          // Remove if/else statement when local JSON structure is fixed

          if (card.artist) {
            id = card.id;
            artistImage = card.artist.picture_small;
            artistName = card.artist.name;
            songTitle = card.title;
            albumCover = card.album.cover_xl;
          } else {
            id = card.id;
            artistImage = card.artistPicture;
            artistName = card.artistName;
            songTitle = card.title;
            albumCover = card.albumCover;
          }

          return <RecipeReviewCard
            id={id}
            artistImage={artistImage}
            artistName={artistName}
            songTitle={songTitle}
            albumCover={albumCover}
          />;
        })}
      </div>

    );
  }
}



export default App;
