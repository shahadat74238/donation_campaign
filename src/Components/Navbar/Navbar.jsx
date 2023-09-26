import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li className="list-none font-bold text-lg hover:text-[#FF444A] hover:underline ">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="list-none font-bold text-lg hover:text-[#FF444A] hover:underline ">
        <NavLink
          to="/donation"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
          }
        >
          Donation
        </NavLink>
      </li>
      <li className="list-none font-bold text-lg hover:text-[#FF444A] hover:underline ">
        <NavLink
          to="/statistic"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
          }
        >
          Statistics
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="mx-10 lg:mx-0 ">
      <div className="flex flex-col md:flex-row justify-between items-center py-3 lg:max-w-7xl mx-auto">
        <div>
          <NavLink to="/">
            <img className="h-14" src="../../../public/Logo.png" alt="" />
          </NavLink>
        </div>
        <div>
          <div className="my-5 md:my-0 flex gap-10 ">{links}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
