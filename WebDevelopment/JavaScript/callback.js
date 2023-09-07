
function test1()
{
    console.log("Iam being printed inside test1 function")
}

function test2()
{
    console.log("Iam being printed inside test2 function")
}

function add(n1, n2, test1, test2){
    console.log(n1+n2);
    test1();
    test2();
}

add(4, 7, test1, test2);