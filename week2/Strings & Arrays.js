// - Strings! 



// -1-  ---------------------------------------------------------  

let myString = "hello,this,is,a,difficult,to,read,sentence";


// -2-  ---------------------------------------------------------


console.log(myString.length);

// -3-  ---------------------------------------------------------

let newString = myString.replace(/,/g," ");

// -4-  ---------------------------------------------------------

console.log(myString);

//---------------------------------------------------------------









//2. Arrays!

// -1-  ---------------------------------------------------------

let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];

favoriteAnimals.push('turtle');

// -2-  ---------------------------------------------------------

console.log(favoriteAnimals);

// -3-  ---------------------------------------------------------

favoriteAnimals.splice(1,0,'meerkat');

// -4-  ---------------------------------------------------------

console.log('The array will be 5 elements');

// -5-  ---------------------------------------------------------

console.log(favoriteAnimals);

// -6-  ---------------------------------------------------------

console.log('The array has a length of: ' + favoriteAnimals.length);

// -7-  ---------------------------------------------------------

favoriteAnimals.splice(3,1);

// -8-  ---------------------------------------------------------

console.log(favoriteAnimals);

// -9-  ---------------------------------------------------------

console.log(favoriteAnimals.indexOf('meerkat'));

favoriteAnimals.splice(favoriteAnimals.indexOf('meerkat'),1);

// -10-  ---------------------------------------------------------

console.log('The item you are looking for is at index: ' +  favoriteAnimals.indexOf('meerkat'));


//Done-----------------------------------------------------------------------