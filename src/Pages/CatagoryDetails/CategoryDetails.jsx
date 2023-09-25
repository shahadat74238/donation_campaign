import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CategoryDetails = () => {
  const [category, setCategory] = useState({});
  const categories = useLoaderData();
  const { id } = useParams();

  useEffect(() => {
    const findCategory = categories?.find((category) => category.id == id);
    setCategory(findCategory);
  }, [id, categories]);

  const handleAddDonation = () => {
    const addedDonationData = [];
    const donationData = JSON.parse(localStorage.getItem("donation"));

    if (!donationData) {
      addedDonationData.push(category);
      localStorage.setItem("donation", JSON.stringify(addedDonationData));
      toast.success("Donate Successfully!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      const isExits = donationData.find((data) => data.id === category.id);
      if (!isExits) {
        addedDonationData.push(...donationData, category);
        localStorage.setItem("donation", JSON.stringify(addedDonationData));
        toast.success("Donate Successfully!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.warn("Already Donated", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };

  return (
    <div>
      <div>
        <div className="max-w-7xl mx-auto mt-20 mb-28">
          <div>
            <img
              className="w-full rounded-lg"
              src={category.picture}
              alt="Loading..."
            />
          </div>
          <div className="">
            <button
              onClick={handleAddDonation}
              style={{ backgroundColor: `${category.text_button_bg}` }}
              className="text-white font-medium py-4 px-7 rounded-lg"
            >
              Donate ${category.price}
            </button>
          </div>
          <div>
            <h2 className="font-bold text-4xl mt-14">{category.title}</h2>
            <p className="mt-6 text-justify text-[#0B0B0BB2]">
              {category.description}
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CategoryDetails;
