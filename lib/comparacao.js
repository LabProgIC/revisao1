import isInteger from './isInteger.js'

export default function comparacao (a, b) {
    if (isInteger(a) && isInteger(b)) {
        if (a > b) {
            return 1
        } else if (a < b) {
            return -1
        } else {
            return 0
        }
    } else {
        throw new TypeError('should be integer')
    }
}