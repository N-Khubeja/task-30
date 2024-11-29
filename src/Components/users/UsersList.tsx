import React from 'react'
import { Iuser } from '../../interface/User.interface'
import UserItem from './UserItem'

interface IUsersList {
    users:Iuser[]
}

const UsersList:React.FC<IUsersList> = ({users}) => {
    return (
        <ul>
            {users.map((user) => <UserItem key={user.id} user={user}/>)}
        </ul>
      )
}

export default UsersList