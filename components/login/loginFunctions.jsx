//acá tiene que ir a la bd

const validacionEmail = (email) => {
    if (!email) {
        return {
            msg: 'Email no puede ser vacío',
            estado: false
        }
    }
    return {
        msg: 'Ok',
        estado: true
    }
}

const validacionPassword = (password) => {
    if (password.length < 4) {
        return {
            msg: 'El password no puede ser menor a 4 dígitos',
            estado: false
        }
    }
    return {msg:'Ok', estado: true}
}

//register
export const validacionRegister = (email, password, passwordConfirm) => {
    const emailMsg = validacionEmail(email);
    if (!emailMsg.estado) {
        return emailMsg
    }

    const passwordMsg = validacionPassword(password)
    if (!passwordMsg.estado) {
        return passwordMsg
    }

   if (password != passwordConfirm) {
        return {msg: 'El password no es igual a la confirmación', estado: false}
   }

    return {msg: 'Ok', estado: true}
}

//login
export const validacionLogin = (email, password) => {
    const emailMsg = validacionEmail(email);
    if (!emailMsg.estado) {
        return emailMsg
    }

    const passwordMsg = validacionPassword(password)
    if (!passwordMsg.estado) {
        return passwordMsg
    }

    if (email != 'admin' || password != 'admin') {
        return {msg: 'El email debe ser admin y el password admin'}
    }

    return {msg: 'Ok', estado: true}
}