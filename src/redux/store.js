import { configureStore } from '@reduxjs/toolkit';
import modalLoginReducer from './Modal/modalLoginSlice';
import pointReducer from './Point/pointSlice';
import studentReducer from './Student/studentSilce';
import pointTrashReducer from './Trash/pointTrashSilce';
import studentTrashReducer from './Trash/studentTrashSlice';
import userReducer from './User/userSlice';
import popoverStudentFillerReducer from './Popover/popoverStudentFiller';

export const store = configureStore({
  reducer: {
    user: userReducer,
    modalLogin: modalLoginReducer,
    studentList: studentReducer,
    pointList: pointReducer,
    studentTrash: studentTrashReducer,
    pointTrash: pointTrashReducer,
    popoverStudentFiller: popoverStudentFillerReducer,
  },
});
