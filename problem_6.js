/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
for (i = 1; i <= experience; i++){
    startingSalary += startingSalary*0.05;
}
console.log(startingSalary.toFixed(2));