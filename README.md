A web app that allows the user to search for a url and retrieve feeds.

![Alt text](/images/app.gif?raw=true "RSS")


The sidebar allows the user to browse and select previously searched urls. 

Clicking on the url button will display the associated feeds on the main window on the right hand side.

The user can also remove a url from the history.

Redux is used for state management.

Data retrieved from the APIs persist to local storage. The application checks local storage first for the existence of the data, before making a data request. So if the user freshes the browser or disconnects, the data is still available offline.

Browser router from react-router-dom is used to manage the browser history.

Array.prototype.reverse method is used to ensure the latest searched url is displayed at the top of the history list. It is currently called inside the rendor lifecycle method and should be moved to an earlier lifecycle hook to optimise for speed.

Ideas for improvements:

Generate a unique ID using and assign it to each url history object and feed retrieved.

Then use the unique ID to identify the user selected url and then show the feeds for that url.

At present the url string itself is used as a unique ID and url history section comprises of Link elements navigate to randomly generated numbers to merely create a browser history from user click, which is a poor implementation.

The unique ID would also be used as a key to help ReactJS work out diffing of DOM elements. Currently the index of an array is used which is not good practice.

Session storage could be a better option than local storage as the data may no longer be needed once the user closes the browser. 





