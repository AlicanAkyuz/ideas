/**
 * getEnvironment provides easy access to all env variables
 * */

function getEnvironment(): {
  apiRoot: string
  universesApiPath: string
  starsApiPath: string
} {
  return {
    apiRoot: 'http://localhost:3000',
    universesApiPath: '/universes',
    starsApiPath: '/stars',
  }
}

export default getEnvironment
