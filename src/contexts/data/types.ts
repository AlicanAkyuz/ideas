import { GetUniversesApiResponseT } from 'types/api/getUniverses'
import { GetStarsApiResponseT } from 'types/api/getStars'

export type InitialState = {
  universes: GetUniversesApiResponseT | undefined
  stars: GetStarsApiResponseT | undefined
}

type Universes = {
  universes: GetUniversesApiResponseT | undefined
}

type Stars = {
  stars: GetStarsApiResponseT | undefined
}

// action types
export enum DataAction {
  SET_UNIVERSES = 'SET_UNIVERSES',
  SET_STARS = 'SET_STARS',
}

// eslint-disable-next-line
type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? { type: Key }
    : {
        type: Key
        payload: M[Key]
      }
}

export type DataActions = ActionMap<DataPayload>[keyof ActionMap<DataPayload>]

export type DataPayload = {
  [DataAction.SET_UNIVERSES]: Universes
  [DataAction.SET_STARS]: Stars
}
