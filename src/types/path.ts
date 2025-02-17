import { Router } from "express"

export interface Path {
  router: Router
  path: string
}