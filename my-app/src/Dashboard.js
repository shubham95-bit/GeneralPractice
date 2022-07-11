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
        <div className="App">
            <div className="container-fluid py-2 bg-secondary text-white text-center">
                <h1>Welcome to Dashbaord</h1>
                <input type='button' value='Logout' onClick={handleLogOut}/>
            </div>
            <div className="container-fluid bg-success">
                <div className="row">
                {
                    userData.map((obj)=>{
                        return (
                            <div className="col border" key={obj.address.zipcode}>
                                <h6 className="text-center text-white">
                                    {obj.name}
                                </h6>
                                <p className="text-center">
                                    {obj.website}
                                </p>
                                <p className="text-center small text-white-50 bg-dark">
                                    {obj.address.street}
                                </p>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
