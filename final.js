/** Problem -01 ( Divide the Asset ) */
var area = 2060;
//write your code here
console.log(area/2);


/** Problem -02 ( Cycle or Laptop ) */
var money = 9999;
//write your code here
if (money>=45000){
    console.log("Laptop");
}else if(money>=10000){
    console.log("Cycle");
}else{
    console.log("Chocolate");
}


/** Problem -03 ( Medicine Planner ) */
var lastDay = 3 ;
//write your code here
for (var i=1; i<=lastDay; i++){
    if(i%3==0){
        console.log(i, "- medicine")
    }else{
        console.log(i, "- rest");
    }
}

/** Problem 04 - (Delete / Store) */
var fileName= "slipdf.txt";
//write your code here
if (fileName.slice(0,1)==='#'){
    console.log('Store');
}else if(fileName.split('.')[1]==='pdf' || fileName.split('.')[1]==='docx'){
    console.log('Store');
}else{
    console.log('Delete');
}

/** Problem 05 - ( PH Email Generator )  */
var student= { name: "mewo" , roll: 96 ,department: "cse"  };
//write your code here
console.log(student.name+student.roll+'.'+student.department+'@ph.ac.bd');

/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
for (i = 1; i <= experience; i++){
    startingSalary += startingSalary*0.05;
}
console.log(startingSalary.toFixed(2));