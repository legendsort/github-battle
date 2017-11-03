const React = require('react')
const Popular = require('./Popular')

// Define a React App component here. A component may have:
// - state
// - lifecycle event (e.g. appear / disappear from screen)
// - UI
class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Popular/>
      </div>
    )
  }
}

module.exports = App