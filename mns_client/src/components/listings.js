import ListingsCardsRow from "./listingCardsRow";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

function Listings() {
  console.log(useLocation());
  const data = useLocation().state.data;
  console.log(data);

  const rows = [];
  for (let i = 0; i < data.length; ) {
    if (4 * i + 4 > data.length) {
      rows.push(
        <ListingsCardsRow cards={data.slice(i, data.length)} keys={i / 4} />
      );
    } else {
      rows.push(<ListingsCardsRow cards={data.slice(i, i + 4)} keys={i / 4} />);
    }
    i += 4;
  }

  const [date, setDate] = useState();

  return <div>{rows}</div>;
}

export default Listings;
