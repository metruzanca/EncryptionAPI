import React, { useState } from 'react';
import { Request } from 'components/Request/Request'


function App() {
  
  const [offset, setOffset] = useState("0")

  function display(response:string){
    console.log(new Date(response).toUTCString())
  }

  return (
    <div className="App">
      <Request url="/api/now/" setResponse={display} path={offset}/>
      <label htmlFor="offset">offset</label>
      <input name="offset" type="number" value={offset} onChange={(e)=>setOffset(e.target.value)}/>
    </div>
  );
}

export default App;
