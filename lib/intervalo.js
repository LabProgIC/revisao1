function isInteger (i) {
    return typeof(i) === 'number' && i % 1 === 0
}

export default function intervalo (a, b = 0) {
    if (isInteger(a) && isInteger(b)) {
        const isAsc = a < b ? true : false
        const tamanho = (isAsc ? b - a : a - b) + 1
        return new Array(tamanho)
            .fill()
            .map(
                (_, i) => isAsc ?  a + i : a - i
            )
    } else {
        throw new TypeError('should be integer')
    }
}