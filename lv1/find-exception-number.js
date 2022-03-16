function solution(numbers) {
    const set = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    return set.reduce((acc, cur) => {
        const find = numbers.find(v => v === cur);

        if (find === undefined) {
            return acc + cur;
        }
        return acc;
    }, 0);
}

console.log(solution([1,2,3,4,6,7,8,0]));