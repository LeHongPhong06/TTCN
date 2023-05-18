import axios from './request';
// --------- login -----------------
export const login = (values) => {
  return axios.post(`/client/login`, values);
};

// =========== ADMIN =================

// ----------- Student information ---------------
export const getListStudent = (values) => {
  return axios.post(`/admin/student/list`, values);
};

export const createStudent = (values) => {
  return axios.post(`/admin/student/create`, values);
};

export const updateStudent = (id, values) => {
  return axios.put(`/admin/student/update/${id}`, values);
};

export const deleteStudent = (id) => {
  return axios.delete(`/admin/student/delete/${id}`);
};

export const deleteListStudent = (values) => {
  return axios.post(`/admin/student/delete`, values);
};

export const getDataMedCore10 = (id) => {
  return axios.get(`/admin/student/study-process-10/${id}`);
};

export const getDataMedCore4 = (id) => {
  return axios.get(`/admin/student/study-process-4/${id}`);
};

export const getDataTraningPoint = (id) => {
  return axios.get(`/admin/student/training-process/${id}`);
};

export const getDataAccumulation = (id) => {
  return axios.get(`/admin/student/accumulation/${id}`);
};

export const exportStudentList = (values) => {
  return axios.post(`/admin/student/export`, values);
};

// ----------- Classes --------------
export const getClassList = (values) => {
  return axios.post(`/admin/class/list`, values);
};

export const createClass = (values) => {
  return axios.post(`/admin/class/create`, values);
};

export const updateClass = (id, values) => {
  return axios.put(`/admin/class/update/${id}`, values);
};

export const deleteClass = (id) => {
  return axios.delete(`/admin/class/delete/${id}`);
};

// ---------------Major------------------
export const getMajorList = (values) => {
  return axios.post(`/admin/major/list`, values);
};

export const createMajor = (values) => {
  return axios.post(`/admin/major/create`, values);
};

export const updateMajor = (id, values) => {
  return axios.put(`/admin/major/update/${id}`, values);
};

export const deleteMajor = (id) => {
  return axios.delete(`/admin/major/delete/${id}`);
};

// ------------- Course --------------
export const getCourseList = (values) => {
  return axios.post(`/admin/course/list`, values);
};

export const createCourse = (values) => {
  return axios.post(`/admin/course/create`, values);
};

export const updateCourse = (id, values) => {
  return axios.put(`/admin/course/update/${id}`, values);
};

export const deleteCourse = (id) => {
  return axios.delete(`/admin/course/delete/${id}`);
};

// ----------- Point ------------
export const getDataPoint = (values) => {
  return axios.post(`/admin/point/list`, values);
};

export const createPoint = (values) => {
  return axios.post(`/admin/point/create`, values);
};

export const updatePoint = (values) => {
  return axios.put(`/admin/point/update`, values);
};

export const deletePoint = (values) => {
  return axios.post(`/admin/point/delete`, values);
};

export const exportPointStudent = (values) => {
  return axios.post(`/admin/point/export`, values);
};

// --------- Semesters --------------
export const getDataSemesters = (values) => {
  return axios.post(`/admin/term/list`, values);
};

export const createSemester = (values) => {
  return axios.post(`/admin/term/create`, values);
};

export const updateSemester = (values) => {
  return axios.put(`/admin/term/getData`, values);
};

export const deleteSemester = (id) => {
  return axios.delete(`/admin/term/delete/${id}`);
};

// --------- Classifications -----------
// -----------class---------------
export const getClassificationsForClass = (values) => {
  return axios.post(`/admin/class-classified/list`, values);
};

export const createClassificationsForClass = (values) => {
  return axios.post(`/admin/class-classified/create`, values);
};

// export const updateClassificationsForClass = (values) => {
//   return axios.put(`/admin/class-classified/update`, values);
// };

export const deleteClassificationsForClass = (values) => {
  return axios.post(`/admin/class-classified/delete`, values);
};
// -----------courses -----------
export const getClassificationsForCourse = (values) => {
  return axios.post(`/admin/course-classified/list`, values);
};

export const createClassificationsForCourse = (values) => {
  return axios.post(`/admin/course-classified/create`, values);
};

// export const updateClassificationsForCourse = (values) => {
//   return axios.put(`/admin/course-classified/update`, values);
// };

export const deleteClassificationsForCourse = (values) => {
  return axios.post(`/admin/course-classified/delete`, values);
};

// ----------- Authorization ----------------
export const getAdminList = (values) => {
  return axios.post(`/admin/admin/list`, values);
};

export const createAdmin = (values) => {
  return axios.post(`/admin/admin/create`, values);
};

export const updateAdmin = (values) => {
  return axios.put(`/admin/admin/update`, values);
};

export const deleteAdmin = (id) => {
  return axios.delete(`/admin/admin/delete/${id}`);
};

export const getAuthorizationAdmin = (id) => {
  return axios.post(`/admin/role/${id}`);
};

export const getPermisstionList = (id) => {
  return axios.get(`/admin/permission/list`);
};

export const updateAuthorizationAdmin = (values) => {
  return axios.put(`/admin/role/update`, values);
};

// ----------- Change Password -----------
export const changePassword = (values) => {
  return axios.post(`/admin/change-password`, values);
};

// ============ Student ==================
export const getInfoStudent = (id) => {
  return axios.get(`/student/detail/${id}`);
};

export const getDataStudentPoint10 = (id) => {
  return axios.get(`/student/study-process-10/${id}`);
};

export const getDataStudentPoint4 = (id) => {
  return axios.get(`/student/study-process-4/${id}`);
};

export const getDataStudentTraningPoint = (id) => {
  return axios.get(`/student/training-process/${id}`);
};

export const getDataStudentAccumulation = (id) => {
  return axios.get(`/student/accumulation/${id}`);
};

export const updateStudentInfoDetails = (id, values) => {
  return axios.put(`/student/update/${id}`, values);
};
