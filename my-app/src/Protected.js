import { Navigate } from "react-router-dom";
const Protected = ( {auth, children} ) => {
    if(!auth){
        return (
            <Navigate replace to='/'/>
        );
    }
    return children;
}

export default Protected;