import { HeaderLogo } from "./Icons/HeaderLogo";
import { SearchIcon } from "./Icons/SearchIcon";

export const Header = () => {
  return (
    <div className="container h-[106px] flex items-center ">
      <div className="flex items-center gap-28">
        <HeaderLogo />
        <div className="flex w-[800px] h-[62px]">
          <option
            className="flex items-center justify-center rounded-l-lg w-[62px] border "
            value=""
          >
            <select name="Rent" id="">
              Rent
            </select>
          </option>
          <input
            className="border-t border-b outline-none"
            placeholder="Search"
            type="text"
          />
          <div className="bg-[#5E81F4] rounded-r-lg flex justify-center items-center w-[62px] ">
            <SearchIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
