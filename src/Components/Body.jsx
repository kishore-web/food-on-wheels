import React, { useState, useEffect } from "react";
import { SWIGGY_API } from "../constant/config";
import RestroCard from "./RestroCard";
import "./Body.css";
import { filterdata } from "../Utils/Helper";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Body = () => {
  const [input, setInput] = useState("");
  const [allrestro, setAllrestro] = useState([]);
  const [filteredrestro, setFilteredrestro] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(SWIGGY_API);
      const data = await response.json();
      const fetchedRestro =
        data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      if (fetchedRestro?.length !== 0) {
        setAllrestro(fetchedRestro);
        setFilteredrestro(fetchedRestro);
        console.log(fetchedRestro);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = () => {
    const result = filterdata(input, allrestro);
    setFilteredrestro(result);
    setInput("");
  };

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          className="search-restro"
          value={input}
          onChange={handleChange}
          placeholder="Search for Restaurant"
        />

        <button onClick={handleSearch} className="search-btn">
          {" "}
          <FaSearch />{" "}
        </button>
      </div>
      <div className="container-wrapper">
        <div className="container">
          {filteredrestro?.length === 0 ? (
            <h1>restro not found</h1>
          ) : (
            filteredrestro.map((item) => (
              <Link to={"restaurant/" + item.info.id} key={item.info.id}>
                <RestroCard restrodetail={item} />
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Body;
