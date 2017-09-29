import React, { Component } from 'react'
import styled from 'styled-components'

import { HistoryList, Search } from './Sidebar'
import Content from './Main/Content'

class Home extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      <AppContainer
        className>
        <SidebarContainer>
          <Search />
          <HistoryList />
        </SidebarContainer>
        <Content />
      </AppContainer>
    )
  }
}

const AppContainer = styled.div`
  background-color: #F4F8FB;
  display: grid;
  height: 100vh;
  grid-gap: 2%;
  grid-template: [app-top] "sidebar main" 1fr [app-bottom]
                            / 5fr auto;

  @media(min-width: 700px) {
    display: grid;
    height: 100vh;
    width: 100wh;
    grid-gap: 2%;
    grid-template: [app-top] "sidebar main" 1fr [app-bottom]
    / 400px auto;
  }
`

const SidebarContainer = styled.div`
  border-right: 1px solid #DCDCDC;
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
`
export default Home
