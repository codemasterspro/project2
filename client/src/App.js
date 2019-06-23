import React, { Component } from "react";
import PrimarySearchAppBar from "./components/navbar";
import RecipeReviewCard from "./components/Card";
import cards from "./cards.json";
import Wrapper from "./components/Wrapper";


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
      <React.Fragment>
        <PrimarySearchAppBar />
        <br />
        <div id="cardContainer">

          {this.state.cards.map(card => {
            return (
              <RecipeReviewCard
                id={card.id}
                artistImage={card.artist.picture_small}
                artistName={card.artist.name}
                songTitle={card.title}
                albumCover={card.album.cover_xl}
                songPreview={card.preview}
              />  
            )
                    
          })}
         </div> 
      </React.Fragment>
    );
  }
}



export default App;
