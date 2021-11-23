import axios from 'axios';
import history from '../pages/history';

class AuthService{

    signin(email, password){
        return axios({
          method: "POST",
          url: "http://localhost:8080/api/signin",
          data: { email: email, password: password },
        }).then((response) => {
          if (response.data.token) {
            localStorage.setItem("user", JSON.stringify(response.data.user));
            history.push("/dashboard")
            window.location.reload(); 
            console.log("logado com sucesso");
          }
        });
      };
}
export default AuthService;