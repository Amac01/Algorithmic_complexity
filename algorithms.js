var numbers;

function testTiming(size){
  numbers = [...Array(size).keys()];

    var startTime = process.hrtime();
    startTime = process.hrtime()[1];
    numbers.reverse();
    endTime = process.hrtime();
    endTime = process.hrtime()[1];
    timing = endTime - startTime;
    console.log("The timing for " + size + " is: "  + timing + " nanoseconds");
}



  for(var i = 1; i <= 5; i++) {
    testTiming(5);
  }
console.log("warmup finished");

testTiming(10000);


// console.log("start of program");
// var number = 1;
// while (number <= 5) {
//     console.log(number);
//     number++;
// }
// console.log("end of program");
