import { GET_SERVICES } from "./types";
import axios from "axios";


export const getServices = () => (dispatch) => {
  axios
    .get("http://localhost:5000/Services")
    .then((res) => dispatch({ type: GET_SERVICES, payload: res.data }))
    // .then(res=>console.log(res))
    .catch((err) => console.log(err));
};

export const addService = (newService) => (dispatch) => {
  axios
    .post("http://localhost:5000/Services/add", newService)
    .then((res) => dispatch(getServices()))
    // .then(res =>alert("user added"))
    .catch((err) => console.log(err));
};

export const deleteService = (id) => (dispatch) => {
  axios
    .delete(`http://localhost:5000/Services/delete/${id}`)
    .then((res) => dispatch(getServices()))
    .catch((err) => console.log(err));
};

export const putService = (id, updatedService) => (dispatch) => {
  axios
    .put(`http://localhost:5000/Services/update/${id}`, updatedService)
    .then((res) => dispatch(getServices()))
    .catch((err) => console.log(err));
};