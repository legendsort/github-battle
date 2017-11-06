const React = require('react');
const PropTypes = require('prop-types')

// Private stateless functional component
function PlayerPreview(props) {
  return (
    <div>
      <h1 className='header'>
        {props.label}
      </h1>
      <img
        className='avatar'
        src={props.avatar}
        alt={`Avatar for ${props.username}`}
      />
      <h2 className='username'>@{props.username}</h2>
    </div>
  )
}
PlayerPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

// Private Component
class PlayerInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState(function() {
      return {
        username: value
      }
    })
  }

  // this.props.onSubmit method comes from the Battle instance
  handleSubmit(event) {
    event.preventDefault()
    this.props.onSubmit(
      this.props.id,
      this.state.username
    )
  }

  render() {
    return (
      <form className='column' onSubmit={this.handleSubmit}>
        <label className='header' htmlFor='username'>
          {this.props.label}
        </label>
        <input
          id='username'
          placeholder='github username'
          type='text'
          autoComplete='off'
          value={this.state.username}
          onChange={this.handleChange}
        />

        <button
          className='button'
          type='submit'
          disabled={!this.state.username}>
            Submit
          </button>
      </form>
    )
  }
}
PlayerInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
}


// Main Component
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
      newState[`${id}Image`] = `https://github.com/${username}.png?size=200`
      return newState
    })
  }

  render() {
    const playerOneName = this.state.playerOneName
    const playerTwoName = this.state.playerTwoName
    const playerOneImage = this.state.playerOneImage
    const playerTwoImage = this.state.playerTwoImage
    return (
      <div>
        <div className='row'>
          {!playerOneName &&
            <PlayerInput
              id='playerOne'
              label='Player One'
              onSubmit={this.handleSubmit} />
          }

          {!!playerOneName && !!playerOneImage &&
          <PlayerPreview
            username={playerOneName}
            avatar={playerOneImage}
            label={'Player One'}
            id={'playerOne'} />
          }

          {!playerTwoName &&
            <PlayerInput
              id='playerTwo'
              label='Player Two'
              onSubmit={this.handleSubmit} />
          }

          {!!playerTwoName && !!playerTwoImage &&
          <PlayerPreview
            username={playerTwoName}
            avatar={playerTwoImage}
            label={'Player Two'}
            id={'playerTwo'} />
          }

        </div>
      </div>
    )
  }
}

module.exports = Battle