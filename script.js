/* task1 */

function showNumbers() {
  let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (let num of nums)
    if (num % 2) {
      console.log(num, ":'Odd'");
    } else if (!(num % 2)) {
      console.log(num, ":'Even'");
    }
}

showNumbers();

/* task2 */

function calculateAverage(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  const average = sum / nums.length;
  let grade = "";
  if (average >= 1 && average <= 59) {
    grade = "F";
  } else if (average >= 60 && average <= 69) {
    grade = "D";
  } else if (average >= 70 && average <= 79) {
    grade = "C";
  } else if (average >= 80 && average <= 89) {
    grade = "B";
  } else if (average >= 90 && average <= 100) {
    grade = "A";
  }
  console.log(`Average: ${average.toFixed(2)}, Grade: ${grade}`);
  return average;
}
calculateAverage([80, 90, 50]);
