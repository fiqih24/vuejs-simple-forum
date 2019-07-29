
import axios from 'axios';
import AppStorage from './AppStorage';
import Token from './Token';
 class User{
     
    responseAfterSignup(response){
        const access_tokens = response.data.access_token;
        const usernames = response.data.user;     
        if(Token.isValidSignup(access_tokens)){            
            AppStorage.store(usernames,access_tokens);
            window.location='/forum';
        }
    }

    

    login(data){
        axios.post('http://udemy-course.asd/api/auth/login',data)
        // .then(res => console.log(res.data)) sama kaya dibawah
        .then(function (response) {         
            const access_token = response.data.access_token;
            const username = response.data.user;
            
            if(Token.isValidLogin(access_token)){
                AppStorage.store(username,access_token);
                window.location='/forum';
            }
        })    
        .catch(function (error) {
           alert('username/password salah');
        });
    }

    hasToken(){
        const storedToken = AppStorage.getToken();
        if(storedToken){
            return Token.isValidLogin(storedToken) || Token.isValidSignup(storedToken)  ? true : false
        }
        return false
    }
    loggedIn(){
       
        return this.hasToken();
    }
    logout(){
        window.location='/forum';
        AppStorage.clear();
    }
    name(){
        if(this.loggedIn()){
            return AppStorage.getUser()
        }
    }
    id(){
        if(this.loggedIn()){
            const payload = Token.payload(AppStorage.getToken());
            return payload.sub
        }
    }
    token(){
        if(this.loggedIn()){
          return AppStorage.getToken();           
        }
    }
}
export default User = new User();