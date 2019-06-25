import React, { Component } from "react";
import PrimarySearchAppBar from "./components/navbar";
import RecipeReviewCard from "./components/Card";
import cards from "./cards.json";
import Container from "@material-ui/core/Container";

// -------- //

class App extends Component {
  state = {
    init: cards,
    cards: [],
    data: ""
  };

  getData = (data) => {
    //console.log(data);
    this.setState({ data });
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

  componentDidUpdate(prevprop, prevstate) {
    if (prevstate.data !== this.state.data) {
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
    const { cards, init } = this.state;
    console.log(this.state.data);
    return (
      <React.Fragment >
        <PrimarySearchAppBar getData={this.getData} />
        <br />

        <Container>
          <h6>Top Results</h6>
          <p>The latest hits, updated all the time</p>
        </Container>

        <div id="cardContainer">

          {cards ? cards.map(card => {

            return (
              <RecipeReviewCard
                ids={card.id}
                artistImage={card.artist.picture_small}
                artistName={card.artist.name}
                songTitle={card.title}
                albumCover={card.album.cover_xl}
                songPreview={card.preview}
              />
            );

          }) : init.map(card => {

            return (
              <RecipeReviewCard
                ids={card.id}
                artistImage={card.artist.picture_small}
                artistName={card.artist.name}
                songTitle={card.title}
                albumCover={card.album.cover_xl}
                songPreview={card.preview}
              />
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}



export default App;
