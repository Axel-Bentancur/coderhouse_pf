import { IStudent, ICourse } from "../../core/models";

//MOCKDATA LIST OF STUDENTS
/* export const STUDENTS_DATA: IStudent[] = [
  { id: 1, firstName: 'Juan', lastName: 'Perez', address: 'Calle Falsa 123', phone: '1234567891', email: 'juan.perez@example.com', password: '1234567891', token: '1234567891', photo: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250', courses: [] },
  { id: 2, firstName: 'María', lastName: 'Gomez', address: 'Av. Siempre Viva 456', phone: '9876543212', email: 'maria.gomez@example.com', password: '9876543212', token: '9876543212', photo: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250', courses: [] },
  { id: 3, firstName: 'Carlos', lastName: 'Lopez', address: 'Calle Solitaria 789', phone: '5551234563', email: 'carlos.lopez@example.com', password: '5551234563', token: '5551234563', photo: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250', courses: [] },
  { id: 4, firstName: 'Ana', lastName: 'Martinez', address: 'Av. Libertad 321', phone: '1231231234', email: 'ana.martinez@example.com', password: '1231231234', token: '1231231234', photo: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250', courses: [] },
  { id: 5, firstName: 'José', lastName: 'Rodriguez', address: 'Calle Pradera 654', phone: '9879879875', email: 'jose.rodriguez@example.com', password: '9879879875', token: '9879879875', photo: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250', courses: [] },
  { id: 6, firstName: 'Lucía', lastName: 'Hernandez', address: 'Av. Colina 234', phone: '1112223336', email: 'lucia.hernandez@example.com', password: '1112223336', token: '1112223336', photo: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250', courses: [] },
  { id: 7, firstName: 'Miguel', lastName: 'Sanchez', address: 'Calle Arboleda 567', phone: '4445556667', email: 'miguel.sanchez@example.com', password: '4445556667', token: '4445556667', photo: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250', courses: [] },
  { id: 8, firstName: 'Laura', lastName: 'Diaz', address: 'Av. Central 678', phone: '3334445558', email: 'laura.diaz@example.com', password: '3334445558', token: '3334445558', photo: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250', courses: [] },
  { id: 9, firstName: 'David', lastName: 'Morales', address: 'Calle Norte 890', phone: '2223334449', email: 'david.morales@example.com', password: '2223334449', token: '2223334449', photo: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250', courses: [] },
  { id: 10, firstName: 'Paula', lastName: 'Ortega', address: 'Av. Sur 123', phone: '6667778880', email: 'paula.ortega@example.com', password: '6667778880', token: '6667778880', photo: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250', courses: [] }
]; */

//MOCKDATA STUDENT (ID)
/* export const STUDENT_DATA: IStudent = {
    id: 1,
    firstName: "Juandos",
    lastName: "Perez",
    address: "Calle Falsa 123",
    phone: "1234567891",
    email: "juan.perez@example.com",
    password: "SecurePass1!",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.JuanPerez",
    photo: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    courses: []
}; */

// MOCKDATA SUMMARY OF STUDENT LIST
/* export const STUDENTS_SUMMARY_DATA: IStudentSummary[] = [
  { id: 1, firstName: 'Juan', lastName: 'Perez' },
  { id: 2, firstName: 'María', lastName: 'Gomez' },
  { id: 3, firstName: 'Carlos', lastName: 'Lopez' },
  { id: 4, firstName: 'Ana', lastName: 'Martinez' },
  { id: 5, firstName: 'José', lastName: 'Rodriguez' },
  { id: 6, firstName: 'Lucía', lastName: 'Hernandez' },
  { id: 7, firstName: 'Miguel', lastName: 'Sanchez' },
  { id: 8, firstName: 'Laura', lastName: 'Diaz' },
  { id: 9, firstName: 'David', lastName: 'Morales' },
  { id: 10, firstName: 'Paula', lastName: 'Ortega' }
] */

//MOCKDATA LIST OF COURSES
/* export const COURSES_DATA: ICourse[] = [
  { id: 1, courseName: "Introduction to Programming", courseClassQty: 5, hoursQty: 40, teacherName: "John Doe" },
  { id: 2, courseName: "Advanced JavaScript", courseClassQty: 4, hoursQty: 32, teacherName: "Jane Smith" },
  { id: 3, courseName: "Database Fundamentals", courseClassQty: 6, hoursQty: 48, teacherName: "Michael Johnson" },
  { id: 4, courseName: "Web Development with React", courseClassQty: 7, hoursQty: 56, teacherName: "Emily Davis" },
  { id: 5, courseName: "Data Structures and Algorithms", courseClassQty: 8, hoursQty: 64, teacherName: "Chris Wilson" },
  { id: 6, courseName: "Machine Learning Basics", courseClassQty: 6, hoursQty: 48, teacherName: "Anna Brown" },
  { id: 7, courseName: "Software Engineering", courseClassQty: 9, hoursQty: 72, teacherName: "David Lee" },
  { id: 8, courseName: "Cloud Computing", courseClassQty: 5, hoursQty: 40, teacherName: "Sarah Green" },
  { id: 9, courseName: "Mobile App Development", courseClassQty: 4, hoursQty: 32, teacherName: "James Miller" },
  { id: 10, courseName: "Cybersecurity Essentials", courseClassQty: 7, hoursQty: 56, teacherName: "Laura White" }
]; */

//MOCKDATA COURSE (ID)
/* export const COURSE_DATA: ICourse = {
  id: 2, courseName: "Advanced JavaScript", courseClassQty: 4, hoursQty: 32, teacherName: "Jane Smith", studentList: [ { id: 1, firstName: 'Juan', lastName: 'Perez' }, { id: 2, firstName: 'María', lastName: 'Gomez'}, { id: 3, firstName: 'Carlos', lastName: 'Lopez' }]
}; */


// MOCKDATA SUMMARY OF COURSE LIST
/* export const COURSES_SUMMARY_DATA: ICourseSummary[] = [
  { id: 2, courseName: "Advanced JavaScript", teacherName: "Jane Smith", studentList: [ { id: 1, firstName: 'Juan', lastName: 'Perez' }, { id: 2, firstName: 'María', lastName: 'Gomez'}, { id: 3, firstName: 'Carlos', lastName: 'Lopez'}]},
  { id: 3, courseName: "Database Fundamentals", teacherName: "Michael Johnson", studentList: [ { id: 3, firstName: 'Carlos', lastName: 'Lopez'}, { id: 4, firstName: 'Ana', lastName: 'Martinez'}, { id: 5, firstName: 'José', lastName: 'Rodriguez'}]},
  { id: 4, courseName: "Web Development with React", teacherName: "Michael Johnson", studentList: [ { id: 9, firstName: 'David', lastName: 'Morales'}, { id: 10, firstName: 'Paula', lastName: 'Ortega'}]},
]; */
