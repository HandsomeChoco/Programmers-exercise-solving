function solution(s) {
  let chunks = s.split(" ");
  return chunks.map(v => v.substring(0, 1).toUpperCase() + v.substring(1).toLowerCase()).join(" ")
}

console.log(solution("3people unFollowed me"))