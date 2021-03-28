import { IoIosSearch } from "react-icons/io";
export const SearchBar = (props) => {
  return (
    <div className="searchBox">
      <form>
        <span>
          <IoIosSearch className="searchIcon" size={"1.5rem"} color={"#999"} />
        </span>{" "}
        <input
          type="search"
          className="searchField"
          placeholder="Cari nama atau bank"
          onChange={props.handleChange}
          value={props.value}
        ></input>
        <select
          name="sortTransaction"
          className="filterOptions"
          onChange={props.handleSorting}
        >
          <option> Urutkan </option>
          <option value="A-Z">Name A-Z</option>
          <option value="Z-A">Name Z-A</option>
        </select>
      </form>
    </div>
  );
};
