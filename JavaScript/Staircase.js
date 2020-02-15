function staircase(x) {
    for (let i = 1; i <= x; i++) {
         let empty = [...Array(x - i) ].map(ele => ' ');
         let oct = [...Array(x - (x - i))].map(ele => '#');
         console.log(empty.concat(oct))
}
}

staircase(4)
