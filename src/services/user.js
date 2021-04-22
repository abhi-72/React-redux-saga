import axios from "axios";

export function requestGetUsers() {
  return axios.request({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/users"
  });
}

export function requestGetUser(action) {
  return axios.request({
    method: "get",
    url: `https://jsonplaceholder.typicode.com/users/${action.payload}`
  });
}