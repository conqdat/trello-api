import { slugify } from '~/utils/fommatter'
import { boardModel } from '~/models/boardModel'

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

export const boardService = {
  createNew
}
