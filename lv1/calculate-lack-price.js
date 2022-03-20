function solution(price, money, count) {
    let prices = [];

    for(let i = 0; i < count; i++) {
        prices.push(price * (i+1));
    };

    const total = prices.reduce((acc, cur) => {
        return acc + cur;
    }, 0);

    return total > money ? total - money : 0;
}

console.log(solution(3, 20, 4))


