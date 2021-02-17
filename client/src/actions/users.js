import * as api from '../api';
import {CREATE_USER, FETCH_ALL_USERS} from '../constants/usersConstatnts';

export const getUsers = () => async (dispatch) => {
  try {
    const {data} = await api.fetchUsers();
    dispatch({type: FETCH_ALL_USERS, payload: data});
  } catch (error) {
    console.log(error);
  }
}
export const createUser = (user) => async (dispatch) => {
  try {
    const {data} = await api.createUser(user);
    console.log("data",data);
    dispatch({type: CREATE_USER, payload: data});
  } catch (error) {
    console.log(error);
  }

}