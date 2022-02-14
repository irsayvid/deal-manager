import { db } from '../../../prisma'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

/**
 * @param {import('next').NextApiRequest}  req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler(req, res) {
  const { email, password } = req.body

  const dealerUser = await db.dealer.findFirst({
    where: {
      email,
    },
  })

  const driverUser = await db.driver.findFirst({
    where: {
      email,
    },
  })

  if (!dealerUser && !driverUser) {
    return res.status(400).json({
      error: 'User does not exist',
    })
  }

  if (dealerUser && !driverUser) {
    if (!bcrypt.compareSync(password, dealerUser.password)) {
      return res.status(400).json({
        error: 'Password is incorrect',
      })
    }

    const token = jwt.sign(
      {
        user: {
          ...dealerUser,
          type: 'dealer',
        },
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '1d',
      }
    )
    res.status(200).json({ token })
  }
  if (!dealerUser && driverUser) {
    if (!bcrypt.compareSync(password, driverUser.password)) {
      return res.status(400).json({
        error: 'Password is incorrect',
      })
    }

    const token = jwt.sign(
      {
        user: {
          ...driverUser,
          type: 'driver',
        },
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '1d',
      }
    )
    res.status(200).json({ token })
  }
}
