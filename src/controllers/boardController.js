import { StatusCodes } from 'http-status-codes'

const createNew = async (req, res, next) => {
  try {
    res.status(StatusCodes.CREATED).json({
      message:
        'Board API from controller is running normally with GET methods in createNew function.'
    })
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: error.message
    })
    next(error)
  }
}

export const boardController = { createNew }
