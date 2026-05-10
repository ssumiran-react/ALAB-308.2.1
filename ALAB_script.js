
const PI = 3.1415;
const RADIUS = 5;
const AREA = PI * RADIUS * RADIUS;  // 78.5375    

let eachPlantArea = 0.8 * 0.8;  
let numPlant = 20;
let area20PlantsWeek0 = (numPlant * eachPlantArea) ;
const AREA_50_PERCENT =  AREA * .5;
const AREA_80_PERCENT =  AREA * .8;

//week 0 area0 = 6.1357
console.log("Number "+numPlant+ " of plants occupied area: "
    + area20PlantsWeek0 + " and total area "+AREA);
   
let areaPlantsWeek1 = area20PlantsWeek0 * 2; //  (numPlant * 2 * eachPlantArea) ;

if (areaPlantsWeek1 < AREA_50_PERCENT){
    console.log("Number "+ (numPlant * 2) + " of plants occupied area: "
    + areaPlantsWeek1 + " of total area "+AREA + "; Planted");
}else if (areaPlantsWeek1 < AREA_80_PERCENT){
    console.log("Number "+ (numPlant * 2) + " of plants occupied area: "
    + areaPlantsWeek1 + " of total area "+AREA + "; Monitored");
}else {
    console.log("Number "+ (numPlant * 2) + " of plants occupied area: "
    + areaPlantsWeek1 + " of total area "+AREA + "; Pruned");
}

let areaPlantsWeek2 = areaPlantsWeek1 * 2;

if (areaPlantsWeek2 < AREA_50_PERCENT){
    console.log("Number "+ (numPlant * 2 * 2) + " of plants occupied area: "
    + areaPlantsWeek2 + " of total area "+AREA + "; Planted");
}else if (areaPlantsWeek2 < AREA_80_PERCENT){
    console.log("Number "+ (numPlant * 2 *2) + " of plants occupied area: "
    + areaPlantsWeek2 + " of total area "+AREA + "; Monitored");
}else {
    console.log("Number "+ (numPlant * 2 * 2) + " of plants occupied area: "
    + areaPlantsWeek2 + " of total area "+AREA + "; Pruned");
}

let areaPlantsWeek3 = areaPlantsWeek2 * 2;

if (areaPlantsWeek3 < AREA_50_PERCENT){
    console.log("Number "+ (numPlant * 2 * 2 *2) + " of plants occupied area: "
    + areaPlantsWeek3 + " of total area "+AREA + "; Planted");
}else if (areaPlantsWeek2 < AREA_80_PERCENT){
    console.log("Number "+ (numPlant * 2 *2 *2) + " of plants occupied area: "
    + areaPlantsWeek3 + " of total area "+AREA + "; Monitored");
}else {
    console.log("Number "+ (numPlant * 2 * 2 *2) + " of plants occupied area: "
    + areaPlantsWeek3 + " of total area "+AREA + "; Pruned");
}

/* Part 2: Thinking Bigger
The conservation area in which the garden is located has multiple other gardens. 
Using the logic you have already created, determine:
The amount of additional space that would be required if the scientists were to 
start with 100 plants, and did not prune them for 10 weeks.
If the space remained circular, what would be the radius of this expanded garden?*/
console.log ("\n\nPart 2:")
numPlant = 100;
let area100Plants = (numPlant * eachPlantArea) ;
//let areaPlantsWeek1 = area100Plants * 2; // AREA / (numPlant * 2 * eachPlantArea) ;

console.log("Number "+numPlant+ " of plants occupied area: "
    + area100Plants );

numPlant = 100 * (2**10);
let area100PlantsWeek10 = numPlant  * eachPlantArea ;
console.log("Number "+numPlant+ " of plants occupied area for 10 weeks in squere metre: "
    + area100PlantsWeek10 );    

/*Part 3: Errors in Judgement
The scientists decided not to listen to your recommendations, 
and have instead started with 100 plants in the original 5-meter-radius garden.
Use try and catch to wrap your work in an error-handling block. 
If the amount of space required to hold the originally provided 
number of plants exceeds the amount of space available, throw a new error 
and log an appropriate message.
*/
console.log ("\n\nPart 3:")
numPlant = 100;
area100Plants = AREA/(numPlant * eachPlantArea) ;
//let areaPlantsWeek1 = area100Plants * 2; // AREA / (numPlant * 2 * eachPlantArea) ;

console.log("Number "+numPlant+ " of plants occupied area: "
    + area100Plants + " of total area "+AREA);
   

console.log("Number "+numPlant+ " of plants occupied area: "
    + area100Plants );

numPlant = 100 * (2**10);
area100PlantsWeek10 = numPlant  * eachPlantArea ;
console.log("Number "+numPlant+ " of plants occupied area for 10 weeks in squere metre: "
    + area100PlantsWeek10 );  