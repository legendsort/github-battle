// npm libs
import React from 'react'
import PropTypes from 'prop-types'

// our libs
import { fetchPopularRepos } from '../utils/api'
import Loading from './Loading'


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
  state = {
    selectedLanguage: 'All',
    repos: null,
  }
  componentDidMount = () => {
    this.updateLanguage(this.state.selectedLanguage)
  }
  updateLanguage = (lang) => {
    this.setState(() =>({
      selectedLanguage: lang,
      repos: null,
    }))
    fetchPopularRepos(lang)
      .then((repos) => {
        this.setState(() => ({repos: repos,}))
      })
  }
  render = () => {
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

export default Popular