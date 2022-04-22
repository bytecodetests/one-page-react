import axios from 'axios';

export async function LoginUser(userObject) {
    if(! localStorage.getItem('authUser')){
    axios.post('http://127.0.0.1:8000/api/auth/login', userObject)
        .then((res) => {
            localStorage.setItem('authUser', JSON.stringify(res.data))
            window.location.pathname = '/';
        }).catch((error) => {
            alert(error.response.data.error)
        });
    }else{
        window.location.pathname = '/';
    }
}

export async function LogoutUser() {
    localStorage.removeItem('authUser');
    window.location.pathname = '/login';
    // axios.post('http://127.0.0.1:8000/api/auth/logout', { headers: {"Authorization" : `Bearer ${authUser.access_token}`} })
    //     .then((res) => {
    //         localStorage.removeItem('authUser')
    //     }).catch((error) => {
    //         alert(error.response.data.error)
    //     });
}


export async function RegisterUser() {

}
