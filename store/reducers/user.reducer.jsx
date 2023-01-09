import { SET_USUARIO, UNSET_USUARIO, SET_THEME } from "../actions/user.actions"

const initialState = {
    user: '',
    theme: 'Oscuro',
    segmento: 'Gratis' //premium gratuito
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USUARIO:
            const seted = {
                ...state,
                user: action.user,
            }
            return  seted                
            
        case UNSET_USUARIO:
            const unseted = {
                user: '',
                theme: '',
                segmento: ''
            }
            return  unseted

        case SET_THEME: 
            const set_theme = {
                ...state,
                theme: action.theme,
            }
            console.log(set_theme)
            return set_theme
        
        default: 
            return state
    }
}

export default userReducer;