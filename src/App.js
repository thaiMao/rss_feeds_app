import React, { Component } from 'react'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './Home'
import store from './store'

class App extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      <BrowserRouter>
        <Provider
          store={store}>
          <MuiThemeProvider>
            <div>
              <Route exact path='/' component={Home} />
              <Route
                path='/:id'
                component={props => <Home feedID={props.match.params.id} {...props} />}
              />
            </div>
          </MuiThemeProvider>
        </Provider>
      </BrowserRouter>
    )
  }
}

export default App
