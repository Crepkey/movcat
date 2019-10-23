import React, { Component } from "react";
import styled from "styled-components";
import EditModal from "./editModal";

const IconContainer = styled.div`
  padding: 10px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.25);
  border: 2px solid grey;

  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }
`;

const Icon = styled.i`
  margin: 10px;
  color: white;
  font-size: 30px;
  text-shadow: 3px 3px 5px grey;

  &:hover {
    color: gray;
  }
`;

export default class MovieOperations extends Component {
  constructor(props) {
    super(props);
    this.state = { isEditModalShow: false };
  }

  closeEditModal = () => this.setState({ isEditModalShow: false });

  openEditModal = () => this.setState({ isEditModalShow: true });

  render() {
    return (
      <div>
        <IconContainer>
          <Icon className="fa fa-heart" aria-hidden="true"></Icon>
          <Icon
            className="fa fa-clone"
            aria-hidden="true"
            onClick={() => this.props.onClone(this.props.movie)}
          ></Icon>
          <Icon
            className="fa fa-pencil-square-o"
            aria-hidden="true"
            onClick={this.openEditModal}
          ></Icon>
          <Icon
            className="fa fa-eraser"
            aria-hidden="true"
            onClick={() => this.props.onDelete(this.props.movie)}
          ></Icon>
        </IconContainer>
        <EditModal
          show={this.state.isEditModalShow}
          onHide={this.closeEditModal}
          movie={this.props.movie}
        />
      </div>
    );
  }
}
