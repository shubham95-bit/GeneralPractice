import { useEffect, useState } from "react";

const useUsersList = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [userData, setUserData] = useState([]);   

    const fetchUserList = () => {
        fetch('https://jsonplaceholder.typicode.com/users/').then((result)=>{
            return result.json();
        }).then((response)=>{
            setUserData([...response]);   
            setIsLoading(false);
        }).catch((err)=>{
            console.log("Error",err);
        })
    }

    useEffect(()=>{
        fetchUserList();   
    },[]);

    return { isLoading, userData }
        
}
export default useUsersList;