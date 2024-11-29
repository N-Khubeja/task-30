import React, { useState } from 'react'
import Myinput from '../Components/input/Myinput'

const InputPage:React.FC = () => {
  const [show,setshow] = useState(true)

  return (
    <>
    <h1>input page</h1>
    <Myinput type='text' placeholder='outline' variant='outline'/>
    <br />
    <Myinput type='email' placeholder='flushed' variant='flushed'/>
    <br />
    <Myinput type='phone' placeholder='phone' variant='flushed' leftaddon='+995'/>
    <br />
    <Myinput type='phone' placeholder='phone2' variant='flushed' leftaddon='+995'/>
    <br />
    <Myinput type='phone' placeholder='mywebsite' variant='flushed' leftaddon='https://' rightaddon='.com' />
    <br />
    <Myinput type={show ? 'password' : 'text'} placeholder='password' variant='flushed'  rightaddon={<button onClick={() => setshow(prev => !prev)}>{show ? 'show' : 'hide'}</button>} />
    </>
  )
}

export default InputPage