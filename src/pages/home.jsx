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

  /* THIS IS A TEST */

  componentDidMount() {
    const movies = Service.getMovies();
    this.setState({ movies });
  }

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  handleClone = movie => {
    const clonedMovie = Object.assign({}, movie);
    clonedMovie._id += "_clone";
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies.splice(index, 0, clonedMovie);
    this.setState({ movies });
  };

  handleEdit = movie => {
    const movies = [...this.state.movies];
    const index = movies.findIndex(mov => mov._id === movie._id);
    movies[index] = movie;
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
            onClone={this.handleClone}
            onEdit={this.handleEdit}
          />
        ))}
      </FlexContainer>
    );
  }
}
