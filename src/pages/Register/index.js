import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';


export default function Register() {
    
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    // eslint-disable-next-line no-unused-vars
    function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;
    
    
    if (nome.lenght < 3 || nome.lenght > 255){
        formErrors = true;
        toast.error('nome deve ter entre 3 e 255 caracteres');
    }
    if(isEmail(email)){
        formErrors = true;
        toast.error('E-mail invalido.');
    }
    if(senha.lenght < 6 || senha.lenght > 50){
        formErrors = true;
        toast.error('nome deve ter entre 3 e 255 caracteres');
    }
}    
    
    return (
    <Container>
        <h1>Crie sua conta</h1>

        <Form onSubmit={handleSubmit}>
            <label htmlFor="nome">
                Nome:
                <input
                  type="text"
                  value={nome}
                  onChange={e => setNome(e.target.value)}
                  placeholder='Seu nome'
                />
            </label>
            <label htmlFor="email">
                email:
                <input
                  type="text"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder='Seu nome'
                />
            </label>
            <label htmlFor="senha">
                senha:
                <input
                  type="text"
                  value={senha}
                  onChange={e => setSenha(e.target.value)}
                  placeholder='Ssua senha'
                />
            </label>

            <button type="submit">Cadastrar Usuario</button>
        </Form>

        </Container>
)};
