let arr = [4,3,6,4,8];
console.log(arr);

let [ele1, ele2, ele3, ele4] = arr;

console.log(ele1, ele2, ele3, ele4);

let course = {
    'topic1': 'html',
    'topic2': "css",
    'topic3': 'js'
}

let {topic1,topic2,topic3} = course; 
console.log(course.topic1);
console.log(topic1,topic2,topic3)