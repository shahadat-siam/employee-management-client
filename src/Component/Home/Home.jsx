import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
import LoadingSpinner from "../../Shered/LoadingSpinner";

 
const Home = () => {
    const {loading} = useAuth()
    if(loading) return <LoadingSpinner/>
    return (
        <div>
            <Helmet>
                <title>Employee Management | Home</title>
            </Helmet> 
        </div>
    );
};

export default Home;