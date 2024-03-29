import Joi from 'joi'
import { GET_DB } from '~/config/mongodb'

const BOARD_COLLECTION_NAME = 'boards'
const BOARD_COLLECTION_SCHEMA = Joi.object({
  title: Joi.string().required().min(3).max(50).trim().strict,
  description: Joi.string().required().min(3).max(50).trim().strict,
  slug: Joi.string().required().min(3).trim().strict,
  columnOrderIds: Joi.array().items(Joi.string()).default([]),
  createdAt: Joi.date().timestamp('javascript').default(Date.now()),
  updatedAt: Joi.date().timestamp('javascript').default(null),
  _destroy: Joi.boolean().default(false)
})

// const validateBeforeCreateNew = async (data) => {
//   return await BOARD_COLLECTION_SCHEMA.validateAsync(data, {
//     abortEarly: false
//   })
// }

const createNew = async (data) => {
  try {
    // const validData = await validateBeforeCreateNew(data)
    return await GET_DB().collection(BOARD_COLLECTION_NAME).insertOne({ data })
  } catch (error) {
    throw new Error(error)
  }
}

const findOneById = async (id) => {
  try {
    return await GET_DB().collection(BOARD_COLLECTION_NAME).findOne({ _id: id })
  } catch (error) {
    throw new Error(error)
  }
}

const getDetail = async (id) => {
  try {
    return await GET_DB().collection(BOARD_COLLECTION_NAME).findOne({ _id: id })
  } catch (error) {
    throw new Error(error)
  }
}

export const boardModel = {
  BOARD_COLLECTION_NAME,
  BOARD_COLLECTION_SCHEMA,
  createNew,
  findOneById,
  getDetail
}
