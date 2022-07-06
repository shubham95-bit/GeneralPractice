import { useState, useEffect } from "react";
import useUsersList from "./useUsersList";

const WithLoading = (Component) => {
    return function WithLoadingComponent(){
        const { isLoading, userData } = useUsersList();

        if(!isLoading){
            return <Component userData={userData}/>
        }
        return <h1 className="container text-align">Please hold while the data is being fetched</h1>
    }
}

export default WithLoading;