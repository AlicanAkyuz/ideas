/**
 * useGetData hook provides a consistent GET clients for top level clients
 * returns loading, error, and data state
 * */

// libs
import { useState, useEffect } from 'react'
import axios from 'axios'
import axiosRetry from 'axios-retry'
// types
import { GetUniversesApiResponseT } from 'types/api/getUniverses'
import { GetStarsApiResponseT } from 'types/api/getStars'
// utils
import getEnvironment from 'utils/getEnvironment'

// eslint-disable-next-line
function useGetData<T>(
  path: string,
  deps: React.DependencyList,
  retry = 3,
): {
  universesData: GetUniversesApiResponseT | undefined
  starsData: GetStarsApiResponseT | undefined
  error: Error | undefined
  isLoading: boolean
} {
  // return states
  const [universesData, setUniversesData] = useState<GetUniversesApiResponseT | undefined>()
  const [starsData, setStarsData] = useState<GetStarsApiResponseT | undefined>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | undefined>()

  // create axios client and defined base URL & retry config
  const client = axios.create({
    baseURL: getEnvironment().apiRoot,
  })

  axiosRetry(client, {
    retries: retry,
  })

  useEffect(() => {
    let unmounted = false
    let fetching = false

    if (path) {
      fetching = true
      setIsLoading(true)

      // initiate GET client
      client
        .get(path, {})
        .then((res) => {
          if (unmounted) return
          fetching = false
          setIsLoading(false)

          if (path === getEnvironment().universesApiPath) {
            setUniversesData(res.data)
          }
          if (path === getEnvironment().starsApiPath) {
            setStarsData(res.data)
          }
        })
        .catch((e) => {
          if (unmounted) return
          fetching = false
          setIsLoading(false)
          setError(e)
        })
    }

    return () => {
      unmounted = true
      if (fetching) {
        axios.CancelToken.source()
      }
    }
    // eslint-disable-next-line
  }, deps)

  return {
    universesData,
    starsData,
    error,
    isLoading,
  }
}

export default useGetData
