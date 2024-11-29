import { Group, Input, InputAddon } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
// import { InputGroup } from '../ui/input-group'

interface IMyinput {
    type:string
    placeholder:string
    variant: any
    leftaddon?:string | ReactNode
    rightaddon?:string | ReactNode
}

const Myinput:React.FC<IMyinput> = ({type, placeholder, variant,leftaddon,rightaddon}) => {
  return ( 
    // <InputGroup>
    //  {leftaddon &&  <InputAddon>{leftaddon}</InputAddon>}
    //   <Input type={type} placeholder={placeholder} variant={variant}/>
    // </InputGroup>
    <Group>
      {leftaddon &&  <InputAddon>{leftaddon}</InputAddon>}
       <Input type={type} placeholder={placeholder} variant={variant}/>
       {rightaddon && <InputAddon>{rightaddon}</InputAddon>}
    </Group>
  )
}

export default Myinput