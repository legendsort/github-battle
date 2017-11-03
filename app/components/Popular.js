const React = require('react')


class Popular extends React.Component {

  // Set default state here
  constructor(props) {
    super(props)
    this.state = {
      selectedLanguage: 'All'
    }
    this.updateLanguage = this.updateLanguage.bind(this)
  }

  // handle stuff
  updateLanguage(lang) {
    this.setState(function () {
      return {
        selectedLanguage: lang
      }
    })
  }

  // stateless rendering
  render() {
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']
    // console.log('Up Here!', this)
    return (
      <div>
        <ul className='languages'>
          <p>Selected language: {this.state.selectedLanguage}</p>
          {languages.map(function(lang) {
            // console.log('Down Here!', this)
            return (
              <li key={lang} onClick={this.updateLanguage.bind(null, lang)}>
                {lang}
              </li>
            )
          }, this)}
        </ul>
      </div>
    )
  }

}

module.exports = Popular