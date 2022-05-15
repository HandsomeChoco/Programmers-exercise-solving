function solution(n) {
    const root = Math.sqrt(n);
    return Number.isInteger(root) ? (root+1) * (root+1) : -1
}

console.log(solution(121))