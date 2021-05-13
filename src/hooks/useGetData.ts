/**
 * useGetData hook provides a consistent GET clients for top level clients
 * returns loading, error, and data state
 * */

// libs
import { useState, useEffect } from 'react'
import axios from 'axios'
import axiosRetry from 'axios-retry'
// utils
import getEnvironment from 'utils/getEnvironment'

function useGetData<T>(
  path: string,
  deps: React.DependencyList,
  retry = 3,
): {
  data: T | undefined
  error: Error | undefined
  isLoading: boolean
} {
  // return states
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState<T | undefined>()
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
          setData(res.data)
        })
        .catch((e) => {
          if (unmounted) return
          fetching = false
          setIsLoading(false)
          setError(e)
        })
    }

    const cleanup = () => {
      unmounted = true
      if (fetching) {
        axios.CancelToken.source()
      }
    }

    return cleanup
    // eslint-disable-next-line
  }, deps)

  return {
    data,
    error,
    isLoading,
  }
}

export default useGetData
