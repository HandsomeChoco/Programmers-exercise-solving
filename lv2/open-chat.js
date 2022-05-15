function solution(record) {
    let users = [];
    let log = [] 
    for(let i=0; i<record.length; i++) {
        const [action, uid, name] = record[i].split(' ');

        if (action === "Change") {
           users[uid] = name;
        }

        if (action === "Leave") {
            log.push(record[i]);
        }

        if (action === "Enter") {
            log.push(record[i]);
            users[uid] = name;
        }
    }

    return log.map(v => {
        const [action, uid, name] = v.split(' ');
        return `${users[uid]}님이 ${action === "Enter" ? "들어왔습니다" : "나갔습니다"}.`;
    })
}

const value = [
    "Enter uid1234 Muzi", 
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan"
]
console.log(solution(value))