var addButn = document.getElementById("addbtn")
var inputItem = document.getElementById("inputtask")
var itemList = document.getElementById("list_item")

addButn.addEventListener("click", function(){
    var item = inputItem.value
    addTask(item)
    inputItem.value = ""
})

function addTask(item){
    var li = document.createElement("li")
    li.innerHTML = item
    itemList.appendChild(li)
}
