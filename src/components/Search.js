import React, { Component } from 'react'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    }
  }

  onChange = (e) => {
    var target = e.target
    var name = target.name
    var value = target.value
    this.setState({
      [name]: value
    })
  }

  onSearch = () => {
    this.props.onSearch(this.state.keyword)
  }
  render() {
    var { keyword } = this.state
    return (
      <div className="col-6">
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Search" name="keyword" value={ keyword } onChange={this.onChange} />
          <div className="input-group-btn">
            <button type="button" className="btn btn-primary" onClick={this.onSearch}>Search</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Search
