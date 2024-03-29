import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { boardValidation } from '~/validations/boardValidation'
import { boardController } from '~/controllers/boardController'

const Router = express.Router()
Router.route('/')
  .get((req, res) => {
    res.status(StatusCodes.OK).json({
      message: 'Board API is running normally with GET methods'
    })
  })
  .post(boardValidation.createNew, boardController.createNew)

Router.route('/:id').get(boardController.getDetail)

export const boardRoutes = Router
