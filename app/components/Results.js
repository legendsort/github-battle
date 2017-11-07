const React = require('react');
const queryString = require('query-string')
const Link = require('react-router-dom').Link
const api = require('../utils/api')


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
        {JSON.stringify(this.state)}
      </div>
    )
  }
}

module.exports = Results