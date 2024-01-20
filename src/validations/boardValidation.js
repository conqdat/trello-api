import Joi from 'joi'
import { StatusCodes } from 'http-status-codes'
import ApiError from '~/utils/ApiError'

const createNew = async (req, res, next) => {
  const correctCondition = Joi.object({
    title: Joi.string().required().min(3).max(50).strict().messages({
      'string.base': 'Title should be a type of text',
      'string.empty': 'Title cannot be an empty field',
      'string.min': 'Title should have a minimum length of {#limit}',
      'string.max': 'Title should have a maximum length of {#limit}',
      'any.required': 'Title is a required field'
    }),
    description: Joi.string().required().min(3).max(50).strict().messages({
      'string.base': 'Description should be a type of text',
      'string.empty': 'Description cannot be an empty field',
      'string.min': 'Description should have a minimum length of {#limit}',
      'string.max': 'Description should have a maximum length of {#limit}',
      'any.required': 'Description is a required field'
    })
  })

  try {
    await correctCondition.validateAsync(req.body, { abortEarly: false }) // abortEarly: false => return all errors
    next() // next() => go to the next middleware to handle the request
  } catch (error) {
    next(new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, error.message))
  }
}

export const boardValidation = { createNew }
