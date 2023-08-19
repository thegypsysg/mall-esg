import axios from "axios";

// Atur base URL API
axios.defaults.baseURL = "https://admin1.the-gypsy.sg/api";
axios.defaults.headers.post["Accept"] = "application/json";
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log(error.response);
    // if (error.response && error.response.status == 401) {
    //   axios.defaults.headers.common['Authorization'] = '';
    //   localStorage.clear();

    //   router.push('/auth/login');
    // }

    return Promise.reject(error);
  }
);

// Fungsi untuk mengatur header Authorization
// export function setAuthHeader(token) {
//   axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// }

export default axios;
