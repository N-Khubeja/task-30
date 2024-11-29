import React from 'react'
import { Icard } from '../../interface/Card.interface'
import SimpleCard from './SimpleCard'

interface IuserCard extends Icard {
    email:string
    username:string
}

const UserCard:React.FC<IuserCard> = ({email,username, ...rest}) => {
  return (
    <div>
        <h3>{email}</h3>
        <p>{username}</p>
        <SimpleCard {...rest}/>
    </div>
  )
}

export default UserCard