import { userConstants } from '../constants/userConstants';
const initialState = {
    currentUser : {},
    userdetails:{},
    carddetails:[],
    usercarddetails:{},
    userflighthistory:{},
    usercarhistory:{},
    userhotelhistory:{}
};
export function users(state = initialState, action) {
    switch (action.type) {
        case userConstants.GETALL_REQUEST:
            return {
                loading: true
            };
        case userConstants.GETALL_SUCCESS:
            return {
                items: action.users
            };
        case 'GETALL_FAILURE':
            return {
                error: action.error
            };
        case 'GETUSER_DETAILS':
            return{
                ...state,
                userdetails:action.result
            };
            case 'GETUSERCARD_DETAILS':
                return{
                    ...state,
                    usercarddetails:action.result
                };
        case 'SET_USER':
            return{
                ...state,
                user_id:action.result
            }
        case 'GETCARD_DETAILS':
            return{
                ...state,
                carddetails:action.result
            }
        case 'GETUSERCAR_HISTORY':
            return{
                ...state,
                usercarhistory:action.result
            }
        case 'GETUSERFLIGHT_HISTORY':
                return{
                    ...state,
                    userflighthistory:action.result
                }
        case 'GETUSERHOTEL_HISTORY':
                    return{
                        ...state,
                        userhotelhistory:action.result
                    }
        case 'UPDATE_BILLING_USERINFO':
        return Object.assign({},state,{
          usercarddetails:action.userinfo
        });
        default:
            return state
    }
}
