// npm libs
const React = require('react')
const PropTypes = require('prop-types')

// our libs
const api = require('../utils/api')
const Loading = require('./Loading')


// Stateless Functional Component
function SelectLanguage({onSelect, selectedLanguage}) {
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']
  // console.log(this.props)
  return (
    <ul className='languages'>
      {languages.map((lang) => (
        <li
          key={lang}
          onClick={onSelect.bind(null, lang)}
          style={lang === selectedLanguage ? {color: '#d0021b'} : null}>
          {lang}
        </li>
      ))}
    </ul>
  )
}
SelectLanguage.PropTypes = {
  onSelect: PropTypes.func.isRequired,
  selectedLanguage: PropTypes.string.isRequired,
}


function ReposGrid ({repos}) {
  return (
    <ul className='popular-list'>
      {repos.map(({ name, owner, stargazers_count, html_url }, index) => (
        <li key={name} className='popular-item'>
          <div className='popular-rank'>
            #{index + 1}
          </div>

          <ul className='space-list-items'>
            <img
              className='avatar'
              src={owner.avatar_url}
              alt={'Avatar for ' + owner.login}
            />
            <li>
              <a href={html_url}>{name}</a>
            </li>
            <li>
              @{owner.login}
            </li>
            <li>
              {stargazers_count} stars
            </li>
          </ul>
        </li>
      ))}
    </ul>
  )
}
ReposGrid.PropTypes = {
  repos: PropTypes.array.isRequired,
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
    this.updateLanguage(this.state.selectedLanguage)
  }

  // handle stuff
  updateLanguage(lang) {
    this.setState(() =>({
      selectedLanguage: lang,
      repos: null,
    }))

    // AJAX
    api.fetchPopularRepos(lang)
      .then((repos) => {
        this.setState(() => ({repos: repos,}))
      })
  }

  // stateless rendering
  render() {
    return (
      <div>
        <SelectLanguage
          onSelect={this.updateLanguage}
          selectedLanguage={this.state.selectedLanguage}
        />
        {/*{JSON.stringify(this.state.repos, null, 2)}*/}

        {this.state.repos
          ? <ReposGrid repos={this.state.repos}/>
          : <Loading text={"woo saa"} speed={100} />}
      </div>
    )
  }

}

module.exports = Popular