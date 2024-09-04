// Promise are used to handel the asysncjavascript
//  there are two type of disadvantge call back hell and inversion of controll
// inversion of controll means we are giving tour function t other function which can be run or can give error
const cart =["shoes",'pants'];
console.log(cart);

createorder(cart,function () {
    makepayment(orderid);
});
const promise=createorder(cart);
// createorder will return the promise it can be empty object{}
 
