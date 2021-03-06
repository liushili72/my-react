import React, { Component, PropTypes } from 'react'

export default class Footer extends Component {
  renderFilter(filter, name) {
    if (filter === this.props.filter) {
      return name
    }

    return (
      <a href='#' onClick={e => {
        e.preventDefault()
        this.props.onFilterChange(filter)
      }}>
        {name}
      </a>
    )
  }

  render() {
    return (
      <p>
        {/*Show:
        {' '}
        {this.renderFilter('SHOW_ALL', 'All')}
        {', '}
        {this.renderFilter('SHOW_COMPLETED', 'Completed')}
        {', '}
        {this.renderFilter('SHOW_ACTIVE', 'Active')}
        {', '}
        {this.renderFilter('SHOW_REVERT', 'Revert')}
        .*/}
        Show:
    {" "}
        <FilterLink2 filter="all">
          All
    </FilterLink2>
        {", "}
        <FilterLink2 filter="active">
          Active
    </FilterLink2>
        {", "}
        <FilterLink2 filter="completed">
          Completed
    </FilterLink2>
      </p>
    )
  }
}

Footer.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE',
    'SHOW_REVERT'
  ]).isRequired
}