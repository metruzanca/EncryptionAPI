import React, { useState } from 'react';
import { Request } from 'components/Request/Request'


function App() {
  
  const [offset, setOffset] = useState("0")
  const [encryptMessage, setEncryptMessage] = useState("")
  const [decryptMessage, setDecryptMessage] = useState("")

  const [display, setDisplay] = useState("")

  return (
    <div>
      <h1>Welcome to my very ugly API docs</h1>
      <div className="wrapper">
        <Request 
          name="Get Time with offset"
          url="/api/now/"
          setResponse={(e)=>setDisplay(new Date(e).toString())}
          path={offset}
          method="POST"
        />
        <label htmlFor="offset">offset</label>
        <input name="offset" type="number" value={offset} onChange={(e)=>setOffset(e.target.value)}/>
      </div>
      <div className="wrapper">
        <Request
          name="Encrypt"
          url="/api/encrypt/"
          setResponse={setDisplay}
          JSONBody={{message:encryptMessage}}
          method="POST"
        />
        <label htmlFor="offset">Encryption Message</label>
        <input name="offset" type="text" value={encryptMessage} onChange={(e)=>setEncryptMessage(e.target.value)}/>
      </div>
      <div className="wrapper">
        <Request
          name="Decrypt"
          url="/api/decrypt/"
          setResponse={setDisplay}
          JSONBody={{message:decryptMessage}}
          method="POST"
        />
        <label htmlFor="offset">Decryption Message</label>
        <input name="offset" type="text" value={decryptMessage} onChange={(e)=>setDecryptMessage(e.target.value)}/>
      </div>
      <h3>Result</h3>
      <textarea value={display} style={{width:500, height:60}}/>
    </div>
  );
}

export default App;
