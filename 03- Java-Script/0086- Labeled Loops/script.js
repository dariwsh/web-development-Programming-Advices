// ==========================================
// Lesson 089: Labeled Loops
// ==========================================

console.log("=== Lesson 089: Labeled Loops ===");
console.log("Ready for practice!");
outerLoop: for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 3; j++) {

        console.log(`Checking i=${i}, j=${j}`);

        if (i === 2 && j === 2) {

            console.log("Breaking OUT of both loops...");

            break outerLoop;
        }
    }
}

console.log("Done!");

console.log("Ready for practice 2");
outer: for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 3; j++) {

        if (j === 2) {

            console.log(`Skipping outer loop iteration where i=${i}`);

            continue outer;
        }

        console.log(`i=${i}, j=${j}`);
    }
}

console.log("===================Ready for practice 3==================");
outer: for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 5; j++) {

        if (j === 2) {
            continue outer;

        }

        console.log(`i=${i}, j=${j}`);
    }
}
console.log("===================Ready for practice 4==================");

outer:
for (let i = 1; i <= 5; i++) {

  for (let j = 1; j <= 5; j++) {
    if (j === 4) {
      console.log(`Skipping outer loop iteration where i=${i}`);
      continue outer; // skip to next i
    }
    console.log(`i=${i}, j=${j}`);
  }
}

console.log("===================Ready for practice    5  ==================");
let matrix = [
  [1, 4, 7],
  [10, 13, 15],
  [20, 22, 25]
];
FindNumber: for(let Row = 0; Row < matrix.length; Row++) {
    for(let Col = 0; Col < matrix[Row].length; Col++) {
        if(matrix[Row][Col] === 10){
            console.log(`Found 10 at Row: ${Row}, Col: ${Col}`);
            break FindNumber;
        }
    }
}
