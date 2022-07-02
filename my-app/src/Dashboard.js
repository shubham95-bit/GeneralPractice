import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const nav = useNavigate();
    const handleLogOut = () => {
        nav('/')
    }
    return (
        <div>
            <h1>Welcome to Dashbaord</h1>
            <input type='button' value='Logout' onClick={handleLogOut}/>
        </div>
    )
}

export default Dashboard;
