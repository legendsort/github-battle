const axios = require('axios')

// See README for Github oAuth API Client access instruction
const githubAPIConfig = require('../../secrets/githubAPIConfig')
const id = githubAPIConfig.id
const sec = githubAPIConfig.secret

// See React Fundamentals course video on Axios, Promises, and the Github API.
const params = `?client_id=${id}&client_secret=${sec}`

// axios returns promises

// ========== GitHub Battle =====================

// Get user's github data
function getProfile(username) {
  return axios.get(`https://api.github.com/users/${username}${params}`)
    .then((user) => (user.data))
}

// Get user's github repos
function getRepos(username) {
  return axios.get(`https://api.github.com/users/${username}/repos${params}&per_page=100`)
    .then((user) => user.data)
}

// Get user's total Github repos's stars
function getStarCount(repos) {
  return repos.reduce((count, {stargazers_count}) => (count + stargazers_count), 0)
}

// compute user's score (based on toy algo)
function calculateScore({followers}, repos) {
  return (followers * 3) + getStarCount(repos)
}

function handleError(error) {
  console.warn(error)
  return null
}

// Compose mini functions into a bigger one.
function getUserData(player) {
  return axios.all([
    getProfile(player),
    getRepos(player)
  ]).then(([profile, repos]) => ({
      profile,
      score: calculateScore(profile, repos)
  }))
}

// who is the winner (sort descending score). Player 0 is winner. Player 1 is loser.
function sortPlayers(players) {
  return players.sort((a,b) => (b.score - a.score))
}

// battle!
function battle(players) {
  return axios.all(players.map(getUserData))
    .then(sortPlayers)
    .catch(handleError)
}

// ========== get popular GitHub repository =====================
function fetchPopularRepos (language) {
  const encodedURI = window.encodeURI(
    'https://api.github.com/search/repositories?q=stars:>1+language:' +
    language + '&sort=stars&order=desc&type=Repositories')

  return axios.get(encodedURI)
    .then(function (response) {
      return response.data.items
    })
}


module.exports = {
  battle: battle,
  fetchPopularRepos: fetchPopularRepos,
}