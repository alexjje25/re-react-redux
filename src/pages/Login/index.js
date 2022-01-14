import React from 'react'
import { Form, ProfilePicture } from './styled';
import  Cel  from '../../assets/cel.png';
import { Container } from '../../styles/GlobalStyles';


export default function Login() {
    const [email, setEmail] = React.useState('');
    const [password, setpassword] = React.useState('');

    return (
        <Container>
        <Form>
            <input
              type="text"
              value={email}
              onChange={e => setEmail (e.target.value)}
              placeholder='Seu Email'
              />
              <input
              type="password"
              value={password}
              onChange={e => setpassword (e.target.value)}
              placeholder='Sua se4nh'
              />

            <ProfilePicture>
            <img src={Cel} alt=""/> 
            </ProfilePicture>
            <h1>Login ss</h1>
        </Form>
        </Container>
    );
}
