import { userConstants } from '../constants/userConstants';
export function registration(state = {}, action) {
  switch (action.type) {
    case userConstants.REGISTER_SUCCESS:
      return {};
    case userConstants.REGISTER_FAILURE:
      return {};
    default:
      return state
  }
}