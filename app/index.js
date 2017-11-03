const React = require('react')
const ReactDOM = require('react-dom')
require('./index.css')

// import React components
const App = require('./components/App')


// Render the react component App, to the HTML component where id = 'app'
ReactDOM.render(
  <App />,
  document.getElementById('app')
)