import React, { } from 'react'
// import './Parameter.css'

interface QueryParam{
  type: "query"
  value:[string, string]
}

interface JsonParam{
  type:"json"
  value:string // todo, this is the most complex one
}

interface PathParam{
  type:"path"
  value:string
}

type ParameterType = QueryParam | JsonParam | PathParam

interface ParameterProps {
  payload:ParameterType
}

export const Parameter: React.FC<ParameterProps> = ({
  payload
}) => {
  switch(payload.type){
    case "query": {
      return <QueryParam/>
    }
    case "json": {
      return <JsonParam/>
    }
    case "path": {
      return <PathParam data={payload.value}/>
    }
  }
}


interface QueryParamProps {}

export const QueryParam: React.FC<QueryParamProps> = () => {
  return (
    <div>I am QueryParam</div>
  ) 
}

interface JsonParamProps {
}

export const JsonParam: React.FC<JsonParamProps> = ({
  
}) => {
  return (
  <div>I am JsonParam</div>
  ) 
}

interface PathParamProps {
  data:any
}

export const PathParam: React.FC<PathParamProps> = ({
  data
}) => {
  return (
    <div>I am PathParam - {data}</div>
  ) 
}