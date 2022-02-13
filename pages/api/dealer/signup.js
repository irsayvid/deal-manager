import { db } from '../../../prisma'
/**
 * @param {import('next').NextApiRequest}  req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const {
      username,
      email,
      password,
      mobileNumber,
      materialType,
      weightOfMaterial,
      quantity,
      city,
      state,
    } = req.body

    const user = await db.dealer.findFirst({
      where: { email },
    })

    if (user) {
      return res.status(400).json({
        error: 'User already exists',
      })
    }

    const dealer = await db.dealer.create({
      data: {
        city,
        email,
        materialType,
        mobileNumber,
        password,
        quantity,
        state,
        username,
        weightOfMaterial,
      },
    })

    res.status(200).json({ dealer })
  }
  if (req.method === 'GET') {
    res.status(200).json({ foo: 'bar' })
  }
}
