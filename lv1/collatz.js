function solution(num, count = 0) {
    if (num === 1) {
        return count;
    }
    if (count >= 500) {
        return -1;
    }
    return num % 2 === 0 ? solution(num / 2, count + 1) : solution((num * 3) + 1 , count + 1)
}