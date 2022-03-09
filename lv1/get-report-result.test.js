const { expect } = require('@jest/globals');
const grr = require('./get-report-result');

test('get-report-result', () => {
    expect(grr.reportSet(["ryan con", "ryan con", "ryan con", "ryan con"])).toEqual(["ryan con"]);

    expect(grr.getUserReports(
        ["muzi", "frodo", "apeach", "neo"],
        grr.reportSet(
            [
                "muzi frodo",
                "apeach frodo",
                "frodo neo",
                "muzi neo",
                "apeach muzi"
            ]
        )
    ))
        .toEqual(
            [
                {
                  user: 'muzi',
                  to: [ 'frodo', 'neo' ],
                  from: [ 'apeach' ],
                  count: 1
                },
                {
                  user: 'frodo',
                  to: [ 'neo' ],
                  from: [ 'muzi', 'apeach' ],
                  count: 2
                },
                { user: 'apeach', to: [ 'frodo', 'muzi' ], from: [], count: 0 },
                { user: 'neo', to: [], from: [ 'frodo', 'muzi' ], count: 2 }
              ]
       );
});