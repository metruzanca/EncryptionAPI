import { NowRequest, NowResponse } from '@vercel/node'
import { decryptDecoded } from '../utils'

export default (request: NowRequest, response: NowResponse) => {
  const { message = null, key = process.env.SYMMETRIC_KEY } = request.query
  try {
    if(message === null) throw "message parameter required for decryption"
    let encrypted = decryptDecoded(message.toString(), key!.toString())
    response.status(200).send(encrypted.toString()) 
  } catch (error) {
    response.status(400).send("400 Malformed Request: " + error) 
  }
}
