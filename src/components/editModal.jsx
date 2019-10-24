import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import EditForm from "./editForm";

export default class EditModal extends Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {this.props.movie.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <EditForm movie={this.props.movie} onHide={this.props.onHide} />
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}
