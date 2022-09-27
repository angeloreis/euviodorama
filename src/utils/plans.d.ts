import { Timestamp } from "firebase/firestore/lite"

export interface IPlan {
  name: string
  description: string
  price: number
  active: boolean
  recommend?: boolean
}
