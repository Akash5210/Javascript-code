//working with one of the higher order function i.e. reduce 
const actors = [
    {name: 'johnny', netWorth: 2000000},
    {name: 'amber', netWorth: 10},
    {name: 'matt', netWorth: 170000000},
    {name: 'brad', netWorth: 300000000},
    {name: 'leonardo', netWorth: 10000000},
    ];
//here acc is a function in reduce and curr is a variable thats why acc+curr.netWorth is written.
//0 is also written after 'acc+curr.netWorth' body which set the acc to 0 and curr to starting value which is johnny netWorth
const result = actors.reduce((acc, curr)=> acc + curr.netWorth, 0 );

console.log(result)