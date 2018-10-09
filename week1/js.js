1. Write a console.log statement saying "Hello World!" for each language that you know.


console.log('Halo, dunia! // English \nCiao, mondo! // Italian\nHola, mundo! // Spanish');





2. Consider the following code:   console.log('I'm awesome');


console.log("I'm awesome");




3.
var x;
console.log('the value of x will be: random number');
console.log(x);
x = 10;
console.log('the value of x will be: 10 ');
console.log('the value of x will be: ' + x);




4.
let y = "random string";
console.log('the value of x will be: "random string"');
console.log(y);
y = "HYF";
console.log('the value of x will be: "HYF" ');
console.log('the value of x will be: ' + y);





5.
let z = 7.25;
console.log(z);
let a = parseInt(z);
console.log(a);
let highest_value = Math.max(a, z);
console.log("the highest value : " + highest_value);


6.
let myarry = [];
console.log('I think it is an empty array');
console.log(myarry);
let my_favorite_animals = ['horse', 'Parrot', 'dove'];
console.log(my_favorite_animals);
my_favorite_animals.push('Baby Pig');
console.log(my_favorite_animals);



7.
let myString = "this is a test";
console.log(myString);
console.log(myString.length);


8.
let t = true;
let n = 45;
let s = 'string';
let u= undefined;

console.log('the value of t will be: ' + t);
console.log('the value of n will be: ' + n);
console.log('the value of s will be: ' + s);
console.log('the value of u will be: ' + u);

if(typeof(t)  == typeof(n)){ console.log("t and n are  are  the same type");}
 else if(typeof(t)  == typeof(s)){ console.log(t + ' and ' + s + ' are  the same type');}
 else if(typeof(t)  == typeof(u)){ console.log(t + ' and ' + u + ' are  the same type');}
 else if(typeof(n)  == typeof(s)){ console.log(n + ' and ' + s + ' are  the same type');}
 else if(typeof(n)  == typeof(u)){ console.log(n + ' and ' + u + ' are  the same type');}
 else if(typeof(s)  == typeof(u)){ console.log(s + ' and ' + u + ' are  the same type');}
 else {console.log("They are not the same type");}




9.
Printing of marital numbers

 for (let i = 1 ; i < 20; i++){
    if (i % 2 == 0){
       console.log( i + ' : is a marital ');   
    }
   
}






10.
let str = ['Ayham', 1988 , "FooCafe", 2018];
console.log(str[0] + ' : ' + str[1] + '\n' + str[2] + ' : ' + str[3]);
console.log((7/0) === (6/0));


































