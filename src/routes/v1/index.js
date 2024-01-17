/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

import express from 'express'

const router = express.Router()

router.use('/status', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'API is running normally.'
  })
})

export const APIs_V1 = router
