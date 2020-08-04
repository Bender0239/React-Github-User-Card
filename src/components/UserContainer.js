import React from 'react'
import UserCard from './UserCard'



const UserContainer = props => {
    const { user } = props
    
    return(
        <div>
            <UserCard user={user}/>
        </div>
    )
}

export default UserContainer 