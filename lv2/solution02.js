function solution(n) {
    const nToBin = Number(n).toString(2);
    const countOneInN = countOne(nToBin);
    
    while(n) {
        n += 1;
        const next = Number(n).toString(2);
        const countOneInNext = countOne(next);
        if (countOneInNext === countOneInN) {
            return parseInt(next, 2);
        } 
    }
};

function countOne(str) {
    return str.replace(/[^1]/g, "").length
};