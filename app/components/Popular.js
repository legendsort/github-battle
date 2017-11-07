// npm libs
const React = require('react')
const PropTypes = require('prop-types')

// our libs
const api = require('../utils/api')
const Loading = require('./Loading')


// Stateless Functional Component
function SelectLanguage(props) {
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']
  // console.log(this.props)
  return (
    <ul className='languages'>
      {languages.map(function(lang) {
        return (
          <li
            key={lang}
            onClick={props.onSelect.bind(null, lang)}
            style={lang === props.selectedLanguage ? {color: '#d0021b'} : null}>
            {lang}
          </li>
        )
      }, this)}
    </ul>
  )
}

SelectLanguage.PropTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
}


function ReposGrid (props) {
  return (
    <ul className='popular-list'>
      {props.repos.map(function(repo, index) {
        return (
          <li key={repo.name} className='popular-item'>
            <div className='popular-rank'>
              #{index + 1}
            </div>

            <ul className='space-list-items'>
              <img
                className='avatar'
                src={repo.owner.avatar_url}
                alt={'Avatar for ' + repo.owner.login}
              />
              <li>
                <a href={repo.html_url}>{repo.name}</a>
              </li>
              <li>
                @{repo.owner.login}
              </li>
              <li>
                {repo.stargazers_count} stars
              </li>
            </ul>
          </li>

        )
      })}
    </ul>
  )
}

ReposGrid.PropTypes = {

}


class Popular extends React.Component {

  // Set default state here
  constructor(props) {
    super(props)
    this.state = {
      selectedLanguage: 'All',
      repos: null,
    }
    this.updateLanguage = this.updateLanguage.bind(this)
  }

  componentDidMount() {
    // Use this block to make the transition "look" longer to run than it is
    // setTimeout(function() {
    //   console.log('sleep starts')
    //   this.updateLanguage(this.state.selectedLanguage)
    // }.bind(this), 1000);

    this.updateLanguage(this.state.selectedLanguage)
  }

  componentWillUnmount() {

  }

  // handle stuff
  updateLanguage(lang) {
    this.setState(function () {
      return {
        selectedLanguage: lang,
        repos: null,
      }
    })

    // AJAX
    api.fetchPopularRepos(lang)
      .then(function(repos) {
        // console.log(repos)
        this.setState(function () {
          return {
            repos: repos,
          }
        })
      }.bind(this))

  }

  // stateless rendering
  render() {
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
        {/*{JSON.stringify(this.state.repos, null, 2)}*/}

        {!this.state.repos
          ? <Loading text={"woo saa"} speed={100} />
          : <ReposGrid repos={this.state.repos}/>}


      </div>
    )
  }

}

module.exports = Popular