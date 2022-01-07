const initialState = {
    botaoCLicado: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'BOTAO_CLICADO':{
            const newState = { ...state };
            newState.botaoCLicado = !newState.botaoCLicado;
            return newState;
        }

        default: {
            return state;
        }
    }
}