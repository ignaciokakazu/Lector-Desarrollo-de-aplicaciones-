export const SET_USUARIO = 'SET_USUARIO'

export const set_usuario = (user) => ({
    type: SET_USUARIO,
    user: user,
})

export const UNSET_USUARIO = 'UNSET_USUARIO'

export const unset_usuario = (user) => ({
    type: UNSET_USUARIO
})

export const SET_THEME = 'SET_THEME'

export const set_theme = (theme) => ({
    type: SET_THEME,
    theme: theme
})