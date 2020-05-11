import React, { useReducer } from "react";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS,
    CLEAR_CURRENT
} from "../types";
import axios from "axios"

const AuthState = (props) => {
  const initialState = {
   token:localStorage.getItem('token'),
   isAuthenticated:null,
   loading:true,
   user:null,
   error:null
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

 // Load User
const loadUser = () =>console.log('loaduser');


 // Register User
  const register =async formData =>{
    const config ={
      headers:{
        'Content-Type':'application/json'
      }
    }
    try {
      const res=await axios.post('api/users',formData,config);

      //res.data will be token
      dispatch({type: REGISTER_SUCCESS, payload:res.data})

    }catch(err){
      console.log(err)
      dispatch({type: REGISTER_FAIL, payload:err.response.data.msg})
    }



  }



 //Login User
 const login = () =>console.log('loaduser');

 //Logout
const logout = () =>console.log('loaduser');

 //Clear Errors
 const clearErrors = () =>dispatch({type:CLEAR_ERRORS})



  return (
    <AuthContext.Provider
      value={{
       token:state.token,
       loading:state.loading,
       isAuthenticated:state.isAuthenticated,
       user:state.user,
       error:state.error,
       loadUser,
       register,
       login,
       logout,
       clearErrors
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
