/**
 * getEnvironment provides easy access to all env variables
 * */

function getEnvironment(): {
  apiRoot: string
} {
  return {
    apiRoot: process.env.API_ROOT,
  }
}

export default getEnvironment
