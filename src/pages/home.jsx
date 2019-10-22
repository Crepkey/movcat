import React, { Component } from "react";
import * as Service from "../services/fakeMovieService";
import styled from "styled-components";
import MovieBox from "../components/movieBox";

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default class Home extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    const movies = Service.getMovies();
    this.setState({ movies });
  }

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  render() {
    return (
      <FlexContainer>
        {this.state.movies.map(movie => (
          <MovieBox
            key={movie._id}
            movie={movie}
            onDelete={this.handleDelete}
          />
        ))}
      </FlexContainer>
    );
  }
}
