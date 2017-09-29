import React, { Component } from 'react'
import { string, object } from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { FeedItem } from './FeedItem'

class Content extends Component {
  constructor () {
    super()
  }

  render () {
    let show
    if (this.props.feeds[this.props.selectedUrl]) {
      show = (
        <div>
          <Header>{this.props.selectedUrl}</Header>
          {this.props.feeds[this.props.selectedUrl].item.map((_item, index) => {
            return (
              <FeedItem
                key={index}
                {..._item}
              />
            )
          })}
        </div>
      )
    }
    return (
      <ContentContainer>
        {show}
      </ContentContainer>
    )
  }
}

Content.propTypes = {
  feeds: object.isRequired,
  selectedUrl: string.isRequired
}

const mapStateToProps = state => ({
  feeds: state.feedsReducer.feeds,
  selectedUrl: state.selectedReducer.selectedUrl
})

const ContentContainer = styled.div`
  grid-area: main;
  display: flex;
  flex: 0 0 400px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Header = styled.h2`
  flex: 0 0 60px;
`

export default connect(mapStateToProps)(Content)
