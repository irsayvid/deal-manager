import { db } from '../../../prisma'
import bcrypt from 'bcryptjs'

/**
 * @param {import('next').NextApiRequest}  req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const {
      password,
      fullName,
      email,
      mobile,
      natureOfMaterial,
      quantity,
      weight,
      state,
      city,
    } = req.body

    const user = await db.dealer.findFirst({
      where: { email },
    })

    const driverUser = await db.driver.findFirst({
      where: { email },
    })

    if (user || driverUser) {
      return res.status(400).json({
        error: 'User already exists',
      })
    }

    const dealer = await db.dealer.create({
      data: {
        city,
        email,
        fullName,
        mobile,
        natureOfMaterial,
        password: bcrypt.hashSync(password, 10),
        quantity,
        state,
        weight,
      },
    })

    res.status(200).json({ dealer })
  }
  if (req.method === 'GET') {
    res.status(200).json({ foo: 'bar' })
  }
}
