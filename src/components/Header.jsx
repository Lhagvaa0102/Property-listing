"use client";
import { HeaderLogo } from "./Icons/HeaderLogo";
import { PhoneIcon } from "./Icons/PhoneIcon";
import { SearchIcon } from "./Icons/SearchIcon";
import { useState } from "react";
export const Header = () => {
  const DATAS = [
    "Los Angeles",
    "Springfield",
    "Rivertown",
    "Lakeview",
    "Hilltop",
    "Meadowbrook",
    "Greenfield",
    "Forest Hill",
    "Sunset Valley",
    "Brookside",
    "Countryville",
    "Oakridge",
    "Pleasantville",
    "Sunnyvale",
    "Westwood",
    "Kingsley",
    "Rosewood",
    "Maplewood",
    "Cedar Creek",
    "Silver Lake",
    "Parkside",
    "Riverdale",
    "Lakeshore",
    "Highland",
    "Blue Ridge",
    "Granite Falls",
  ];

  const [searchValue, setSearchValue] = useState("");
  const filtereddata = DATAS.filter((data) =>
    data.toLocaleLowerCase().includes(searchValue)
  );
  const handleInputChange = (event) => {
    const searchString = event.target.value;
    setSearchValue(searchString.trim().toLocaleLowerCase());
  };
  const [selectedValue, setSelectedValue] = useState("data");
  return (
    <div className="container flex justify-around items-center  h-[106px]">
      <div className="flex justify-between items-center gap-5">
        <HeaderLogo />
        <div className="flex justify-center relative ">
          <button className="w-[64px] border h-[64px] flex justify-center items-center">
            Rent
          </button>
          <div className="fixed">
            <input
              className="border dropdown w-200px   "
              placeholder="Search"
              type="text"
              onChange={handleInputChange}
              value={searchValue}
            />
            {filtereddata.map((data) => {
              return (
                <div>
                  <ul>
                    <li>{data}</li>
                  </ul>
                </div>
              );
            })}
          </div>

          <button className="w-[64px] h-[64px] flex justify-center items-center bg-blue-600 ">
            <SearchIcon />
          </button>
        </div>
      </div>
      <div className="flex gap-7">
        <div className="flex items-center gap-2">
          <PhoneIcon />
          <p>+ 1 (800) 657 8976</p>
        </div>
        <div className="flex items-center gap-2">
          <img className="w-10 h-10" src="/Jon-Doe.png" />
          <p>Jon Doe</p>
        </div>
      </div>
    </div>
  );
};
