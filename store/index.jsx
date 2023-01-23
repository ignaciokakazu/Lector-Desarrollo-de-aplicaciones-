import {createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import userReducer from './reducers/user.reducer'

import favoritosReducer from './reducers/favoritos.reducer'

import temporalesReducer from './reducers/temporales.reducer'

const RootReducer = combineReducers({

    user: userReducer,
    favoritos: favoritosReducer,

    temporales: temporalesReducer
})

export default createStore(RootReducer, applyMiddleware(thunkMiddleware))