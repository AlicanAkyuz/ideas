import { InitialState, DataAction, DataActions } from './types'

const { SET_UNIVERSES, SET_STARS } = DataAction

export const dataReducer = (dataState: InitialState, action: DataActions) => {
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
