const React = require('react');
const PropTypes = require('prop-types')


// stateless functional component
function PlayerPreview({ avatar, username, children }) {
  return (
    <div>
      <img className='avatar' src={avatar} alt={`Avatar for ${username}`}/>
      <h2 className='username'>{`@${username}`}</h2>
      {children}
    </div>
  )
}
PlayerPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
}


module.exports = PlayerPreview