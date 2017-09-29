import { combineReducers } from 'redux'
import { ADD_FEED, ADD_URL,
  SELECT_URL, REMOVE_URL, REMOVE_FEED } from '../actions'

function addFeed (state, action) {
  console.log('addFeed: ', action.payload)
  if (action.type === ADD_FEED) {
    return Object.assign({}, { feeds: Object.assign({}, state.feeds, action.payload)})
  }
  return state
}

function removeFeed (state, action) {
  // console.log('removeFeed: ', state.feeds)
  let newState = Object.assign({}, state.feeds)
  delete newState[action.payload]

  if (action.type === REMOVE_FEED) {
    return Object.assign({}, { feeds: newState })
  }
  return state
}

const feedsReducer = (state = { feeds: {} }, action) => {
  switch (action.type) {
    case ADD_FEED:
      return addFeed(state, action)

    case REMOVE_FEED:
      return removeFeed(state, action)

    default:
      return state
  }
}

function addUrl (state, action) {
  if (action.type === ADD_URL) {
    let urls
    urls = [...state.urls, action.payload]
    return Object.assign({}, { urls })
  }
  return state
}

function removeUrl (state, action) {
  if (action.type === REMOVE_URL) {
    let urls
    urls = state.urls.filter(url => url !== action.payload)
    return Object.assign({}, { urls })
  }
  return state
}

const historyReducer = (state = { urls: [] }, action) => {
  switch (action.type) {
    case ADD_URL:
      return addUrl(state, action)

    case REMOVE_URL:
      return removeUrl(state, action)

    default:
      return state
  }
}

function selectedUrl (state, action) {
  return Object.assign({}, { selectedUrl: action.payload })
}

const selectedReducer = (state = { selectedUrl: '' }, action) => {
  switch (action.type) {
    case SELECT_URL:
      return selectedUrl(state, action)

    default:
      return state
  }
}

const rootReducer = combineReducers({ feedsReducer, historyReducer, selectedReducer })

export default rootReducer
