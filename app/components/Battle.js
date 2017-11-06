const React = require('react');
const PlayerInput = require('./PlayerInput')

class Battle extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImage: null,
      playerTwoImage: null,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(id, username) {
    this.setState(function () {
      const newState = {}
      newState[`${id}Name`] = username
      newState[`${id}Imnage`] = `https://github.com/${username}/.png?size=200`
      return newState
    })
  }

  render() {
    const playerOneName = this.state.playerOneName
    const playerTwoName = this.state.playerTwoName
    return (
      <div>
        <div className='row'>
          {!playerOneName && <PlayerInput />}
          {!playerTwoName && <PlayerInput />}
        </div>
      </div>
    )
  }
}

module.exports = Battle