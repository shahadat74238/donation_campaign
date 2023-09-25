import { useEffect, useState } from "react";

const Donation = () => {
    const [category, setCategory] = useState();
    console.log(category);

    useEffect(()=>{
        const donationData = JSON.parse(localStorage.getItem("donation"));
        if(donationData){
            setCategory(donationData)
        }
        else{
            <div>
                <h1>no donation here</h1>
            </div>
        }
    },[])

    return (
        <div>
            <h1>Donation</h1>
        </div>
    );
};

export default Donation;