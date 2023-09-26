/* eslint-disable react/prop-types */
const Banner = ({ handleSearch }) => {
  return (
    <div className="-mt-20 ">
      <div className="hero min-h-screen">
        <div className="hero-overla"></div>
        <div className="hero-content text-center flex-col text-neutral-content">
          <div className="max-w-7xl mx-auto">
            <h1 className="mb-5 text-5xl text-black font-bold">
              I Grow By Helping People In Need
            </h1>
          </div>
          <div className="relative">
            <input
              id="searchField"
              type="text"
              placeholder="Search here...."
              className="input input-bordered md:w-96 pr-24 text-black"
            />
            <button
              onClick={handleSearch}
              className="btn btn-primary text-white bg-[#FF444A] hover:bg-[#f75d62] border-none absolute top-0 right-0 rounded-l-none"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage:
            "url(https://upicsolutions.org/wp-content/uploads/2020/10/upic-team-cta.jpg )",
        }}
        className="h-screen bg-no-repeat bg-cover -mt-[100vh] relative -z-10 opacity-5"
      ></div>
    </div>
  );
};

export default Banner;

// backgroundImage: 'url(https://upicsolutions.org/wp-content/uploads/2020/10/upic-team-cta.jpg )',
