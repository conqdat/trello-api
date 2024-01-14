/* eslint-disable no-console */
/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

import express from 'express'
import exitHook from 'async-exit-hook'
import { CONNECT_DB, GET_DB, CLOSE_DB } from '~/config/mongodb'

const START_SERVER = () => {
  const app = express()

  const hostname = 'localhost'
  const port = 8017

  app.get('/', (req, res) => {
    res.end('<h1>Hello World!</h1><hr>')
  })

  app.listen(port, hostname, () => {
    // eslint-disable-next-line no-console
    console.log(`Hello Trung Quan Dev, I am running at ${hostname}:${port}/`)
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
