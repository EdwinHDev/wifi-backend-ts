import { ObjectId } from "mongoose"

export interface IClient {
  _id?: ObjectId
  name: string
  identity: string
  email: string
  phone: string
  age: number
  gender: string
  location?: number[]
  access_point?: string
  operating_system?: string
}