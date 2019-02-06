export default function isInteger (i) {
    return typeof(i) === 'number' && i % 1 === 0
}