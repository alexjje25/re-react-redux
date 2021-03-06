import { toast } from 'react-toastify';
import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as actions from './actions'; 
import * as types from './types'; 

const requisicao = () => 
new Promise((resolve, reject) => {
     setTimeout(() =>{
     reject();
  }, 2000);
});

function* exampleRequest () {
    try{
     yield call(requisicao);
     yield put(actions.clicaBotaoSucess());
    } catch{
        toast.error('Deu erro.');
        yield put(actions.clicaBotaoFailure());
    }
}

export default all([
    takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)]);