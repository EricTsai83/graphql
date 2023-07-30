"use client";
import {useQuery, gql} from "@apollo/client";

interface Locations {
  id: number;
  name: string;
  description: string;
  photo: Blob;
}

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

function DisplayLocations() {
  const {loading, error, data} = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.locations.map(({id, name, description, photo}: Locations) => (
    <div key={id}>
      <h3>{name}</h3>
      <img width="400" height="250" alt="location-reference" src={`${photo}`} />
      <br />
      <b>About this location:</b>
      <p>{description}</p>
      <br />
    </div>
  ));
}

export default function Home() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <DisplayLocations />
    </div>
  );
}
