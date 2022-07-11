import useUsersList from "./useUsersList";

const WithLoading = (Component) => {
    return function WithLoadingComponent(){
        const { isLoading, userData } = useUsersList();

        if(!isLoading){
            return <Component userData={userData}/>
        }
        return <div className="App">
                    <h1 className="container-fluid text-center">Please hold while the data is being fetched</h1>
                </div>
    }
}

export default WithLoading;