import { db } from '../../../prisma'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

/**
 * @param {import('next').NextApiRequest}  req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler(req, res) {
  const { email, password } = req.body

  const user = await db.dealer.findFirst({
    where: {
      email,
    },
  })

  if (!user) {
    return res.status(400).json({
      error: 'User does not exist',
    })
  }

  if (!bcrypt.compareSync(password, user.password)) {
    return res.status(400).json({
      error: 'Password is incorrect',
    })
  }

  const token = jwt.sign(
    {
      user: {
        ...user,
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
