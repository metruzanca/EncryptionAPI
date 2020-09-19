import React, { } from 'react'

type QueryParams = [string, string][]

interface RequestProps {
  url:string
  setResponse?:(e:any)=>void
  JSONBody?:any
  params?:QueryParams
  path?:string
}

function stringifyParams(url:string, params:QueryParams){
  for (let i = 0; i < params.length; i++) {
    if(i === 0){
      url+="?"
    }
    url+=(`${params[i][0]}="${params[i][1]}"`)

    if(params.length > 1 && i+1 !== params.length){
      url+=("&")
    }
  }
  return url
}

export const Request: React.FC<RequestProps> = ({
  url,
  setResponse = () => {},
  JSONBody,
  params = undefined,
  path,
}) => {

  function handleAPICall(url:string, params:QueryParams|undefined){
    if(path !== undefined){
      url+=path
    }
    
    if(params !== undefined){
      url = stringifyParams(url, params)
    }

    fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(JSONBody)
    })
      .then(data => data.json())
      .then(json => setResponse(json))
  }

  return (
    <div>
      <a href={url}>{url}</a><button onClick={() => handleAPICall(url, params)}>Send</button>
      <div></div>
    </div>
  ) 
}