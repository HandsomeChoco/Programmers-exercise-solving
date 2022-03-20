function solution(id_list, report, k) {
    const [userReportList, receiveReportCount] = getUserReports(id_list, reportSet(report));

    const blockedUser = receiveReportCount.reduce((acc, cur, index) => {
        if (cur >= k) {
            acc.push(id_list[index]);
        }
        return acc;
    }, []);

    return userReportList.reduce((acc, uRL, index) => {
        const gotMails = uRL.reduce((uRL_acc, uRL_cur) => {
            const search = blockedUser.findIndex(user => user === uRL_cur);
            if (search !== -1) {
                return uRL_acc + 1;
            }
            return uRL_acc;
        }, 0);

        acc[index] += gotMails;
        return acc;
    }, id_list.concat().fill(0, 0));
}

function reportSet(report) {
    return [...new Set(report)]
}

function getUserReports(id_list, report, k) {
    let userReportList = [];
    let receiveReportCount = [];

    for (let i=0; i<id_list.length; i++) {
        userReportList.push([]);
        receiveReportCount.push(0);
    }
   
    return report.reduce((acc, cur) => {
        const [srcUser, targetUser] = cur.split(' ');
        const srcUserIndex = id_list.findIndex(user => user === srcUser);
        const targetUserIndex = id_list.findIndex(user => user === targetUser);

        acc[0][srcUserIndex].push(targetUser);
        acc[1][targetUserIndex] += 1;
        
        return acc;
    }, [userReportList, receiveReportCount]);
};

console.log(solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"], 2));
exports.reportSet = reportSet;
exports.getUserReports = getUserReports;