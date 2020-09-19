import CryptoJS from 'crypto-js'
import { TimeLock } from './timeLock'

export function encrypt(message:string, key:string){
  return CryptoJS.AES.encrypt(message, key);
}

export function decrypt(encrypted:string, key:string){
  return CryptoJS.AES.decrypt(encrypted, key);
}

export function decryptDecoded(encrypted:string, key:string){
  return CryptoJS.AES.decrypt(encrypted, key).toString(CryptoJS.enc.Utf8)
}