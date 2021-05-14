import { SingleStarT } from './getStars'

export interface GetUniversesApiResponseT extends Array<SingleUniverseT> {}

export interface SingleUniverseT {
  id: number
  maxSize: number
  name: string
  stars?: SingleStarT[]
}
