import axios from 'axios'
import { parseString } from 'xml2js'

import { ADD_FEED, REMOVE_FEED,
ADD_URL, SELECT_URL,
REMOVE_URL } from './index'

export function addFeed (feed) {
  return { type: ADD_FEED, payload: feed }
}

export function removeFeed (feed) {
  return { type: REMOVE_FEED, payload: feed }
}

export function getAPIFeed (url) {
  /*
  http://www.feedforall.com/sample.xml
  http://www.feedforall.com/sample-feed.xml
  http://www.feedforall.com/blog-feed.xml
  http://www.rss-specifications.com/blog-feed.xml
  */

  return (dispatch) => {
    axios
      .get(url)
      .then(response => {
        // Only add url to history if status 200 received from feed API
        if (response.status === 200) {
          dispatch(addUrl(url))
        }
        return response.data
      })
      .then(xml => {
        parseString(xml, function (err, data) {
          if (err) {
            console.error('Error parsing data', error)
          }

          let feed = data.rss.channel[0]
          console.log(data.rss)
          dispatch(addFeed({ [url]: feed }))
          dispatch(selectUrl(url))
        })
      })
      .catch(error => {
        console.error('Error getting data', error)
      })
  }
}

export function addUrl (url) {
  return { type: ADD_URL, payload: url }
}

export function selectUrl (url) {
  return { type: SELECT_URL, payload: url }
}

export function removeUrl (url) {
  return { type: REMOVE_URL, payload: url }
}
