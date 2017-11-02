const React = require('react')
const ReactDOM = require('react-dom')
require('./index.css')


// Define a React App component here. A component may have:
// - state
// - lifecycle event (e.g. appear / disappear from screen)
// - UI
class App extends React.Component {
  render() {
    return (
      <div>Hello World!</div>
    )
  }
}

// Render the react component App, to the HTML component where id = 'app'
ReactDOM.render(
  <App />,
  document.getElementById('app')
)