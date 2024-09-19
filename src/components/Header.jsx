"use client";
import { mockdata } from "@/mock/mockdata";
import { HeaderLogo } from "./Icons/HeaderLogo";
import { PhoneIcon } from "./Icons/PhoneIcon";
import { SearchIcon } from "./Icons/SearchIcon";
import { useState } from "react";

export const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const filteredData = mockdata.filter((data) =>
    data?.City.toLowerCase().includes(searchValue)
  );
  const filteredDataTitle = mockdata.filter((data) =>
    data.title.toLowerCase().includes(searchValue)
  );
  const handleInputChange = (event) => {
    const searchString = event.target.value;
    setSearchValue(searchString.trim().toLowerCase());
  };
  return (
    <div className="container h-[106px] flex items-center ">
      <div className="flex items-center gap-28">
        <HeaderLogo />
        <div className="flex w-[1000px] h-[62px]">
          <select
            className="flex items-center justify-center rounded-l-lg outline-none border "
            name="rentType"
          >
            <option disabled selected value="">
              RentType
            </option>
            <option value="rent">Rent</option>
            <option value="sell">Sell</option>
          </select>
          <input
            onChange={handleInputChange}
            className="border-t pl-4 border-b outline-none w-[400px] "
            placeholder="Search"
            type="text"
          />
          {filteredData.map((data) => {
            return <div>{data.City}</div>;
          })}
          {filteredDataTitle.map((data) => {
            return <div>{data.title}</div>;
          })}

          <div className="bg-[#5E81F4] rounded-r-lg flex justify-center items-center w-[62px] ">
            <SearchIcon />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-14">
        <div className="flex items-center justify-center gap-4 ">
          <PhoneIcon />
          <p>+ 1 (800) 657 8976</p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <img className="w-10 h-10" src="/Jon-Doe.png" alt="" />
          <p>Jon Doe</p>
        </div>
      </div>
    </div>
  );
};
