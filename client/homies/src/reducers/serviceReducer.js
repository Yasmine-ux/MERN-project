import { GET_SERVICES } from "../actions/types";

const initState = { services: [] };

export default function  (state = initState, action)  {
  switch (action.type) {
    case GET_SERVICES:
      return { ...state, services: action.payload };
    default:
      return state;
  }
};