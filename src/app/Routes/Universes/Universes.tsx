/**
 * Universes
 * */

// libs
import React, { FC } from 'react'
import useGetData from 'hooks/useGetData'

// TODO
const Universes: FC = () => {
  const { isLoading, error, data } = useGetData('/universes', [], 1)

  if (data) {
    console.log({ data, isLoading, error })
  }

  return (
    <div>
      <h4>UNIVERSES</h4>
    </div>
  )
}

export default Universes
