import React from 'react'
import { Iuser } from '../../interface/User.interface'

interface IUserItem {
    user:Iuser
}

const UserItem:React.FC<IUserItem> = ({user:{name}}) => {
  return (
    <div>{name}</div>
  )
}

export default UserItem