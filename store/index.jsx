import {createStore, combineReducers } from 'redux'

import userReducer from './reducers/user.reducer'
import recientesReducer from './reducers/recientes.reducer'
import favoritosReducer from './reducers/favoritos.reducer'
import leidosReducer from './reducers/leidos.reducer'

const RootReducer = combineReducers({
    recientes: recientesReducer,
    user: userReducer,
    favoritos: favoritosReducer,
    leidos: leidosReducer
})

export default createStore(RootReducer)