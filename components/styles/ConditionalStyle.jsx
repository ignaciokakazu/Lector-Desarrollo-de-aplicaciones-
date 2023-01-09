import { Oscuro, Claro, Primavera } from "../../constants/Colors"
import { stylesheetObj } from "./Styles"

export const ConditionalStyle = (theme='Oscuro') => {
    switch (theme) {
        case 'Oscuro':
            return stylesheetObj(Oscuro)
        case 'Claro':
            return stylesheetObj(Claro)
        case 'Primavera':
            return stylesheetObj(Primavera)
        default: 
            return stylesheetObj(Oscuro)
    }
}

export const styles = ConditionalStyle('Oscuro')