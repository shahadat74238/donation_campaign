import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Donations = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("../data.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  

  return (
    <div className="mx-10 lg:mx-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto my-28">
        {categories.map((category) => (
          <div key={category.id}>
            <NavLink to={`/details/${category.id}`} >
              <div
                style={{ backgroundColor: `${category.card_bg}` }}
                className="shadow-md rounded-md cursor-pointer flex flex-col"
              >
                <div>
                  <img
                    className="h-56 w-full rounded-t-md object-cover"
                    src={category.picture}
                    alt="Loading...."
                  />
                </div>
                <div className="p-4">
                  <span
                    style={{
                      color: `${category.text_button_bg}`,
                      backgroundColor: `${category.category_bg}`,
                    }}
                    className="py-1 px-3 rounded font-medium"
                  >
                    {category.category}
                  </span>
                  <h2
                    style={{ color: `${category.text_button_bg}` }}
                    className="text-xl font-semibold mt-2"
                  >
                    {category.title}
                  </h2>
                </div>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Donations;
