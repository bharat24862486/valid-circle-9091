import { Checkbox } from "@chakra-ui/react";
import React from "react";

const FilterByCat = ({ children }) => {
  return (
    <>
      <label>
        <Checkbox>{children}</Checkbox>
      </label>
    </>
  );
};

export default FilterByCat;
