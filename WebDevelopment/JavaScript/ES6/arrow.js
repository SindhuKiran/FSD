// normal function before es6
function add(n1,n2){                         
    console.log(n1+n2);
}
add(3,5);
// function after es6
let addn = (n1,n2) =>
{
    console.log(n1+n2);
}
add(6,9);

let oddeven= (num) =>
{
    if(num%2==0)
    {
        console.log("even")
    }
    else
    {
        console.log("odd")
    }
}

oddeven(16);