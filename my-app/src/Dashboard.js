import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import AuthApi from "./AuthApi";
import Cookies from "js-cookie";

const Dashboard = ({userData}) => {

    const nav = useNavigate();
    const Auth = useContext(AuthApi);   

    const handleLogOut = () => {
        Auth.setAuth(false);
        Cookies.remove('user');
        nav('/');
    }
    
    return (
        <div className="App section-bg">
            <h1>Welcome to Dashbaord</h1>
            <input type='button' value='Logout' onClick={handleLogOut}/>
                {
                    userData.map((obj)=>{
                        return <h3 key={obj.address.zipcode}>{obj.name}</h3>
                    })
                }
        </div>
    )
}

export default Dashboard;
