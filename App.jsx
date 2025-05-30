import { useState , useEffect } from 'react'

function advice() {
  const[output , setOutput] = useState("");

  const grtAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(data => setOutput(data.slip.advice))
    .catch(()=>{
      setOutput("Something went wrong...!");
    })
  }
  useEffect(()=>{
    grtAdvice()
  },[])

  return (
    <>
    <div className='app'>
      <h1>💡Advice Generator</h1>
      <div className='card'>
        <p>{output}</p>
        <button onClick={grtAdvice}>New Adivce</button>
      </div>
    </div>
    </>
  )
}

export default advice;
