import React, { Component } from 'react'
import { array, object, func } from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import FontIcon from 'material-ui/FontIcon'
import { Link } from 'react-router-dom'

import { selectUrl, removeUrl, removeFeed } from '../actions/actionCreators'

class HistoryList extends Component {
  constructor () {
    super()
    this.handleClickRemoveUrl = this.handleClickRemoveUrl.bind(this)
  }

  handleClickRemoveUrl (url) {
    this.props.removeUrl(url)
    this.props.removeFeed(url)
  }

  render () {
    return (
      <HistoryContainer>
        {this.props.urls.reverse().map((url, i) => {
          return (
            <Link
              style={{ width: '80%', left: 0 }}
              key={i}
              to={`/${Math.floor(Math.random() * 100)}`}>
              <Button
                onClick={() => this.props.setSelectedUrl(url)}
                key={url}>{url.slice(11, url.length)}<Delete>
                  <FontIcon
                    style={{ fontSize: '16px' }}
                    color='#498EB9'
                    onClick={() => this.handleClickRemoveUrl(url)}
                    className='material-icons'>highlight_off</FontIcon>
                </Delete>
              </Button>
            </Link>
          )
        })}
      </HistoryContainer>
    )
  }
}

HistoryList.propTypes = {
  removeUrl: func.isRequired,
  urls: array.isRequired,
  setSelectedUrl: func.isRequired,
  removeFeed: func.isRequired
}

const mapStateToProps = state => ({
  urls: state.historyReducer.urls
})

const mapDispatchToProps = dispatch => ({
  setSelectedUrl (url) {
    dispatch(selectUrl(url))
  },
  removeUrl (url) {
    dispatch(removeUrl(url))
  },
  removeFeed (url) {
    dispatch(removeFeed(url))
  }
})

const HistoryContainer = styled.div`
  flex: 9;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
`

const Button = styled.button`
  margin-top: 8%;
  border: 1px solid #498EB9;
  border-radius: 4px;
  position: relative;
  text-align: center;
  font-size: 16px;
  height: 60px;
  width: 100%;
  transition: background 0.12s;
  &:hover {
    cursor: pointer;
  }
  color: #498EB9;
  font-weight: 600;
  background: #FFF;
`

const Delete = styled.div`
  position: absolute;
  left: 90%;
  top: 16%;
`

export default connect(mapStateToProps, mapDispatchToProps)(HistoryList)
