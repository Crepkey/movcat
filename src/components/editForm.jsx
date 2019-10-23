import React, { Component } from "react";

export default class EditForm extends Component {
  render() {
    let { publishDate, _id, numberInStock, dailyRentalRate } = this.props.movie;

    return (
      <div>
        <form>
          <div classNameName="form-group">
            <label for="movieID">Movie ID number</label>
            <input
              type="input"
              className="form-control"
              id="movieID"
              placeholder={_id}
            />
            <small id="idHelp" className="form-text text-muted">
              Just in case modify the movie ID number if you are an asshole
            </small>
          </div>
          <div classNameName="form-group">
            <label for="numberInStock">Number in stock</label>
            <input
              type="input"
              className="form-control"
              id="numberInStock"
              placeholder={numberInStock}
            />
          </div>
          <div classNameName="form-group">
            <label for="dailyRentalRate">Daily Rental Rate</label>
            <input
              type="input"
              className="form-control"
              id="dailyRentalRate"
              placeholder={dailyRentalRate}
            />
          </div>
          <div classNameName="form-group">
            <label for="publishDate">Publish Date</label>
            <input
              type="input"
              className="form-control"
              id="publishDate"
              placeholder={
                publishDate ? publishDate : "There is no publish date"
              }
            />
          </div>
          <br />
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="favorite" />
            <label className="form-check-label" for="favorite">
              Mark as favorite
            </label>
          </div>
          <button type="submit" className="btn btn-success">
            Save
          </button>
        </form>
      </div>
    );
  }
}
