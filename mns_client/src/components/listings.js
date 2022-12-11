import { useEffect, useState } from "react";
import ListingsCardsRow from "./listingCardsRow";
import { Row, Container } from "react-bootstrap";

function Listings() {
  const [listingsData, setListingsData] = useState([]);
  useEffect(() => {
    const dataFetch = () => {
      fetch("http://localhost:3000/listings/")
        .then((response) => response.json())
        .then((data) => setListingsData(data));
    };
    dataFetch();
  }, []);
  const rows = [];
  for (let i = 0; i < listingsData.length; ) {
    if (4 * i + 4 > listingsData.length) {
      rows.push(
        <ListingsCardsRow
          cards={listingsData.slice(i, listingsData.length)}
          keys={i / 4}
        />
      );
    } else {
      rows.push(
        <ListingsCardsRow cards={listingsData.slice(i, i + 4)} keys={i / 4} />
      );
    }
    i += 4;
  }
  return <div>{rows}</div>;
}

export default Listings;
