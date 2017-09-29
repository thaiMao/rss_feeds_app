import React, { Component } from 'react'
import { array, func } from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { getAPIFeed, addUrl } from '../actions/actionCreators'

class Search extends Component {
  constructor () {
    super()
    this.state = {
      searchTerm: 'http://www.feedforall.com/sample.xml'
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleDispatch = this.handleDispatch.bind(this)
  }

  handleDispatch (url) {
    // Only send a request for data if url is not in history
    // i.e Only get data if you haven't got it already
    if (!this.props.urls.includes(url)) {
      this.props.getAPIFeed(url)
      this.setState({ searchTerm: '' })
    }
  }

  handleOnChange (event) {
    let { value } = event.target
    event.stopPropagation()
    this.setState({ searchTerm: value })
  }

  render () {
    let searchTerm = this.state.searchTerm

    return (
      <SearchContainer>
        <Input
          value={searchTerm}
          onChange={this.handleOnChange}
         />
        <Submit
          onClick={() => this.handleDispatch(this.state.searchTerm)}>Submit</Submit>
      </SearchContainer>
    )
  }
}

Search.propTypes = {
  urls: array.isRequired,
  getAPIFeed: func.isRequired
}

const mapStateToProps = state => ({
  urls: state.historyReducer.urls
})

const mapDispatchToProps = dispatch => ({
  getAPIFeed (url) {
    dispatch(getAPIFeed(url))
  }
})

const SearchContainer = styled.div`
  border-bottom: 1px solid black;
  flex: 0 0 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Input = styled.input`
  border: 1px solid black;
  border-radius: 4px;
  height: 50%;
  width: 60%;
  margin: 8px;
  font-size: 10px;
  text-align: center;
`

const Submit = styled.button`
  border: 1px solid black;
  border-radius: 4px;
  height: 50%;
  margin: 8px;
  &:hover {
    cursor: pointer;
  }
`

export default connect(mapStateToProps, mapDispatchToProps)(Search)
