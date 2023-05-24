const obj = {
    first: 1,
    second: 'homework'
};
const b = 'first'
const c = 'homework'

function firstFunc(a, obj) {
    return a  in obj;
}

console.log(firstFunc(b, obj))
console.log(firstFunc(c, obj))