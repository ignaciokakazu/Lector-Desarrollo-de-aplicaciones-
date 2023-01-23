//acá tiene que ir a la bd
import Joi from 'react-native-joi'

const schemaLogin = Joi.object().keys({
    user: Joi.string().email().required(),
    password: Joi.string().min(4).required(),
})

const schemaRegister = Joi.object().keys({
    user: Joi.string().email().required(),
    password: Joi.string().min(4).required(),
    passwordConfirm: Joi.string().min(4).required()
})

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

    const result = Joi.validate({
        user: email,
        password: password,
        passwordConfirm: passwordConfirm
    }, schemaRegister)
    const {error} = result

    console.log('result', error)

    if (error) {
        return {msg: error.details[0].message, estado: false}    
    } 

    if (password != passwordConfirm) {
        return {msg: 'Error en confirmación de password', estado: false}
    } 
    
    return {msg: 'Ok', estado: true}  
}

//login
export const validacionLogin = (email, password) => {
    
    const result = Joi.validate({
        user: email,
        password: password
    }, schemaLogin)
    const {error} = result
    
    if (error) {
        return {msg: error.details[0].message, estado: false}    
    } 

    return {msg: 'Ok', estado: true}
}