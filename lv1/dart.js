function solution(dartResult) {
    const bonusOpt = dartResult.split(/\d/g).filter(v => v !== "");
    const scores = dartResult.split(/\D/g).filter(v => v !== "");
    const formular = scores.reduce((acc, cur, index) => score(acc, cur, index, bonusOpt),[]);
    return formular.reduce((acc, cur) => acc + cur, 0);
}

function mapper(v) {
    switch(v) {
        case "S": return 1;
        case "D": return 2;
        case "T": return 3;
        case "*": return 2;
        case "#": return -1;
    }
}

function score(acc, cur, index, bonusOpt) {
    if (bonusOpt[index].length === 2) {
        const [bonus, option] = bonusOpt[index].split("");

        if (acc.length && option === "*") {
            acc[acc.length - 1] *= mapper(option);
        }
        acc.push((Math.pow(cur, mapper(bonus)) * mapper(option)))
        return acc;
    }
    acc.push(Math.pow(cur, mapper(bonusOpt[index])));
    return acc;
}

const data = [
    "1S2D*3T",
    "1D2S#10S",
    "1D2S0T",
    "1S*2T*3S",
    "1D#2S*3S",
    "1T2D3D#",
    "1D2S3T*",
];

console.log(data.map(v => solution(v)))