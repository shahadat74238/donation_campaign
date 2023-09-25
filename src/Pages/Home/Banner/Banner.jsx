const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://upicsolutions.org/wp-content/uploads/2020/10/upic-team-cta.jpg )",
        }}
      >
        <div className="hero-overlay bg-opacity-90"></div>
        <div className="hero-content text-center flex-col text-neutral-content">
          <div className="max-w-7xl mx-auto">
            <h1 className="mb-5 text-5xl font-bold">
              I Grow By Helping People In Need
            </h1>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search here...."
              className="input input-bordered md:w-96 pr-16"
            />
            <button className="btn btn-primary text-white bg-[#FF444A] hover:bg-[#f75d62] border-none absolute top-0 right-0 rounded-l-none">
            Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

// backgroundImage: 'url(https://upicsolutions.org/wp-content/uploads/2020/10/upic-team-cta.jpg )',
