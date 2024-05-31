import { Helmet } from "react-helmet-async";

 
const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Employee Management | Home</title>
            </Helmet>
            <h2>This is home</h2>
            <img src="../../../public/logo.png" alt="" />
        </div>
    );
};

export default Home;