function solution(prior, location) {
    let done = [];
    let sequence = 0;
    let uniquePrior = prior.map((importance, index) => ({ importance, index }));

    while (uniquePrior.length !== 0) {
        const turn = uniquePrior[0].importance;
        const max = Math.max(...uniquePrior.map(v => v.importance));

        if (turn === max) {
            sequence += 1;
            done.push({...uniquePrior.shift(), sequence});
        } else {
            uniquePrior.push(uniquePrior.shift());
        }
    }
    return done.filter(v => v.index === location)[0].sequence;
}