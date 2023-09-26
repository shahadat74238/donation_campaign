import { useEffect, useState } from "react";
import Donations from "../../Components/Donations/Donations";
import Banner from "./Banner/Banner";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("../data.json")
      .then((res) => res.json())
      .then((data) => {
        if (search) {
          const filterData = data.filter((d) => d.category.toLowerCase() === search.toLocaleLowerCase());
          setCategories(filterData);
        } else {
          setCategories(data);
        }
      });
  }, [search]);

  const handleSearch = () => {
    const searchField = document.getElementById("searchField");
    const searchText = searchField.value;
    setSearch(searchText);
  };
  return (
    <div>
      <Banner handleSearch={handleSearch}></Banner>
      <Donations categories={categories}></Donations>
    </div>
  );
};

export default Home;
