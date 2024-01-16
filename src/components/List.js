import React, { useEffect, useState } from "react";

export default function List({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems(3));
    console.log("printeddddddd")
  }, [getItems]);

  return items.map((item) => <div key={item}>{item}</div>);
}
