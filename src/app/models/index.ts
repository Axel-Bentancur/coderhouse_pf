// STUDENT SUMMARY INTERFACE
export interface IStudentSummary {
  id: number;
  firstName: string;
  lastName: string;
}

// STUDENT INTERFACE EXTENDING STUDENT SUMMARY
export interface IStudent extends IStudentSummary {
  address: string;
  phone: string;
  email: string;
  photo?: string;
  courses: ICourse[];
}

// SUMMARY INTERFACE FOR COURSE
export interface ICourseSummary {
  id: number;
  courseName: string;
  teacherName: string;
  studentList?: IStudentSummary[];
}

// EXTENDED COURSE INTERFACE
export interface ICourse extends ICourseSummary {
  courseClassQty: number;
  hoursQty: number;
}
