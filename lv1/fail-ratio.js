function solution(N, stages) {
    let result = [];
    let compareStage = 0;

    
    while(compareStage +1 <= N) {
        compareStage += 1;
    
        let triedUser = 0;
        let failedUser = 0;
        for(let i=0; i<stages.length; i++) {
            const currentStage = stages[i];
            if (currentStage >= compareStage) {
                triedUser += 1;
            }
            if (currentStage === compareStage) {
                failedUser += 1;
            }
        }
        result.push({ 
            stage: compareStage, 
            failRatio: failedUser / triedUser
        });
    }

    return result.sort((a, b) => sortAlgorithm(a, b)).map(data => data.stage);
}

function sortAlgorithm(a, b) {
    if (b.failRatio === a.failRatio) {
        return a.stage - b.stage;
    }
    return b.failRatio - a.failRatio
}
