function solution(id_list, report, k) {
    const [reportedUser, receiveReportCount] = getUserReports(id_list, reportSet(report));

    const blockedUser = receiveReportCount.reduce((acc, cur, index) => {
        if (cur >= k) {
            acc.push(id_list[index]);
        }
        return acc;
    }, []);
    
    console.log(reportedUser, blockedUser);
    
    return reportedUser.map(v => v);
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