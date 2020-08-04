import React from 'react';
import styled from 'styled-components'
import UserContainer from './components/UserContainer'
import axios from 'axios'

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
`

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  
  

`

class App extends React.Component {
  
  constructor() {
    super()
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/bender0239')
      .then(res => {
        this.setState({
          user: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render(){
    return (
      <StyledApp>
        <StyledHeader>
          <h1>Github User Card</h1>
        </StyledHeader>
        <UserContainer className='userCon' user={this.state.user}/>
      </StyledApp>
    );
  }
}

export default App;
