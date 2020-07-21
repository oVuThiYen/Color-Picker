import React, { Component } from 'react'

class Sort extends Component {

  onClick = (sortBy, sortValue) =>{
    this.props.onSort(sortBy, sortValue)
  }
  render() {
    return (
      
      <div className="col-6">
        <div className="dropdown">
          <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Sort by
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li onClick={ () => this.onClick('name', 1)}>
              <a
                role="button"
                className={(this.props.sortBy === 'name' && this.props.sortValue === 1) ? 'sort-active': '' }
              >Name A-Z</a>
            </li>
            <li onClick={ () => this.onClick('name', -1)}>
              <a
                role="button"
                className={(this.props.sortBy === 'name' && this.props.sortValue === -1) ? 'sort-active': '' }
              >Name Z-A</a>
            </li>
            <li onClick={ () => this.onClick('status', 1)}>
              <a
                role="button"
                className={(this.props.sortBy === 'status' && this.props.sortValue === 1) ? 'sort-active': '' }
              >Active</a>
            </li>
            <li onClick={ () => this.onClick('status', -1)}>
              <a
                role="button"
                className={(this.props.sortBy === 'status' && this.props.sortValue === -1) ? 'sort-active': '' }
              >Hide</a>
            </li>
          </div>
        </div>
      </div>
    )
  }
}

export default Sort
