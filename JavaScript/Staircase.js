function staircase(x) {
    for (let i = 1; i <= x; i++) {
         let empty = [...Array(x - i) ].map(ele => ' ');
         let oct = [...Array(x - (x - i))].map(ele => '#');
         console.log(empty.concat(oct))
}
}

staircase(4)


// Takes in a number and creates a staircase of . and # where the bottom
// row is made of a number of #s equal to the input and ascending until
// there is only one #

// [ ' ', ' ', ' ', '#' ]
// [ ' ', ' ', '#', '#' ]
// [ ' ', '#', '#', '#' ]
// [ '#', '#', '#', '#' ]