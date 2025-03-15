import { server } from "~/lib/api";

const LISTINGS = `
  query Listings {
    listings {
      id
      title
      image
      address
      price
      numOfGuests
      numOfBeds
      numOfBaths
      rating
    }
  }
`;

function Listings() {
    const fetchListings = async () => {
        const { data } = await server.fetch({ query: LISTINGS });
        console.log(data);
    };


    return <div>
        <h2>Listing</h2>
        <button type="button" onClick={fetchListings}>Query Listings!</button>
    </div>;
}

export { Listings };