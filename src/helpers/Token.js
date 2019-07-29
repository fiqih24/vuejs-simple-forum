 class Token{
    payload(token){
        const payload = token.split('.')[1]
       return this.decode(payload);
    }
    isValidLogin(token){
        const payload = this.payload(token);
        if(payload){
            return payload.iss == "http://udemy-course.asd/api/auth/login" ? true : false;
        }
        return false
    }

    isValidSignup(token){
        const payload = this.payload(token);
        if(payload){
            return payload.iss == "http://udemy-course.asd/api/auth/signup" ? true : false;
        }
        return false
    }

    decode(payload){
        return JSON.parse(atob(payload));
    }
}
export default Token = new Token();