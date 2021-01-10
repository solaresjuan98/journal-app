import { types } from "../types/types";
/*
    When the user is logged
    {
        uid: 2323,
        name: 'juan'
    }
*/
export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
      };
    case types.logout:
      return {};
    default:
      return state;
  }
};
