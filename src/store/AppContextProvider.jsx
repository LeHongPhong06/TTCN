import React, { useReducer } from 'react';
import { AppContext } from './ProviderContext';

const initialState = [
  {
    id: '',
    email: '',
    roleId: '',
    userName: '',
  },
];
const actionReducer = (value, action) => {
  switch (action.type) {
    case 'create': {
      return [...value, { id: action.id, email: action.email, roleId: action.roleId, userName: action.userName }];
    }
    case 'update': {
      return value.map((data) => {
        if (data.roleId === action.data.roleId) {
          return action.data;
        } else return data;
      });
    }
    case 'delete': {
      return value.filter((data) => data.roleId !== action.data.roleId);
    }
    default: {
      throw Error('Invalid action type: ' + action.type);
    }
  }
};

export const AppContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(actionReducer, initialState);
  return <AppContext.Provider value={{ value, dispatch }}>{children}</AppContext.Provider>;
};
