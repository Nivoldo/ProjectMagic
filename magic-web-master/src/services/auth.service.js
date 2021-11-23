import axios from "axios";

const API_URL = "https://eduresisteserver.herokuapp.com/api/auth/";

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "signin", {
        email,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(roles, firstname, lastname, email, phonenumber, course, college, vest, password) {
    return axios.post(API_URL + "signup", {
      roles,
      firstname,
      lastname,
      email,
      phonenumber,
      course,
      college,
      vest,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();