import { encrypt, decryptDecoded } from './crypto'
import { getNow } from './dateTime'

export interface TimeLock {
  message:string,
  release:Date,
  timeZoneOffset:number,
}

export function timeLock(lock:TimeLock){
  if(process.env.SYMMETRIC_KEY){
    return encrypt(JSON.stringify(lock), process.env.SYMMETRIC_KEY)
  }
  throw "Encryption key was not set on the backend, contact author"
}

export function checkLock(encrypted:string){
  if(process.env.SYMMETRIC_KEY == undefined)
    throw "Encryption key was not set on the backend, contact author"
  const lock = decodeTimeLock(encrypted, process.env.SYMMETRIC_KEY)
  const now = getNow(lock.timeZoneOffset) 
  if(lock.release.getTime() >= now.getTime()){
    return lock.message
  }
  throw `Still locked until ${lock.release}`
}

export function decodeTimeLock(encrypted:string, key:string): TimeLock{
  return JSON.parse(decryptDecoded(encrypted, key))
}