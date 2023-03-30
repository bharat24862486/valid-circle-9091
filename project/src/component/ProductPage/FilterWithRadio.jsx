import {  Text } from "@chakra-ui/react";
import React from "react";

const FilterWithRadio = ({children}) => {
  return (
    <Text  as="b">
      <label> <input type="radio" />  {children}</label>
      
    </Text>
  );
};

export default FilterWithRadio;
