import ListingsCardsRow from "./listingCardsRow";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Row } from "react-bootstrap";

function Listings() {
  console.log(useLocation());
  const data = useLocation().state.data;
  const title = useLocation().state.title;
  console.log(data);

  const rows = [];
  for (let i = 0; i < data.length; ) {
    if (i + 4 > data.length) {
      rows.push(
        <ListingsCardsRow cards={data.slice(i, data.length)} keys={i / 4} />
      );
    } else {
      rows.push(<ListingsCardsRow cards={data.slice(i, i + 4)} keys={i / 4} />);
    }
    i += 4;
  }

  return (
    <div>
      <Row className="mx-4 mt-2">
        <h2>{title}</h2>
      </Row>
      {rows}
    </div>
  );
}

export default Listings;
