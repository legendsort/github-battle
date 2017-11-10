import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// import React components
import App from './components/App'

// Render the react component App, to the HTML component where id = 'app'
ReactDOM.render(
  <App />,
  document.getElementById('app')
)