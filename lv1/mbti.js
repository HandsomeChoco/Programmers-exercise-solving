function solution(survey, choices) {
    const mbti = {
        R: 0,
        T: 0,
        C: 0,
        F: 0,
        J: 0,
        M: 0,
        A: 0,
        N: 0
    }
    for(let i=0; i<survey.length; i++) {
        const type = survey[i];
        const [one, two] = type.split('');
        const choice = choices[i];
        const score = Math.abs(4 - choice);

        if (choice > 4) {
            mbti[two] += score;
        }

        if (choice < 4) {
            mbti[one] += score;
        }
    }
    
    const data = Object.keys(mbti);
    
    return data.reduce((acc, cur) => {
        switch (cur) {
            case 'R': return acc = getCharacter(cur, 'T', acc, mbti);
            case 'C': return acc = getCharacter(cur, 'F', acc, mbti);
            case 'J': return acc = getCharacter(cur, 'M', acc, mbti);
            case 'A': return acc = getCharacter(cur, 'N', acc, mbti);
            default : return acc;
        }
    }, '');
}

function getCharacter(cur, type, acc, mbti) {
    const typeA = mbti[cur];
    const typeB = mbti[type];

    if (typeA === typeB) {
        return cur < type ? acc + cur : acc + type;
    }
    return typeA > typeB ? acc + cur : acc + type;
}

const data = {
    test1: {
        survey: ["AN", "CF", "MJ", "RT", "NA"],
        choices: [5, 3, 2, 7, 5],
        result: "TCMA"
    },
    test2: {
        survey: ["TR", "RT", "TR"],
        choices: [7, 1, 3],
        result: "RCJA"
    }
};
		
console.log(solution(data.test1.survey, data.test1.choices));