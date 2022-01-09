import React  from 'react'
import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';

export default function Alunos() {
    //const [name, setname] = useState([])
    React.useEffect (() => {
        async function getData() {
            const response = await axios.get('/name');
            console.log(response.data);
        }
        getData();

    })
    
    return (
        
        <Container>
        <h1>Fotos</h1>
        </Container>
    );
}
