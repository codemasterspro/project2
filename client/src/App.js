import React, { Component } from "react";
import PrimarySearchAppBar from "./components/navbar";
import RecipeReviewCard from "./components/Card";
import cards from "./cards.json";

// -------- //

class App extends Component {
  state = {
    init: cards,
    cards: [],
    data: ""
  };

  getData = (data) => {
    //console.log(data);
    this.setState({data});
  };
  // Deezer API Call //
  // Need to capture user's search input here and pass to API paramaters //

  componentDidMount() {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=Nervo&index=0&limit=10"
    )
      .then(response => response.json())
      .then(responsejson => {
        this.setState({
          cards: responsejson.data
        });
      });
  }

  componentDidUpdate(prevprop, prevstate){
    if(prevstate.data !== this.state.data){
      fetch(
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${this.state.data}&index=0&limit=10`
      )
        .then(response => response.json())
        .then(responsejson => {
          this.setState({
            cards: responsejson.data
          });
        });
    }
  }

  // API call rendered results //

  render() {
    const {cards,init} = this.state;
    console.log(this.state.data);
    return (
      <React.Fragment >
        <PrimarySearchAppBar getData={this.getData}/>
        <br />
        <div id="cardContainer">

          {cards ? cards.map(card => {
            let artistImage = card.artist.picture_small;
            let artistName = card.artist.name;
            let albumCover = card.album.cover_xl;
            let songTitle = card.title;
            let id = card.id;
            let songPreview = card.preview;

            return (
              <RecipeReviewCard
                ids={id}
                artistImage={artistImage}
                artistName={artistName}
                songTitle={songTitle}
                albumCover={albumCover}
                songPreview={songPreview}
              />  
            );
                    
          }): init.map(card => {
            let artistImage = card.artist.picture_small;
            let artistName = card.artist.name;
            let albumCover = card.album.cover_xl;
            let songTitle = card.title;
            let id = card.id;
            let songPreview = card.preview;

            return (
              <RecipeReviewCard
                ids={id}
                artistImage={artistImage}
                artistName={artistName}
                songTitle={songTitle}
                albumCover={albumCover}
                songPreview={songPreview}
              />
            );
          })}
        </div> 
      </React.Fragment>
    );
  }
}



export default App;
