const marvel_heros = ["thor", "spiderman", "ironman", "hulk"];
const dc_heros = ["superman" , "flash", "batman"];

// Combine both arrays into one
// const all_heros = marvel_heros.concat(dc_heros);
// const all_heros = [...marvel_heros, ...dc_heros];
// console.log("All Heros:", all_heros);

// marvel_heros.push(dc_heros);// adds the entire dc_heros array as a single element
// console.log("Marvel Heros after push:", marvel_heros);

//output:
// Marvel Heros after push: [ 'thor', 'spiderman', 'ironman', 'hulk', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heros[4][1]);

marvel_heros.concat(dc_heros);// does not modify the original array
// console.log("Marvel Heros after concat:", marvel_heros);

//output:
// Marvel Heros after concat: [ 'thor', 'spiderman', 'ironman', 'hulk', [ 'superman', 'flash', 'batman' ] ]

const all_heros = marvel_heros.concat(dc_heros);
// console.log("All Heros:", all_heros);

//output:
// All Heros: [ 'thor', 'spiderman', 'ironman', 'hulk', 'superman', 'flash', 'batman' ]








