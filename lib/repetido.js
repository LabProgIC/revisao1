import isInteger from './isInteger.js'
import collect from './collect.js'

export default function repetido (lista) {
    if (Array.isArray(lista)) {
        if (lista.every(x => !(x < 0))) {
            if (lista.every(isInteger)) {
                return collect(lista)
            } else {
                throw new TypeError('should be an intege array')
            }
        } else {
            throw new TypeError('should be an positive array')
        }
    } else {
        throw new TypeError('should be an array')
    }
}