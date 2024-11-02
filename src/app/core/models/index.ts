// STUDENT INTERFACE
export interface IStudent  {
  id: string;
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  email: string;
  photo: string;
  password: string;
  token: string;
  courses: ICourse[];
}

// INTERFACE FOR COURSE
export interface ICourse {
  id: string;
  courseName: string;
  teacherName: string;
  courseClassQty: number;
  hoursQty: number;
  studentList: IStudent[];
}

// ATUH INTERFACE
export interface AuthData {
  email: string,
  password: string,
}
