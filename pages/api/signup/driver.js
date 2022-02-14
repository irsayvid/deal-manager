import { db } from '../../../prisma'
/**
 * @param {import('next').NextApiRequest}  req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const {
      fullName,
      email,
      password,
      age,
      truckNumber,
      mobile,
      capacity,
      transporterName,
      drivingExperience,
      routes,
    } = req.body

    const user = await db.driver.findFirst({
      where: { email },
    })

    if (user) {
      return res.status(400).json({
        error: 'User already exists',
      })
    }

    try {
      const driver = await db.driver.create({
        data: {
          fullName,
          email,
          password,
          age,
          truckNumber,
          mobile,
          capacity,
          transporterName,
          drivingExperience,
        },
      })
      const finalRoutes = await db.route.createMany({
        data: Object.values(routes).map((route) => ({
          ...route,
          driverId: driver.id,
        })),
      })

      res.status(200).json({ driver, routes: finalRoutes })
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: 'datbase thing if gone wrong' })
    }
  }
  if (req.method === 'GET') {
    res.status(200).json({ foo: 'bar' })
  }
}
