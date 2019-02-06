export default function collect (arr) {
    return arr.reduce((a, b) => {
        const keys = Object.keys(a)
        const bs = b.toString()
        
        if (keys.includes(bs)) {
            a[b] = a[b] + 1
        } else {
            a[b] = 1
        }

        return a
    }, {})
}