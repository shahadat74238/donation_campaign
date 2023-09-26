import Donations from "../../Components/Donations/Donations";
import Banner from "./Banner/Banner";

const Home = () => {

    const handleSearch = () => {
        console.log('working');
      }

    return (
        <div>
            <Banner handleSearch ={handleSearch}></Banner>
            <Donations></Donations>
        </div>
    );
};

export default Home;