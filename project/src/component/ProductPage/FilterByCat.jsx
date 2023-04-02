import { Checkbox } from "@chakra-ui/react";
import React from "react";

const FilterByCat = ({ children }) => {


  return (  <Checkbox style={{textTransform: 'capitalize'}} >{children}</Checkbox> );
};

export default FilterByCat;
