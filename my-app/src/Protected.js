import { Navigate } from "react-router-dom";
import Cookies from 'js-cookie';

const Protected = ( {auth, children} ) => {
    const user = Cookies.get('user');
    if(user){
        auth = true
    };

    console.log('auth value in Protected',auth);
    
    if(auth != true && auth != null){
        console.log('Ayega?');
        return (
            <Navigate replace to='/'/>
        );
    }
    return children;
}

export default Protected;