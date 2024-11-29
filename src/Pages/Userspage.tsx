import UsersList from '../Components/users/UsersList'
import useGetusers from '../Hooks/useGetusers'

const Userspage:React.FC = () => {
    const {users} = useGetusers()
  return <UsersList users={users}/>
}

export default Userspage