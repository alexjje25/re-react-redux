import React from 'react'
import { useDispatch } from 'react-redux';
import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';
sdadad
export default function Login() {
    function handleClick(e){
        e.preventDefault();
        console.log('Botao clicado');
    }
    return (
        <Container>
        <Title>
            TELA DE LOGIN
        </Title>
        <Paragrafo>Lorem BE ol grto hjua jhhusa </Paragrafo>
        <button type='button' onClick={handleClick}>Cadastrar</button>
        </Container>
    );
}
