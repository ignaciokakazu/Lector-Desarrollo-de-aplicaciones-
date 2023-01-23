import { SET_USUARIO, UNSET_USUARIO, SET_THEME } from "../actions/user.actions"

const initialState = {
    idUser: '',
    user: '',
    theme: 'Oscuro',
    segmento: 'Gratis' //premium gratuito
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USUARIO:
            return  action.payload                
            
        case UNSET_USUARIO:
            const unseted = {
                idUser: '',
                user: '',
                theme: '',
                segmento: ''
            }
            return  unseted

        case SET_THEME: 
            const set_theme = {
                ...state,
                theme: action.payload.theme,
            }
            return set_theme
        
        default: 
            return state
    }
}

export default userReducer;