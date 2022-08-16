////////////////////////////////
// Easy Going
////////////////////////////////
// for (let i = 0; i <= 20; i++){
//     console.log(i)
// }

//The commit message should read: "Easy Going answered"



////////////////////////////////
// Get Even
////////////////////////////////

// for (let i = 0; i <= 200; i++){
//    if( i % 2 ===0){
//     console.log(`${i} <--- is an even number`)
//    } 
// }

//The commit message should read: "Get Even answered"

////////////////////////////////
// Fizz Buzz
////////////////////////////////

// function fizzBuzz(){

// let num = [];
// for (let i = 0; num.length <= 100; i++){
//         if( i % 3 === 0 && i % 5 === 0){
//         num.push('FizzBuzz')
//     } else if (i % 3 === 0){
//         num.push('Fizz')
//     } else if (i % 5 === 0){
//         num.push('Buzz')
//     }
//         else{
//             num.push(i)
//         }
// }
// return num
// }

// console.log(fizzBuzz())
   
 //The commit message should read: "Fizz Buzz answered"  
        
////////////////////////////////
// Wild Wild Life
////////////////////////////////
 
// class WildLife {
//     constructor(name, species,age, hometown ){
//         this.name = name;
//         this.species = species;
//         this.age = age;
//         this.hometown = hometown
//     }

// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// plantee.splice(2,1,5001);
// console.log(plantee);

// wolfy.splice(3,1,'Gotham City');
// console.log(wolfy)

// dart.push('Hawkins');
// console.log(dart)

// wolfy.splice(0,1,'Gameboy')
// console.log(wolfy)

//The commit message should read: "Wild Wild Life answered"

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////

// const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];

// for (let ninja of ninjaTurtles){
//     console.log(ninja.toUpperCase());
// };

////////////////////////////////
// Methods, Revisited
////////////////////////////////

// let favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

// console.log(favMovies.sort());// #1:(.sort()) sorts elements by converting into strings and then alphabetizes the array by the first letter. 

// console.log(favMovies.pop()); // #2: (.pop())removes the last element(Fast and Furious)from an array and returns that element; changes the length of the array.

//console.log(favMovies.push("Guardians of the Galaxy")); // #3 (.push()) adds one or more elements to the end of an array and returns the new length (20) of the array.

//console.log(favMovies.reverse()); // #4 reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

//console.log(favMovies.shift()); // #5 removes the first element (Jaws) from an array and returns that removed element. This method changes the length of the array.

//console.log(favMovies.unshift("A Star is Born")); // #6  adds one or more elements to the beginning of an array and returns the new length of the array.

//console.log(favMovies.splice(3,1,'Avatar'));
//console.log(favMovies); // #7 does not permanently alter the array

//console.log(favMovies.slice(favMovies.length/2))// #8 removes selected(from start to end (end not included) where start and end represent the index) items and returns a shallow copy, leaves original in tact. 
//console.log(favMovies.length) // total 19 elements

// let output = favMovies.slice(favMovies.length/2)  // #9 stored output of slice into the variable (output) then logged the output.
// console.log(output) //#10

// for(let i = 0; i > favMovies.length; i++){
    
//     if (favMovies(i) === "Fast and Furious"){
//         favMovies.pop(i);
//     }
// }
//console.log(favMovies.indexOf('Fast and Furious'))// #11
// 
// #12 const vs let; either declaration statement could be used; favMovies is an array and in this exercise,changes were permitted because with  const--properties or items can be updated or removed with either an object or an array.

// console.log(favMovies)

//"Methods Revisited answered"

////////////////////////////////
// Where is Waldo
////////////////////////////////

const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

            //const findWaldo = whereIsWaldo.flatMap();
            //console.log(findWaldo(9))
//****** */H E L P || Access and console.log "Waldo"????  .flatMap seems possible but not sure how...

        //console.log(whereIsWaldo.slice(1,2))// remove "Eggbert"

// for (let i = 0; i < whereIsWaldo.length; i++){
//     for (let j = 0; j < whereIsWaldo[i].length; j++){
//         if (whereIsWaldo[i][j] === 'Neff'){
//             whereIsWaldo[i].splice(j,1,'No One');
//             console.log(whereIsWaldo);
//         };
//     };
// };
        // console.log(whereIsWaldo(3,1,1))
        //console.log(whereIsWaldo)
///The commit message should read: "Where is Waldo answered"

////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////