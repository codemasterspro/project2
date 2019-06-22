import React, { Component } from "react";
import PrimarySearchAppBar from "./components/navbar";
import RecipeReviewCard from "./components/Card";
import cards from "./cards.json";
class App extends Component {
  state = {
    cards,
  }

render() {
  return (
    <div>
  <PrimarySearchAppBar />
  {this.state.cards.map(card => (
          <RecipeReviewCard
          id={card.id}
          artistImage={card.artistPicture}
          artistName={card.artistName}
          songTitle={card.title}
          albumTitle={card.albumName}
          albumCover={card.albumCover}
          genre={card.genres}
          year={card.releaseYear}
          songPreview={card.songPreview}
          />))}
      </div>
  );
}
}
export default App;


