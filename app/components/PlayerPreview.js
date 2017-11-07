const React = require('react');
const PropTypes = require('prop-types')

// stateless functional component
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
      <button
        className='reset'
        onClick={props.onReset.bind(null, props.id)}>
        Reset
      </button>
    </div>
  )
}
PlayerPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
}


module.exports = PlayerPreview