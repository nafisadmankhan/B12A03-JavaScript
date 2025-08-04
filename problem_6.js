/** Problem 06 :  (Current Salary )  */
var experience = 40;
var startingSalary = 30000;
//write your code here
for (i = 1; i <= experience; i++){
    startingSalary += startingSalary*0.05;
}
console.log(startingSalary.toFixed(2));