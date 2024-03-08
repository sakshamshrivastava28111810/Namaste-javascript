// function outerFunction() {
//     let outerVariable = 'I am from the outer function';
//     function innerFunction() {
//       console.log(outerVariable);
//     }
//     return innerFunction;
//   }
//   let closure = outerFunction();
//   closure()

//example 1st 
// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);
//     }
//     y();  return y;
// }
// var z = x();
// console.log(z);

//example 2
// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);
//     }
//    return y;
// }
// var z = x();
// console.log(z);
// OR

// function x(){
//     var a = 7;
//     return function y(){
//         console.log(a);
//     }
// }
// var z = x();
// console.log(z);

//corner cases :
//example 2
// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);
//     }
//     a=100;
//    return y;
// }
// var z = x();
// console.log(z);
// z();


function z(){
    var b=900;
    function x(){
        var a = 7;
        function y(){
            console.log(a,b);
        }
        y();
    }
    x();
}
z();

