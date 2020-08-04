import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
    display: flex;
    padding: 20px;
    margin: 0 auto;
    margin-top: 10%;
    width: 35%;
    background-color: lightgrey;
    border-radius: 10px;
    box-shadow: 7px 10px 10px 1px grey;
    div{
        display: flex;
        flex-direction: column;
    }
    img{
        width: 50%;
        margin: 10px;
        margin-left: 40px;
        border-radius: 6px;
    }
    a{
        text-decoration: none;
        border: 1px solid grey;
        border-radius: 3px;
        padding: 5px;
        color: grey;
        width: 55%;
    }
`

const UserCard = props => {
    const {user} = props
    console.log(user)
    return (
        <StyledCard>
            <div>
                <h3> {user.name}</h3>
                <p>Username: {user.login}</p>
                <p>Location: {user.location}</p>
                <a href='https://github.com/Bender0239'>User Profile</a>
            </div>
            <img src={user.avatar_url} alt=""></img>
        </StyledCard>
    )
}


export default UserCard