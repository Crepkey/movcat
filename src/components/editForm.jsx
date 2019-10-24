import React, { Component } from "react";

export default class EditForm extends Component {
  state = {
    movie: this.props.movie
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  handleChange = event => {
    const movie = { ...this.state.movie };
    movie[event.currentTarget.id] = event.currentTarget.value;
    this.setState({ movie });
  };

  render() {
    let { _id, numberInStock, dailyRentalRate, publishDate } = this.state.movie;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="movieID">Movie ID number</label>
            <input
              type="input"
              className="form-control"
              id="_id"
              value={_id}
              onChange={this.handleChange}
            />
            <small id="idHelp" className="form-text text-muted">
              Just in case modify the movie ID number if you are an asshole
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="numberInStock">Number in stock</label>
            <input
              type="input"
              className="form-control"
              id="numberInStock"
              value={numberInStock}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="dailyRentalRate">Daily Rental Rate</label>
            <input
              type="input"
              className="form-control"
              id="dailyRentalRate"
              value={dailyRentalRate}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="publishDate">Publish Date</label>
            <input
              type="input"
              className="form-control"
              id="publishDate"
              value={publishDate ? publishDate : "There is no publish date"}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="favorite" />
            <label className="form-check-label" htmlFor="favorite">
              Mark as favorite
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-success"
            onClick={() => this.props.onHide(this.state.movie)}
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}
