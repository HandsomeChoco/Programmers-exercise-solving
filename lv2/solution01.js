function solution(A, B) {
    const sortAasc = A.sort((a, b) => a - b);
    const sortBdesc = B.sort((a, b) => b - a);

    return sortAasc.reduce((acc, cur, index) => {
        const multiple = cur * sortBdesc[index];
        console.log(cur, sortBdesc[index])
        return acc + (multiple);
    }, 0);
};