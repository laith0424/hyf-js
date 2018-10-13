 
 
 
 // -1-  ---------------------------------------------------------
 
 function numSum(a , b , c) {
    return a + b + c;
}

numSum(1 , 3 , 4);

// -2-   ---------------------------------------------------------

function colorCar(color){
    return 'A ' + color + ' car';
}

colorCar('red');

//  -3-  ---------------------------------------------------------

let myObject = {
    'firstName': 'Ayham',
    'lastName': 'Alhelal',
    'age':  30, 
    'gender': 'Male',
}

function showMyObject(myObject){
    console.log(myObject);
}

//  -4-  ---------------------------------------------------------

function vehicleType (color , code){
    switch(code){
        case 1:
        return "A " + color + ' car .';
        case 2:
        return "A " + color + ' motorbike .';
    }
    return undefined;
}
vehicleType('red',1);
vehicleType('blue',2);


//  -5-  ---------------------------------------------------------

console.log(3===3 ? "yes" : "no");


//  -6-  ---------------------------------------------------------

function vehicle (color , code , age){
    switch(code){
        case 1:
        if(age > 3){
            return "A " + color + ' used '+ ' car.';
        }
        return "A " + color + ' new '+ ' car.';
        case 2:
        if(age > 3){
            return "A " + color + ' used '+ ' motorbike.';
        }
        return "A " + color + ' new '+ ' motorbike.';
        case 3:
        if(age > 3){
            return "A " + color + ' used '+ ' caravan.';
        }
        return "A " + color + ' new '+ ' caravan.';
    }
    return undefined;
}


vehicle ('red' , 1 , 2);
vehicle ('red' , 2 , 7);
vehicle ('blue' , 3 , 3);

//  -7-  --------------------------------------------------------- 

let vehiclesList = ['car','motorbike','caravan','bike'];

//  -8-  ---------------------------------------------------------

console.log(vehiclesList[2]);


//  -9-  ---------------------------------------------------------


function vehicle (color , code , age){
    if(code < vehiclesList.length && code >= 0){   //This condition is only to make sure that the code is greater than zero and smaller than the string length
        if(age > 3){
            return "A " + color + ' used '+ vehiclesList[code];
        }
        return "A " + color + ' new '+ vehiclesList[code];
    }
    return undefined;
}





//  -10-  ---------------------------------------------------------


function vehiclesService (){
    let advertisement = "Amazing Joe's Garage, we service ";

    for( var i = 0; i < vehiclesList.length ; i++){
        if( i === (vehiclesList.length-2)){
            advertisement += (vehiclesList[i]+'s and ');     
        }else if(i === (vehiclesList.length-1)){
            advertisement += (vehiclesList[i]+'s.');    
        }else
        advertisement += (vehiclesList[i]+'s, ');
    }
    return advertisement;
}


vehiclesService();



//  -11-  ---------------------------------------------------------

let vehiclesList = ['car','motorbike','caravan','bike','bus' , 'Truck'];
vehiclesService();
//"Amazing Joe's Garage, we service cars, motorbikes, caravans, bikes, buss and Trucks."

//Yes it can be done without any change or problems


//  -12-  ---------------------------------------------------------

let myObject = {};


//  -13-  ---------------------------------------------------------

let myTechObject = {
    'myTeachers': ['Baraa ','Rasmus','Johan','Victor','Tomy']
};
console.log(myTechObject.myTeachers);

//  -14-  ---------------------------------------------------------

myTechObject.languages = ["HTML", "CSS", "Javascript"];
console.log(myTechObject.languages);


//  -15-  ---------------------------------------------------------

let x = [1,2,3];
let y = [1,2,3];
let z = y;



console.log(x == y ? 'They are same value.':'They are not.')
//They are not..

console.log(x === y ? 'They are same value.':'They are not.')
//They are not.

console.log(z == y ? 'They are same value.':'They are not.')
//They are same value.

console.log(z == x ? 'They are same value.':'They are not.')
//They are not.


//  -16-  ---------------------------------------------------------
let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;


console.log(o2);  //{foo: "bar"}
console.log(o3);  //{foo: "bar"}



o2.foo = 'val1';
console.log(o2);  //{foo: "val1"}
console.log(o3);  //{foo: "val1"}
//Both are the same value because both refer to the same object.


o1.foo = 'val2';
console.log(o1);  //{foo: "val2"}
console.log(o3);  //{foo: "val1"}
//There is a difference because each refers to a different object.

//  -17-  ---------------------------------------------------------

console.log(typeof(bar))
console.log(typeof bar);  //  console.log(typeof bar);  =  console.log(typeof(bar))

console.log(typeof(typeof(bar)));  //  console.log(typeof typeof bar); =  console.log(typeof(typeof(bar)));
console.log(typeof typeof bar);

//It returns a string because the first 'typeof' checks 'bar' and returns the value
// "number" which is a string and the second 'typeof' checks the value "number" and returns 'string'.


//  -Done-  ---------------------------------------------------------






