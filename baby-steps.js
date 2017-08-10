

//for loop affects arrray
var sum = 0; //to hold value
for (var i=2; i < process.argv.length; i++) {
   // sum += /*increment by*/ process.argv[i]; //will slam string together 
   //wrap with Number() or put + in front of it
   sum += Number(process.argv[i]);  //turn it into a number and adding it to what sum was
}
console.log(sum);