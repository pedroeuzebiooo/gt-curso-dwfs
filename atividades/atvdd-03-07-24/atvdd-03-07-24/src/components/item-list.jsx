import React from "react";
import { Item } from "./item";

export const ItemList = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <Item key={index} name={item} />
      ))}
    </ul>
  );
};
