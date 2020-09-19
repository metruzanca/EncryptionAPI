import { NowRequest, NowResponse } from '@vercel/node'
import { encrypt } from '../utils'

export default (request: NowRequest, response: NowResponse) => {
  const { message = 'Hello World', key = process.env.SYMMETRIC_KEY } = request.body
  try {
    let encrypted = encrypt(message.toString(), key!.toString())
    response.status(200).json(encrypted.toString()) 
  } catch (error) {
    response.status(400).send("400 Malformed Request") 
  }
}
