import mysql from 'mysql2'

const connection = mysql.createPool({
    host : '127.0.0.1',
    user : 'root',
    password : 'Cutie@1904',
    database : 'online_learning'
}).promise()

// ******** Read the tables ***********8 //

export async function readCourses() {
    const output = await connection.query("select * from courses")
    return output[0]
}

export async function readCourseById(id) {
    const output = await connection.query("select * from courses where id = "+id)
    return output[0]
}

export async function insertCourse(title,tutor) {
    const output = await connection.query("insert into Courses (title, tutor) values ('"+title+"','"+tutor+"')")
    return output[0]
}

export async function updateCourseTitleById(id,title) {
    const output = await connection.query("update courses set title='"+title+"' where id="+id)
    return output[0]
}

export async function deleteCourseTitleById(id,title) {
    const output = await connection.query("delete from courses where id="+id)
    return output[0]
}

// const ans1 = await readCourses()
// console.log(ans1)

// const ans2 = await readCourseById(1)
// console.log(ans2)

// const ans3 = await insertCourse('Express','VB'
// )
// console.log(ans3)

// const ans4 = await updateCourseTitleById('2','Nodejs'
// )
// console.log(ans4)

const ans5 = await deleteCourseTitleById(1)
console.log(ans5)