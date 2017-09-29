import React, { Component } from 'react'
import styled from 'styled-components'
import { array } from 'prop-types'
import renderHTML from 'react-render-html'

export const FeedItem = (props) => {
  return (
    <Item>
      <Box><span>{props.title[0]}</span></Box>
      <Box><span>{props.description[0]}</span></Box>
      <Box><span>{props.pubDate[0]}</span></Box>
    </Item>
  )
}

FeedItem.propTypes = {
  title: array.isRequired,
  pubDate: array.isRequired,
  description: array.isRequired
}

const Item = styled.div`
	border: 1px solid black;
  border-radius: 2px;
	flex: 1;
	margin-right: 3%;
  margin-bottom: 3%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  
`

const Box = styled.div`
  flex: 1;
  word-wrap: break-word;
  overflow-wrap: break-word
  text-align: left;
  padding: 2%;
`
