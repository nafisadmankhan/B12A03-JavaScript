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