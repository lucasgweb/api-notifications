export interface ICreateEmailNotificationDTO {
  sender: string
  content: string
  recipient: string
  status: 'FAILED' | 'DELIVERED' | 'SENT' | 'PENDING'
  subject: string
  sendAt?: Date | null | undefined
}
