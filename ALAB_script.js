console.log("hello");
const PI = 3.1415;
const radius = 5;
const plant = 0.8;
const area = PI * radius * radius;  // 78.5375    -> 0.8
let plantcount = 20;

//week 0 area0 = 4.9085937500000005
console.log( area / (plantcount * plant * plant) );

// week 1  area0 * 2  == ??   >   ()
/*

if ( 50% of the maximum capacity  )
  print  Planted

else  (  50% and 80%  )
print  Monitored, 

else  (  greater than 80%  )
print  Pruned,

*/
// week 2

// week 3


/*
Implement control flow to make decisions on whether the plants should be:
Pruned, to stop them from exceeding the capacity of the garden.
This condition should be met if the plant count after the given number of 
weeks is greater than 80% of the maximum capacity of the garden.

Monitored, if they are growing at an acceptable rate.
This condition should be met if the plant count is between 50% and 80% 
of the maximum capacity of the garden after the given number of weeks.

Planted, if there is room to plant more plants.
This condition should be met if the plant count after the given number 
of weeks is less than 50% of the maximum capacity of the garden.

Within your submission, include the results for 1, 2, and 3 weeks of growth as inputs.
*/
