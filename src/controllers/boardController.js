import { StatusCodes } from 'http-status-codes'
import ApiError from '~/utils/ApiError'

const createNew = async (req, res, next) => {
  try {
    // res.status(StatusCodes.CREATED).json({
    //   message:
    //     'Board API from controller is running normally with GET methods in createNew function.'
    // })
    throw new ApiError(
      StatusCodes.BAD_GATEWAY,
      'This is an error from boardController.js'
    )
  } catch (error) {
    // res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    //   errors: error.message
    // })
    next(error)
  }
}

export const boardController = { createNew }
