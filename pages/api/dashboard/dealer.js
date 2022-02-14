import { db } from '../../../prisma'
import jwtDecode from 'jwt-decode'

/**
 * @param {import('next').NextApiRequest}  req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler(req, res) {
  const token = req.headers.authorization
  if (!token.startsWith('Bearer ')) {
    return res.status(401).json({
      error: 'Unauthorized',
    })
  }
  const user = jwtDecode(token.split(' ')[1]).user

  if (!user) {
    return res.status(401).json({
      error: 'Unauthorized',
    })
  }

  const resp = await db.route.findMany({
    where: {
      OR: [
        {
          fromCity: user.city,
        },
        {
          toCity: user.city,
        },
        {
          fromState: user.state,
        },
        {
          toState: user.state,
        },
      ],
    },
    include: {
      driver: true,
    },
  })

  console.log(resp)

  res.status(200).json({ results: resp })
}
