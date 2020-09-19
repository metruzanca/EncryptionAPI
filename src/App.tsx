import React, { useState } from 'react';
import { Request } from 'components/Request/Request'


function App() {
  
  const [offset, setOffset] = useState("0")
  const [encryptMessage, setEncryptMessage] = useState("")
  const [decryptMessage, setDecryptMessage] = useState("")

  const [display, setDisplay] = useState("")

  return (
    <div className="App">
      <div>
        <h2>Get Time with offset</h2>
        <Request url="/api/now/" setResponse={(e)=>setDisplay(new Date(e).toString())} path={offset}/>
        <label htmlFor="offset">offset</label>
        <input name="offset" type="number" value={offset} onChange={(e)=>setOffset(e.target.value)}/>
      </div>
      <div>
        <h2>Encrypt</h2>
        <Request url="/api/encrypt/" setResponse={setDisplay} JSONBody={{message:encryptMessage}}/>
        <label htmlFor="offset">Encryption Message</label>
        <input name="offset" type="text" value={encryptMessage} onChange={(e)=>setEncryptMessage(e.target.value)}/>
      </div>
      <div>
        <h2>Decrypt</h2>
        <Request url="/api/decrypt/" setResponse={setDisplay} JSONBody={{message:decryptMessage}}/>
        <label htmlFor="offset">Decryption Message</label>
        <input name="offset" type="text" value={decryptMessage} onChange={(e)=>setDecryptMessage(e.target.value)}/>
      </div>
      <textarea value={display} style={{width:500, height:60}}/>
    </div>
  );
}

export default App;
