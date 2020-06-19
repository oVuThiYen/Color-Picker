import React, { Component } from 'react'

class Search extends Component {
  render() {
    return (
      <div className="col-6">
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Search" />
          <div className="input-group-btn">
            <button type="button" className="btn btn-primary">Search</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Search
