import { slugify } from '~/utils/fommatter'
import { boardModel } from '~/models/boardModel'
import { StatusCodes } from 'http-status-codes'

const createNew = async (reqBody) => {
  try {
    const newBoard = {
      ...reqBody,
      slug: slugify(reqBody.title)
    }

    const result = await boardModel.createNew(newBoard)

    return await boardModel.findOneById(result.insertedId)
  } catch (error) {
    throw Error(error)
  }
}

const getDetail = async (id) => {
  try {
    const board = await boardModel.getDetail(id)
    if (!board) throw new Error(StatusCodes.NOT_FOUND, 'Board not found')
    return board
  } catch (error) {
    throw Error(error)
  }
}

export const boardService = {
  createNew,
  getDetail
}
