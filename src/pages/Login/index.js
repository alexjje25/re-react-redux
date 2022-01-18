import React from 'react'
import { ProfilePicture } from './styled';
import { Form } from './styled';
import  Cel  from '../../assets/cel.png';
import { Container } from '../../styles/GlobalStyles';


export default function Login() {
    const [email, setEmail] = React.useState('');
    const [password, setpassword] = React.useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(email);
    };

    return (
        <Container>
        <h1> login</h1>
        <Form onSubmit={handleSubmit}>
            <input
              type="text"
              value={email}
              onChange={e => setEmail (e.target.value)}
              placeholder='User name:'
              />
              <input
              type="password"
              value={password}
              onChange={e => setpassword (e.target.value)}
              placeholder='Password:'
              />
        </Form>

        <ProfilePicture>
            <img src={Cel} alt="img"/> 
        </ProfilePicture>
     
        </Container>
    );
}
