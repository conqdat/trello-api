/* eslint-disable no-console */
/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

import express from 'express'
import exitHook from 'async-exit-hook'
import { CONNECT_DB, GET_DB, CLOSE_DB } from '~/config/mongodb'
import { env } from '~/config/environment'
import { APIs_V1 } from '~/routes/v1'

const START_SERVER = () => {
  const app = express()

  app.use('/api/v1', APIs_V1)

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    // eslint-disable-next-line no-console
    console.log(
      `Hello ${env.AUTHOR} Dev, I am running at ${env.APP_HOST}:${env.APP_PORT}/`
    )
  })

  exitHook((signal) => {
    console.log('App exit...', signal)
    CLOSE_DB()
  })
}

CONNECT_DB()
  .then(() => {
    console.log('Connected successfully to MongoDB server')
  })
  .then(() => {
    START_SERVER()
    console.log('Start server ...')
  })
  .catch((error) => {
    console.log('Connect failure to MongoDB server')
    console.error(error)
    process.exit(0)
  })
