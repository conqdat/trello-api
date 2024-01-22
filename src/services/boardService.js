import { slugify } from '~/utils/fommatter'

const createNew = async (reqBody) => {
  try {
    const newBoard = {
      ...reqBody,
      slug: slugify(reqBody.title)
    }
    return newBoard
  } catch (error) {
    throw Error(error)
  }
}

export const boardService = {
  createNew
}
