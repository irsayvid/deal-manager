/**
 * @param {import('next').NextApiRequest}  req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const {
      name,
      mobileNumber,
      materialType,
      weightOfMaterial,
      quantity,
      city,
      state,
    } = req.body

    res.status(200).json({ name: 'John Doe' })
  }
  if (req.method === 'GET') {
    res.status(200).json({ foo: 'bar' })
  }
}
