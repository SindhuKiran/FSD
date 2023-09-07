function abc(){
    console.log("Iam Inside abc Function");
}
function abcd(){
    console.log("Iam Inside abcd Function");
}
console.log("Hello");
let timeout = setTimeout(abc, 5000);
console.log("Hii");
let interval = setInterval(abcd, 1000);

function clear(){
    clearInterval(interval);
    clearTimeout(timeout)
}
setTimeout(clear, 8000);