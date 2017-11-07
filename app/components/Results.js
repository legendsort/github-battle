const React = require('react');
const PropTypes = require('prop-types')
const queryString = require('query-string')
const Link = require('react-router-dom').Link
const api = require('../utils/api')
const PlayerPreview = require('./PlayerPreview');


// Private
function Profile (props) {
  const info = props.info;

  return (
    <PlayerPreview username={info.login} avatar={info.avatar_url}>
      <ul className='space-list-items'>
        {info.name && <li>{info.name}</li>}
        {info.location && <li>{info.location}</li>}
        {info.company && <li>{info.company}</li>}
        <li>Followers: {info.followers}</li>
        <li>Following: {info.following}</li>
        <li>Public Repos: {info.public_repos}</li>
        {info.blog && <li><a href={info.blog}>{info.blog}</a></li>}
      </ul>
    </PlayerPreview>
  )
}

Profile.propTypes = {
  info: PropTypes.object.isRequired,
}

// Private
function Player (props) {
  return (
    <div>
      <h1 className='header'>{props.label}</h1>
      <h3 style={{textAlign: 'center'}}>Score: {props.score}</h3>
      <Profile info={props.profile} />
    </div>
  )
}
Player.propTypes = {
  label: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  profile: PropTypes.object.isRequired,
}


// Main
class Results extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      winner: null,
      loser: null,
      error: null,
      loading: true,
    }
  }

  componentDidMount() {
    // console.log(this.props)
    const players = queryString.parse(this.props.location.search)
    // console.log(players)
    api.battle([
      players.playerOneName,
      players.playerTwoName,
    ]).then(function(players) {
      console.log(players)
      if (players) {
        this.setState(function () {
          return {
            winner: players[0],
            loser: players[1],
            error: null,
            loading: false,
          }
        })
      } else {
        this.setState(function () {
          return {
            error: 'Looks like there was an error. Check that both users exist on Github',
            loading: false,
          }
        })
      }
    }.bind(this))
  }
  render() {
    const error = this.state.error
    const winner = this.state.winner
    const loser = this.state.loser
    const loading = this.state.loading

    // loading...
    if (loading) {
      return (
        <p>Loading</p>
      )
    }

    // error!
    if (error) {
      return (
        <div>
          <p>{'error!'}</p>
          <p>{this.state.error}</p>
          <Link to='/battle'>Reset</Link>
        </div>
      )
    }

    console.log(this.state)
    return (
      <div>
        <div className='row'>
          {/*{JSON.stringify(this.state)}*/}
          <Player
            label='Winner'
            score={winner.score}
            profile={winner.profile}
          />
          <Player
            label='Loser'
            score={loser.score}
            profile={loser.profile}
          />
        </div>
        <div className='row'>
          <Link className='button' to='/battle'>Another Battle!</Link>
        </div>
      </div>

    )
  }
}

module.exports = Results