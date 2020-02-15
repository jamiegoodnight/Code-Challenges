function diagonalDifference(arr) {
    const rl = arr.reduce((acc, eachRow) => {
    acc.rl += eachRow[acc.rlCount]; acc.rlCount--;
    return acc;
    }, { rl: 0, rlCount: arr.length - 1})
    
    const lr = arr.reduce((acc, eachRow) => {
    console.log("Here's acc", acc)
    acc.lr += eachRow[acc.lrCount]; acc.lrCount++;
    return acc;
    }, { lr: 0, lrCount: 0})
    console.log("What's up", rl, lr)
    return Math.abs(rl.rl - lr.lr);
    }