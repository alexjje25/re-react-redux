import React from 'react'
import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';
import axios from '../../services/axios';
import * as exampleAction from '../../storemodules/example/actions';

export default function Login() {
    React.useEffect(() => {
        async function getData() {
            const response = await axios.get()
        }
    })
    return (
        
        <Container>
        <Title>
            TELA DE LOGIN
        </Title>
        <Paragrafo>Lorem BE ol grto hjua jhhusa </Paragrafo>
        <button type='button'>Cadastrar</button>
        </Container>
    );
}
