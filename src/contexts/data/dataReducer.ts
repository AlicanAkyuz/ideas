import { InitialState, DataAction, DataActions } from './types'
import { GetUniversesApiResponseT } from 'types/api/getUniverses'
import { GetStarsApiResponseT } from 'types/api/getStars'
const { SET_UNIVERSES, SET_STARS } = DataAction

export default function dataReducer(
  dataState: InitialState,
  action: DataActions,
): {
  universes: GetUniversesApiResponseT | undefined
  stars: GetStarsApiResponseT | undefined
} {
  switch (action.type) {
    case SET_UNIVERSES:
      return {
        ...dataState,
        universes: action.payload.universes,
      }
    case SET_STARS:
      return {
        ...dataState,
        stars: action.payload.stars,
      }
    default:
      return dataState
  }
}
