import nodemailer from 'nodemailer'

interface IEmailServiceProps {
  sender: string
  to: string
  subject: string
  content: string
  html?: string
}

export class EmailService {
  async execute({ content, sender, subject, to, html }: IEmailServiceProps) {
    const transport = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: '2d9973e2359bf2',
        pass: 'd535745c974b39',
      },
    })

    const message = {
      from: sender,
      to,
      subject,
      text: content,
      html,
    }

    try {
      await transport.sendMail(message)
    } catch (error) {
      throw new Error(`Error: ${error}`)
    }
  }
}
