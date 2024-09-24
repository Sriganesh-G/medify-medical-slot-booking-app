import React from "react";
import Navbar from "../../components/Navbar/Navbar";

const SearchResultsPage = () => {
  return (
    <div>
      <Navbar />
      {/* search input section */}
      <div>
        <SearchBar
          value="State"
          statesData={statesData}
          selectedState={selectedState}
          setSelectedState={setSelectedState}
        />
        <CitiesInputBar
          value="City"
          citiesData={citiesData}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          isDisabled={!selectedState}
        />
        <Buttons onClick={handleClick} icon={true} value="Search" />
      </div>
    </div>
  );
};

export default SearchResultsPage;
