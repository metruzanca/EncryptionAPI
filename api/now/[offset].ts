import { NowRequest, NowResponse } from '@vercel/node'
import { getNow } from '../../utils'

export default (request: NowRequest, response: NowResponse) => {
  const { offset = '0'} = request.query
  const now = getNow(parseInt(offset.toString()))
  response.status(200).json(now.getTime())
}