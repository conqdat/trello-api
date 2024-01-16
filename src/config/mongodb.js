/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */
// 035uENtaHHBenwsG

const MONGO_URI = env.MONGODB_URI

const DATABASE_NAME = env.DATABASE_NAME

import { MongoClient, ServerApiVersion } from 'mongodb'
import { env } from './environment'

let trelloDb = null

const mongoClientInstance = new MongoClient(MONGO_URI, {
  useNewUrlParser: true, // Add this line
  useUnifiedTopology: true // Add this line
  // version: ServerApiVersion.v1,
  // strict: true,
  // deprecationErrors: true
})

export const CONNECT_DB = async () => {
  await mongoClientInstance.connect()
  trelloDb = mongoClientInstance.db(DATABASE_NAME)
}

export const GET_DB = () => {
  if (!trelloDb) {
    throw new Error('GET_DB_ERROR')
  }
  return trelloDb
}

export const CLOSE_DB = async () => {
  await mongoClientInstance.close()
}
