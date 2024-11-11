// USERS INTERFACE
export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  photo: string;
  email: string;
  password: string;
  token: string;
  role: string;
}

// STUDENT INTERFACE
export interface IStudent  {
  id: string;
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  email: string;
  photo: string;
}

// INTERFACE FOR COURSE
export interface ICourse {
  id: string;
  courseName: string;
  teacherName: string;
  courseClassQty: number;
  hoursQty: number;
  studentsList: IStudent[]
}

// ATUH INTERFACE
export interface AuthData {
  email: string,
  password: string,
}
