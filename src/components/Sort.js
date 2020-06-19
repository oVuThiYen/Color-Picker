import React, { Component } from 'react'

class Sort extends Component {
  render() {
    return (
      <div className="col-6">
        <div className="dropdown">
          <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Sort by
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" role="button">Name A-Z</a>
            <a className="dropdown-item" role="button">Name Z-A</a>
            <a className="dropdown-item" role="button">Something else here</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Sort
