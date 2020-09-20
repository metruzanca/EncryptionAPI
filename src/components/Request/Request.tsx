import React, { } from 'react'
import { Parameter } from 'components'
import './Request.css'

type QueryParams = [string, string][]

interface RequestProps {
  name:string
  url:string
  setResponse?:(e:any)=>void
  JSONBody?:any
  params?:QueryParams
  path?:string
  method?:string
}

function stringifyParams(url:string, params:QueryParams){
  for (let i = 0; i < params.length; i++) {
    if(i === 0) url+="?"
    url+= `${params[i][0]}="${params[i][1]}"`
    if(i+1 !== params.length) url+=("&")
  }
  return url
}

interface APICall {
  url:string,
  params:QueryParams|undefined,
  method:string,
  JSONBody:any,
  path:string,
  callback:(e:any)=>void
}

function handleAPICall({
  url,
  params,
  method,
  JSONBody,
  path,
  callback
}: APICall){
  if(path !== undefined) url+=path
  
  if(params !== undefined) url = stringifyParams(url, params)

  fetch(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method,
    body: JSON.stringify(JSONBody)
  })
    .then(data => data.json())
    .then(json => callback(json))
}

export const Request: React.FC<RequestProps> = ({
  url,
  name,
  setResponse = () => {},
  JSONBody,
  params = undefined,
  path = '',
  method = 'GET'
}) => {  

  return (
    <div>
      <h2>{name}</h2>
      <div className="method">{method}{":"}</div>
      <div className="url">{url}</div>
      <button onClick={() => handleAPICall({url, path, method, JSONBody, params, callback: setResponse})}>Send</button>
      <div>
        <h4>parameters</h4>
        {/* {path !== '' && 
          <Parameter payload={{type:"path", value:path}}/>
        }
        {params !== undefined && params.map(param => 
          <Parameter payload={{type:"query", value:param}}/>
        )} */}

      </div>
    </div>
  ) 
}