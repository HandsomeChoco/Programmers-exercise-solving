function solution(n) {
    const parse = n.toString(3).split('').reverse().join('');
    return parseInt(parse, 3)
}
