import React, { Component } from "react";
import MovieDetails from "./movieDetails";
import styled from "styled-components";
import MovieOperations from "./movieOperations";

const MovieBoxContainer = styled.div`
  width: auto;
  padding: 10px;
  margin: 30px;
  text-align: center;
  line-height: 75px;
  border: 3px solid #73ad21;
  border-radius: 30px;
  border-color: DarkGray;
  background-image: linear-gradient(to bottom right, gray, LightGray);
  box-shadow: 10px 10px 5px grey;
`;

const H1 = styled.h1`
  color: white;
  text-shadow: 10px 5px 5px grey;
`;

export default class MovieBox extends Component {
  render() {
    return (
      <MovieBoxContainer>
        <H1>{this.props.movie.title}</H1>
        <MovieDetails key={this.props.movie._id} details={this.props.movie} />
        <MovieOperations
          onClone={this.props.onClone}
          onDelete={this.props.onDelete}
          onEdit={this.props.onEdit}
          movie={this.props.movie}
        />
      </MovieBoxContainer>
    );
  }
}
