export interface GetStarsApiResponseT extends Array<SingleStarT> {}

export interface SingleStarT {
  id: number
  universeId: number
  name: string
  color: string
}
