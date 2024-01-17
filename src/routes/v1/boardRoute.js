/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */
import express, { Router } from 'express'
import { StatusCodes } from 'http-status-codes'

const router = express.Router()

Router.route('/')
  .get((req, res) => {
    res.status(StatusCodes.OK).json({
      message: 'Board API is running normally with GET methods'
    })
  })
  .post((req, res) => {
    res.status(StatusCodes.CREATED).json({
      message: 'Board API is running normally with POST methods'
    })
  })

export const boardRoutes = router
