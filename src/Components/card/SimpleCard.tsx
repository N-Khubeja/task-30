import React from 'react'
import { Icard } from '../../interface/Card.interface'
import { Box } from '@chakra-ui/react'

const SimpleCard:React.FC<Icard> = ({description,title}) => {
  return (
    <Box>
        <h1>{title}</h1>
        <p>{description}</p>
    </Box>
  )
}

export default SimpleCard