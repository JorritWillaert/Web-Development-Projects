import { AUTH } from "../constants/actionTypes.js";
import * as api from "../api";

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    // Log in user

    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    // Sign up user

    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
