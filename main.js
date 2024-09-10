

characters = [
    [
        "Luke Skywalker",
        177,
        "male",
        77,
        "brown",
    ],
    [
        "Leia Organa",
        160,
        "female",
        56,
        "blue",
    ],
    [
        "Han Solo",
        180,
        "male",
        80,
        "brown",
    ],
    [
        "Chewie",
        222,
        "male",
        190,
        "black",
    ],
    [
        "kevien",
        106,
        "male",
        32.2,
        "red",
    ],
];



let allNamesArray=[];

characters.forEach(element => {
    allNamesArray.push(element[0]);
});

console.log("the all names is : ");
console.log(allNamesArray);


let allHeightArray=[];
let totalheights=0;
characters.forEach(element => {
    allHeightArray.push(element[1]);
    totalheights+=element[1];
});

console.log("the all heights is : ");
console.log(allHeightArray);


console.log("the total all heights is : ");
console.log(totalheights);


let LessH=[];
LessH=characters.filter(character => character[1]<200);
console.log(LessH);

let male=[];
male=characters.filter(character => character[2]=="male");
console.log(male);

let characterMass=[];
characters.forEach(weghit=>{
    heighinM=weghit[1]/100;
    characterMass.push(weghit[3]/(heighinM*heighinM))
});

console.log(characterMass.sort());

console.log(allHeightArray.sort());

console.log(characterMass.map( mass =>{
    if(mass>40){
        return mass=true;
    }
    else{
        return mass=false;
    }
}))