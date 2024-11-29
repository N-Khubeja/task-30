import  { useEffect, useState } from 'react'
import { Iuser } from '../interface/User.interface'
import { Getusers } from '../api/users/Getusers'

const useGetusers = () => {
    const [users,setusers] = useState<Iuser[]>([])

    useEffect(() => {
        Getusers()
        .then((data) => setusers(data))
        .catch((err) => console.log(err))
    },[])

  return {users}
}

export default useGetusers