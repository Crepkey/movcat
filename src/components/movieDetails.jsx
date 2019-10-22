import React, { Component } from "react";
import styled from "styled-components";

const DetailContainer = styled.div`
  padding: 10px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.25);
  border: 2px solid grey;

  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }
`;

export default class MovieDetails extends Component {
  render() {
    let {
      _id,
      numberInStock,
      dailyRentalRate,
      publishDate
    } = this.props.details;

    return (
      <React.Fragment>
        <DetailContainer>{_id}</DetailContainer>
        <DetailContainer>{numberInStock}</DetailContainer>
        <DetailContainer>{dailyRentalRate}</DetailContainer>
        <DetailContainer>
          {publishDate ? publishDate : "There is no publish date"}
        </DetailContainer>
      </React.Fragment>
    );
  }
}
