import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
import LoadingSpinner from "../../Shered/LoadingSpinner";
import Carosoul from "../../Pages/Carousole/Carosoul";
import Testimonials from "./Testimonials/Testimonials";

 
const Home = () => {
    const {loading} = useAuth()
    if(loading) return <LoadingSpinner/>
    return (
        <div className="max-w-7xl mx-auto">
            <Helmet>
                <title>Employee Management | Home</title>
            </Helmet> 
            <Carosoul/>
            <Testimonials/>
        </div>
    );
};

export default Home;