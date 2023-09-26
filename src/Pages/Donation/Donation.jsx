import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Donation = () => {
  const [category, setCategory] = useState([]);
  const [noData, setNoData] = useState("");
  const [btnShow, setBtnShow] = useState(false);

  useEffect(() => {
    const donationData = JSON.parse(localStorage.getItem("donation"));
    if (donationData) {
      setCategory(donationData);
    } else {
      setNoData("Nothing was donated");
    }
  }, []);

  return (
    <div>
      {noData ? (
        <div>
          <div className="h-screen flex justify-center items-center my-20">
            <div>
              <h1 className="text-5xl font-bold">{noData}</h1>
              <p className="text-center my-5 font-semibold text-2xl">
                Please Donate
              </p>
              <div className="flex justify-center">
                <Link to="/">
                  <button className="py-2 px-4 bg-black text-white rounded-md">
                    Donate
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mx-5 lg:mx-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto my-20">
            {btnShow
              ? category.map((donation) => (
                  <div
                    key={donation.id}
                    style={{ backgroundColor: `${donation.card_bg}` }}
                    className="grid grid-cols-2 items-center gap-6 rounded-lg"
                  >
                    <div className="col-span-1">
                      <img
                        className="h-52 w-full object-cover rounded-l-lg"
                        src={donation.picture}
                        alt=""
                      />
                    </div>
                    <div className="col-span-2">
                      <span
                        style={{
                          backgroundColor: `${donation.category_bg}`,
                          color: `${donation.text_button_bg}`,
                        }}
                        className="py-1 px-3 rounded"
                      >
                        {donation.category}
                      </span>
                      <h1 className="font-semibold text-2xl my-2">
                        {donation.title}
                      </h1>
                      <p
                        style={{ color: `${donation.text_button_bg}` }}
                        className="font-semibold text-lg"
                      >
                        ${donation.price}
                      </p>
                      <NavLink to={`/details/${donation.id}`}>
                        <button
                          style={{
                            backgroundColor: `${donation.text_button_bg}`,
                          }}
                          className="py-2 mt-5 px-4 rounded-md text-white text-lg font-semibold"
                        >
                          View Details
                        </button>
                      </NavLink>
                    </div>
                  </div>
                ))
              : category.slice(0, 4).map((donation) => (
                  <div
                    key={donation.id}
                    style={{ backgroundColor: `${donation.card_bg}` }}
                    className="grid grid-cols-3 items-center gap-6  rounded-lg"
                  >
                    <div className="col-span-1">
                      <img
                        className="h-52 w-full object-cover rounded-l-lg"
                        src={donation.picture}
                        alt=""
                      />
                    </div>
                    <div className="col-span-2">
                      <span
                        style={{
                          backgroundColor: `${donation.category_bg}`,
                          color: `${donation.text_button_bg}`,
                        }}
                        className="py-1 px-3 rounded"
                      >
                        {donation.category}
                      </span>
                      <h1 className="font-semibold text-2xl my-2">
                        {donation.title}
                      </h1>
                      <p
                        style={{ color: `${donation.text_button_bg}` }}
                        className="font-semibold text-lg"
                      >
                        ${donation.price}
                      </p>
                      <NavLink to={`/details/${donation.id}`}>
                        <button
                          style={{
                            backgroundColor: `${donation.text_button_bg}`,
                          }}
                          className="py-2 mt-5 px-4 rounded-md text-white text-lg font-semibold"
                        >
                          View Details
                        </button>
                      </NavLink>
                    </div>
                  </div>
                ))}
          </div>
          <div
            className={`${btnShow && "hidden"} ${
              category.length <= 4 && "hidden"
            } flex justify-center my-10`}
          >
            <button
              onClick={() => setBtnShow(!btnShow)}
              className="py-2 mt-5 px-4 rounded-md text-white text-lg font-semibold bg-sky-700"
            >
              See All
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Donation;
