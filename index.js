// console.log (3);
// var price = 15;
// console.log (price);
// var a=5;
// var b=6;
// var sum = a+b;
// console.log(sum);
// var arr = [5,6,7];
// console.log(arr.length);
// console.log (arr[2]);

// function add(){
//     var e =5;
//     var d=5;
//     console.log(e+d);

// }
// add();

// var nameEmployee = {
//     name: 'kinu',
//     city: 'ctg'
// }
// console.log(nameEmployee.name);
// const number = -5;
// const result = Math.abs(number);
// console.log(result);

// const arrNumber =[44,45,46,47,48];
// let sum = 0;
// for (let i=0; i< arrNumber.length;i++){
//     const element = arrNumber[i];
    
//     // console.log(element);
    
//     sum = sum + element;
    
// }
// console.log(sum);


function largestAge(numbers){
    let largest =0;
    for(i=0;i<numbers.length;i++){
       let element = numbers[i];
       if (element>largest){
        largest= element;

       }
       
       
    }
    return largest;
}
const age = [12,14,13,15,16];
const oldest = largestAge(age);