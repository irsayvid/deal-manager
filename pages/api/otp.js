import sgMail from '@sendgrid/mail'
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// credits to github copilot :)
const generate6DigitOtp = () => {
  return Math.floor(100000 + Math.random() * 900000)
}

/**
 * @param {import('next').NextApiRequest}  req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body

    if (!email || email.trim() === '') {
      return res.status(400).json({ error: 'Email is required' })
    }

    const Otp = generate6DigitOtp()

    const msg = {
      to: email,
      from: 'sairaj2119@gmail.com',
      subject: 'OTP for Deal Manager',
      text: 'This OTP is for your Deal Manager account Login',
      html: `Your OTP is <strong>${Otp}</strong>`,
    }

    try {
      const mailResp = await sgMail.send(msg)
      console.log(mailResp)
      res.status(200).json({ success: true })
    } catch (err) {
      res.status(500).json({ error: err.message })
      console.error(err)
    }
  }
}
